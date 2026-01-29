import ObsReport from "./ObservationReport.js"
const { div, button, input, p, hr, span, select, option, article, summary } = van.tags;

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

export default async function Reports() {
  const shiftDateStr = van.state(new Date().toLocaleDateString('en-CA'))
  const incidentRecs = van.state([])

  const dateNavBack = () => {
    let shiftDate = document.getElementById('shift-date')
    shiftDate.value = dataBase.subDays(new Date(shiftDate.value), 1).toLocaleDateString('en-CA')
    shiftDateStr.val = shiftDate.value
    shiftDate.dispatchEvent(new Event('change'))
  }
  const dateNavForward = () => {
    let shiftDate = document.getElementById('shift-date')
    shiftDate.value = dataBase.addDays(new Date(shiftDate.value), 2).toLocaleDateString('en-CA')
    shiftDateStr.val = shiftDate.value
    shiftDate.dispatchEvent(new Event('change'))
  }

  const shiftDateChanged = async (e) =>{
    shiftDateStr.val = e.currentTarget.value
    
    console.log(new Date(shiftDateStr.val).toLocaleDateString('en-CA'),dataBase.addDays(new Date(shiftDateStr.val),1).toLocaleDateString('en-CA') )
    
    var x = await load(dataBase.addDays(new Date(shiftDateStr.val),1))
    incidentRecs.val = x
    console.log("loaded", shiftDateStr.val,x)
  }

  const load = async (sDate) => {
    let startTimeStamp = sDate
    let endTimeStamp = dataBase.addDays(sDate,1)
    startTimeStamp.setHours(20); startTimeStamp.setMinutes(30)
    endTimeStamp.setHours(7); endTimeStamp.setMinutes(0)
    var recs = await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, tableName, 'Date and Time of Incident', "asc")
    
    ///////////////////////////////////////////////////////////////////////////// 

    var times = {}
    recs.forEach(rec => {
      if(Object.keys(times).indexOf(rec.createdTime) == -1){
        times[rec.createdTime] = 1
      } else {
        times[rec.createdTime] = times[rec.createdTime] + 1
      }
    })

    var mandatoryCreationTime = ""
    var largest = 0;
    Object.keys(times).forEach(itm => {
      if (times[itm] > largest) {
          largest = times[itm];
          mandatoryCreationTime = itm
      }
    })

    recs.forEach(rec => {
      if(dataBase.isDateWithinMinutes(new Date(rec.createdTime),new Date(mandatoryCreationTime),1)) {
        rec.isMandatory = true
        rec.route = dataBase.propIdToRouteLookup[rec.rec.fields['Property Code'][0]]
      }
    })

    console.log(recs.length)
    return recs
  }


console.log("Hello", incidentRecs.val, shiftDateStr.val)

  return div({ class: "container", style: "margin-top: 50px;" },
    div({ style: "display: flex; justify-content: space-around; align-items: center; margin-bottom: 40px;" },
      button({ onclick: dateNavBack }, "<-"),

      input({ id: "shift-date",
              value: new Date(shiftDateStr.val).toLocaleDateString('en-CA'),
              type: "date",
              style: "width: 150px; margin: 0;",
              onchange: await shiftDateChanged
            }),
      button({ onclick: dateNavForward }, "->"),
    ),

    hr(),
    span("Filter by route"),
    select({ id: "filterbyroute" },
      option({ value: "none" }, "No Filter"),
      option({ value: "South Route" }, "South Route"),
      option({ value: "NE Route" }, "NE Route"),
    ),

    article({ id: "recordslist" },
      summary({ "aria-busy": "true" }, span("Mand"),
        //[() => incidentRecs.val?.map(rec => p(span("hi")))] //ObsReport(rec.id)
        //() => shiftDateStr.val ? incidentRecs.val?.map(rec => p(rec.id)) : [p("No records loaded")]
        () => div(incidentRecs.val.map(rec => ObsReport(rec.rec)))
      ),
    ),
  )

}