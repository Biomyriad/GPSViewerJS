import ObsReport from "./ObservationReport.js"
import disReport from "./DispatchReports.js"
import vehReport from "./VehicleReport.js"

const { div, button, input, p, hr, span, select, option, article, summary } = van.tags;

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

export default async function Reports() {
  //console.log("COMPONENT RELOAD") //lifecycle test

  const shiftDateStrVal = van.state(dataBase.addDays(new Date(),1).toLocaleDateString('en-CA'))
  const routeFilterVal = van.state("none")
  const incidentRecsVal = van.state([])
  const dispatchRecsVal = van.state([])
  const vehicleRecsVal = van.state([])
  
  const dateNavBack = () => {
    let shiftDate = document.getElementById('shift-date')
    shiftDate.value = dataBase.subDays(new Date(shiftDate.value), 1).toLocaleDateString('en-CA')
    shiftDateStrVal.val = shiftDate.value

    shiftDate.dispatchEvent(new Event('change'))
  }
  const dateNavForward = () => {
    let shiftDate = document.getElementById('shift-date')
    shiftDate.value = dataBase.addDays(new Date(shiftDate.value), 2).toLocaleDateString('en-CA')
    shiftDateStrVal.val = shiftDate.value
    shiftDate.dispatchEvent(new Event('change'))
  }

  const shiftDateChanged = async (e) =>{
    shiftDateStrVal.val = e.currentTarget.value
    
    //console.log(new Date(shiftDateStrVal.val).toLocaleDateString('en-CA'),dataBase.addDays(new Date(shiftDateStrVal.val),1).toLocaleDateString('en-CA') )
    
    var x = await load(dataBase.addDays(new Date(shiftDateStrVal.val),1))
    incidentRecsVal.val = x[0]
    dispatchRecsVal.val = x[1]
    vehicleRecsVal.val = x[2]
    //console.log("shiftDateChangedFn ", dataBase.addDays(new Date(shiftDateStrVal.val), 1).toLocaleDateString('en-CA'), x.length)
  }

  const load = async (sDate) => {
    console.log(sDate.toLocaleDateString('en-CA'))
    //console.log("CALL AIRTABLE REPORTS") //lifecycle test
    let startTimeStamp = sDate
    let endTimeStamp = dataBase.addDays(sDate,1)
    startTimeStamp.setHours(20); startTimeStamp.setMinutes(30)
    endTimeStamp.setHours(7); endTimeStamp.setMinutes(0)
    var recs = await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, "Incident Reports and Observations", 'Date and Time of Incident', "asc")
    
    var disRecs = await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, "Calls to Dispatch", 'Time of Call', "asc")
    console.log("DISPATCH RECORDS LOADED: ", disRecs.length, disRecs)
    console.log(disRecs)

    var vRecs = await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, "tblYtM9Kwqwecipu3", 'Date of Tag/Tow', "asc")
    //var vRecs = await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, "Vehicle Tag/Tow", 'Date of Tag/Tow', "asc")
    console.log("TagTow RECORDS LOADED: ", vRecs.length, vRecs)
    console.log(vRecs)
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

    //console.log(recs)
    return [recs, disRecs, vRecs]
  }


  //console.log("RETURNING HTML SECTION") //lifecycle test
  return div({ class: "container", style: "margin-top: 15px;" },
    div({ style: "display: flex; justify-content: space-around; align-items: center; margin-bottom: 20px;" },
      button({ onclick: dateNavBack }, "<-"),

      input({ id: "shift-date",
              value: new Date(shiftDateStrVal.val).toLocaleDateString('en-CA'),
              type: "date",
              style: "width: 150px; margin: 0;",
              onchange: await shiftDateChanged
            }),
      button({ onclick: dateNavForward }, "->"),
    ),

    hr(),
    span("Filter by route"),
    select({ id: "filterbyroute", value: "none", onchange: e => routeFilterVal.val = e.target.value },
      option({ value: "none" }, "No Filter"),
      option({ value: "South Route" }, "South Route"),
      option({ value: "NE Route" }, "NE Route"),
    ),
//{ "aria-busy": "true" }
    article({ id: "recordslist" },
      summary({style: "padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;"},"Mandatory Reports"),
      () => div(incidentRecsVal.val.map(
        (rec) =>{
          if(rec.isMandatory == true) {
            if(rec.route.includes(routeFilterVal.val) || routeFilterVal.val == 'none') {
              //createReportHtml(rec.rec, chkReports(rec))
              return ObsReport({rec: rec.rec,errCol: chkReports(structuredClone(rec))})
            } 
          }
        }
      )),
      summary({style: "padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;"},"Extra Reports"),
      () => div(incidentRecsVal.val.map(
        (rec) =>{
            if(rec.isMandatory == false) {
              if(rec.route.includes(routeFilterVal.val) || routeFilterVal.val == 'none') {
              //   createReportHtml(rec.rec)
                  return ObsReport({rec: rec.rec,errCol: chkReports(structuredClone(rec))})
              } 
            }
          }
      )),
      summary({style: "padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;"},"Dispatched Reports"),
      () => div(dispatchRecsVal.val.map(
        (rec) =>{
              if(rec.route.includes(routeFilterVal.val) || routeFilterVal.val == 'none') {
              //   createReportHtml(rec.rec)
              //    return ObsReport({rec: rec.rec,errCol: chkReports(rec)})
                  return disReport({rec: rec.rec, errCol: "transparent"})
              } 
          }
      )),
      summary({style: "padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;"},"Tags & Tow Reports"),
      () => div(vehicleRecsVal.val.map(
        (rec) =>{
              if(rec.route.includes(routeFilterVal.val) || routeFilterVal.val == 'none') {
              //   createReportHtml(rec.rec)
              //    return ObsReport({rec: rec.rec,errCol: chkReports(rec)})
                  return vehReport({rec: rec.rec, errCol: "transparent"})
              } 
          }
      )),
    ),
    () => {
      load(new Date(shiftDateStrVal.val))
      .then((x) => {
        incidentRecsVal.val = x[0]
        dispatchRecsVal.val = x[1]
        vehicleRecsVal.val = x[2]
      })
      .catch((err) => console.log("LOAD ERR: ", err))
  }
  )

}





///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function chkReports(rec) {
  var p204Text = 
`Patrolled all 3 communities for signs of break ins, vagrant activity, and violations of community guidelines. 

Main community:
B building status: 

Campbell Run Meadows: 
Q building status: 

Campbell Run Trailside: `

  var p590Text =
  `Status of the fence:

Details of encampment remains:`


  var propDetails = dataBase.lookupPropertyById(rec.rec.fields["Property Code"][0])
  var propNum = propDetails.fields["AOG Property Code"]
  var timeOfRecord = new Date(rec.rec.fields["Date and Time of Incident"])
  var recPics = rec.rec.fields["Picture or other attachment if needed"]

  if ([propNum] == "204") {
    if(rec.rec.fields["Description of incident or observation"] == p204Text) {
      return "red"
    }

  }

  if ([propNum] == "173") {
    var reportSplit = rec.rec.fields["Description of incident or observation"].split(/Patrol Time .:/)

    reportSplit.forEach(entry => { // check of all patrols NOT empty else red
      if(isEmptyOrWhitespace(entry.trim())) {
        res = true
      }
    })
    if(res == true) return "red"

    // then check for 3 pics
    if(recPics) {
      if(!recPics.length >= 3) {
       //console.log("173 PIC: " + recPics.length)
        return "red"
      }
    } else {
      //console.log("173 PIC: none" )
      return "red"
    }

  }

  if ([propNum] == "590") {
    // if(rec.rec.fields["Description of incident or observation"] == p590Text) {
    //   return "red"
    // }

    var reportSplit = rec.rec.fields["Description of incident or observation"].split("Status of the fence:")
    // is really for "Status of the fence:" below
    var reportSplit2 = rec.rec.fields["Description of incident or observation"].split("Details of encampment remains:")
    // is really for "Details of encampment remains:" below
    var reportSplit3 = reportSplit2[0].split("Status of the fence:")

    if(isEmptyOrWhitespace(reportSplit2[1].trim())) {
      return "red"
    }

    if(isEmptyOrWhitespace(reportSplit3[1].trim())) {
      return "red"
    }

    if(recPics) {
      if(!recPics.length >= 1) {
        //console.log("590 PIC: " + recPics.length)
        return "red"
      }
    } else {
      //console.log("590 PIC: none" )
      return "red"
    }
  }

  if ([propNum] == "155") {

  }

  if ([propNum] == "151") {
    // DONT forget to use trim()
    var reportSplit = rec.rec.fields["Description of incident or observation"].split(/... Patrol:/)
    var res = false

    reportSplit.forEach(entry => { // check of all patrols NOT empty else red
      if(isEmptyOrWhitespace(entry.replaceAll(".", " ").trim())) {
        res = true
      }
    })

    if(res == true) return "red"
  }

  if ([propNum] == "177") {
    var reportSplit = rec.rec.fields["Description of incident or observation"].split("Status of breezeways:")
    if(isEmptyOrWhitespace(reportSplit[1].trim())) {
      return "red"
    }
  }
  // if ([propNum] == "161") {

  //   console.log(rec)
  // }
  // if ([propNum] == "176") {

  //   console.log(rec)
  // }
  // if ([propNum] == "184") {

  //   console.log(rec)
  // }
  // if ([propNum] == "38") {

  // }

  if(timeOfRecord.getHours() == 21 && timeOfRecord.getMinutes() == 0) {
    return "red"
  } 

  return "transparent"

}

function isEmptyOrWhitespace(str) {
  return str === null || str === undefined || str.trim().length === 0;
}        