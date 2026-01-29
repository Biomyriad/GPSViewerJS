import ObsReport from "./ObservationReport.js"
const { div, button, input, p, hr, span, select, option, article, summary } = van.tags;

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

export default async function Reports() {
  var incidentRecs = []
  var shiftDate = new Date(document.getElementById('shift-date').value)

  const load = () => {
  let startTimeStamp = shiftDate
  let endTimeStamp = dataBase.addDays(shiftDate,1)
  startTimeStamp.setHours(20); startTimeStamp.setMinutes(30)
  endTimeStamp.setHours(7); endTimeStamp.setMinutes(0)
  incidentRecs = await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, tableName, 'Date and Time of Incident', "asc")
  
  /////////////////////////////////////////////////////////////////////////////// 
  var times = {}
  incidentRecs.forEach(rec => {
    //console.log(rec.createdTime + " = " + rec.rec.fields['Record Code'], rec)
    if(Object.keys(times).indexOf(rec.createdTime) == -1){
      times[rec.createdTime] = 1
    } else {
      times[rec.createdTime] = times[rec.createdTime] + 1
    }
  })
  //console.log('++ ')
  //console.log("EOL 1st", times)         // sort by route, sort by mandatory
    
  var mandatoryCreationTime = ""
  var largest = 0;
  Object.keys(times).forEach(itm => {
    if (times[itm] > largest) {
        largest = times[itm];
        mandatoryCreationTime = itm
    }
  })

  // console.log("EOL 2nd", times)
  // console.log('++ ', largest + "  --  " + mandatoryCreationTime)

  incidentRecs.forEach(rec => {
    //console.log(rec.createdTime + " = " + rec.rec.fields['Record Code'], rec)
    if(dataBase.isDateWithinMinutes(new Date(rec.createdTime),new Date(mandatoryCreationTime),1)) {
      rec.isMandatory = true
      rec.route = dataBase.propIdToRouteLookup[rec.rec.fields['Property Code'][0]]
      //console.log(rec)
    }
  })

  //await sleep(1000)
  
  // console.log("Hello", incidentRecs)

  return div(
        () => {
          return incidentRecs.map((rec) => {
            console.log(rec.id)
            return p("hi")//ObsReport(rec.id)
          })
        },
      )

      
}