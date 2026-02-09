const {div,button,input,textarea,img,label,hr,span,select,option,article,summary,details,fieldset,h0,h1,h2,h3,h4,h5,h6} = van.tags;

export default function ObservationReport({rec, errCol}) {
// prop
// timeDate
// Officer
// -----------
// *Tag or Tow
// *Reason
// Make Model
// Plate#
// *Plate State
// *Color
// Notes
// picture

  const timeOfReport = new Date(rec.fields['Date of Tag/Tow'])
  timeOfReport.setSeconds(0,0)

  const propertyIdVal = van.state(rec.fields['Property Code'] ? rec.fields['Property Code'][0] : "")
  const timeOfReportVal = van.state( (new Date(timeOfReport.getTime() - timeOfReport.getTimezoneOffset() * 60000).toISOString()).slice(0, -1) || "")
  const officerVal = van.state(rec.fields['Officer name'] || "")
  const tagTowVal = van.state(rec.fields['Tag or Tow?'] || "")
  const reasonVal = van.state(rec.fields['Reason for Tag'] || [])
  const makeModelVal = van.state(rec.fields['Vehicle Make and Model'] || "")
	const plateNumberVal = van.state(rec.fields['Vehicle Lic#'] || "")
  const plateStateVal = van.state(rec.fields['Lic plate state'] || "")
	const colorVal = van.state(rec.fields['Car color'] || "")
  const notesVal = van.state(rec.fields['Other notes'] || "")
  const picturesVal = van.state(rec.fields['Pic'] || [])



  var routeColor = ""
  var prop = dataBase.allProps.find(prop => prop.id == propertyIdVal.val) //rec.fields['Property Code'][0]) //might trigger refresh
  if(prop.fields.Route.includes('South Route')) {
    routeColor = "green"
  }
  if(prop.fields.Route.includes('NE Route')) {
    if(routeColor == "green") {routeColor = "purple"}
    else {routeColor = "blue"}
  }
  if(routeColor == "" ) {
    routeColor = "gray"
  }


  var propertySelections = dataBase.allProps.map(item => {
        return option({value: item.id, selected: (propertyIdVal.val == item.id)}, item.fields.Name)})
  var officerSelections = dataBase.vehicleOfficerList.map(item => {
        return option({value: item.id, selected: (officerVal.val == item.name)}, item.name)})

  var tagTowSelections = dataBase.tagTowOptionsList.map(item => {
        return option({value: item.id, selected: (tagTowVal.val == item.name)}, item.name)})
  var plateSelections = dataBase.licPlateList.map(item => {
        return option({value: item.id, selected: (plateStateVal.val == item.name)}, item.name)})
  var colorSelections = dataBase.carColorList.map(item => {
        return option({value: item.id, selected: (colorVal.val == item.name)}, item.name)})

  var reasonForIncidentMultiSelections = dataBase.reasonForIncidentList.map(item => {
        return option({value: item.id, selected: (reasonVal.val == item.name)}, item.name)})        



  function formatTime(dt) {
    dt = new Date(dt)

    var ap = "AM"
    var h = dt.getHours()
    var m = dt.getMinutes()
    var MM = dt.getMonth() + 1
    var DD = dt.getDate()

    if(h > 12) {
      h = h - 12
      ap = "PM"
    }
    if(h == 0) h=12
    if(m < 10) m = "0" + m
    if(DD < 10) DD = "0" + DD
    return `${MM}/${DD} ${h}:${m} ${ap}`
  }

  const save = () => {
  }

save()

// prop
// timeDate
// Officer
// -----------
// *Tag or Tow
// *Reason
// Make Model
// Plate#
// *Plate State
// *Color
// Notes
// picture

return details({name: "record-container", class: "vehiclerecord", id: rec.id+"-record"}, //open:"open"},
  summary({class: "rec-title", id: rec.id+"-title", style: `border-color: ${errCol};`},
    div({class: "rec-routecolorbox", id: rec.id+"-routecolorbox", style: `background-color: ${routeColor};`},),
    `${formatTime(timeOfReport)}`+ " " + prop.fields.Name
  ),
  article({class: "rec-content", id: rec.id+"-content"},

    div({style: "position: relative;"},
      label("Site/Property:"), 
      select({class: "propselect", id: rec.id+"-propertycode", style: "display: block;", value: propertyIdVal.rawVal, onchange: e => propertyIdVal.rawVal = e.target.value},
        option({value: ""}, "Select Property"), propertySelections
      ),
    ),

    div({style: "display: flex; gap: 10px; width: 100%;"},

      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Time Of Report:"),
        input({
                class: "datetimeinput", id: rec.id+"-timeofreport", type: "datetime-local",
                style: "position: absolute; opacity: 0%;",
                value: timeOfReportVal.val, oninput: e => timeOfReportVal.val = e.target.value},
        ),
        div({class: "readonly-text",tabindex:"0", style: "display: flex; justify-content: space-between; align-items: center; "},
          van.derive(() => formatTime(timeOfReportVal.val)  ),
          img({src: `../images/calendar.svg`, style: "height: 30px; width: 30px;"}),
        ),
      ),

      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Officer:"), 
        select({class: "officerselect", id: rec.id+"-officer", style: "display: block;", value: officerVal.rawVal, onchange: e => officerVal.rawVal = e.target.value},
          option({value: ""}, "Select Officer"), officerSelections
        ),
      ),

    ),

    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Tag/Tow:"),     
        select({class: "officerselect", id: rec.id+"-tagtow", style: "display: block;", value: tagTowVal.rawVal, onchange: e => tagTowVal.rawVal = e.target.value},
          option({value: ""}, "Select Tag/Tow"), tagTowSelections
        ),
      ),

      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Car Color:"),     
        select({class: "officerselect", id: rec.id+"-carcolor", style: "display: block;", value: colorVal.rawVal, onchange: e => colorVal.rawVal = e.target.value},
          option({value: ""}, "Select Car Color"), colorSelections
        ),
      ),
    ),

    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; width: 100%;"},
        label("Plate #:"), 
        input({class: "platenumberinput", id: rec.id+"-platenumber", type: "text", style: "display: block; margin-bottom: 5px;",
                value: plateNumberVal.rawVal, onchange: e => plateNumberVal.rawVal = e.target.value},
        ),
      ),

      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Plate State:"),     
        select({class: "officerselect", id: rec.id+"-platestate", style: "display: block;", value: plateStateVal.rawVal, onchange: e => plateStateVal.rawVal = e.target.value},
          option({value: ""}, "Select Plate State"), plateSelections
        ),
      ),
    ),

    div({style: "position: relative; width: 100%;"},
      label("Make/Model:"), 
      input({class: "makemodelinput", id: rec.id+"-makemodel", type: "text", style: "display: block; margin-bottom: 5px;",
              value: makeModelVal.rawVal, onchange: e => makeModelVal.rawVal = e.target.value},
      ),
    ),

    div({style: "position: relative;"},
      label("Notes:"),     
      textarea({class: "tagnotestextarea", id: rec.id+"-notes", style: "margin-bottom: 5px; field-sizing: content; height: 70px;",
        value: notesVal.rawVal, onchange: e => notesVal.rawVal = e.target.value},
      ),
    ),

    div({style: "position: relative;"},
      label("Pictures:"), 
      article({class: "pictureareaaa", id: rec.id+"-pictures", style: "display: flex; justify-content: space-between; height: 118px;  margin-bottom: 5px;"},
        (   // ternary
            picturesVal.val.length > 0
          ?
            picturesVal.val.map(item => {
              return img({src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px"})
            })
          :
            ""
        )
      ),
    ),

    

    // div({style: "display: flex; gap: 10px; width: 100%;"},
    //   div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
    //     label("Time Of Resolution:"),
    //     input({
    //             class: "datetimeinput", id: rec.id+"-timeofresolution", type: "datetime-local",
    //             style: "position: absolute; opacity: 0%;",
    //             value: timeOfResolutionVal.val, oninput: e => timeOfResolutionVal.val = e.target.value},
    //     ),
    //     div({class: "readonly-text",tabindex:"0", style: "display: flex; justify-content: space-between; align-items: center; "},
    //       van.derive(() => formatTime(timeOfResolutionVal.val)  ),
    //       img({src: `../images/calendar.svg`, style: "height: 30px; width: 30px;"}),
    //     ),
    //   ),  

    //   div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
    //     label("Responding Officer:"),     
    //     select({class: "officerselect", id: rec.id+"-respondingofficer", style: "display: block;", value: officerVal.rawVal, onchange: e => officerVal.rawVal = e.target.value},
    //       option({value: ""}, "Select Officer"), respondingOfficerSelections
    //     ),
    //   ),
    // ),

    // div({style: "display: flex; gap: 10px; width: 100%;"},
    //   div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
    //     label("Caller's Unit Number:"),     
    //     input({class: "callersaptinput", id: rec.id+"-callersapt", type: "text", style: "display: block; margin-bottom: 5px;",
    //           value: callersAptVal.rawVal, onchange: e => callersAptVal.rawVal = e.target.value},
    //     ),
    //   ),

    //   div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
    //     label("Offending Unit's Number:"), 
    //     input({class: "offendersaptinput", id: rec.id+"-offendersapt", type: "text", style: "display: block; margin-bottom: 5px;",
    //             value: offendersAptVal.rawVal, onchange: e => offendersAptVal.rawVal = e.target.value},
    //     ),
    //   ),
    // ),

    // div({style: "display: flex; gap: 10px; width: 100%;"},
    //   div({style: "position: relative; width: 100%;"},
    //     label("Caller's Name:"), 
    //     input({class: "nameofcallerinput", id: rec.id+"-nameofcaller", type: "text", style: "display: block; margin-bottom: 5px;",
    //             value: nameOfCallerVal.rawVal, onchange: e => nameOfCallerVal.rawVal = e.target.value},
    //     ),
    //   ),

    //   div({style: "position: relative; width: 100%;"},
    //     label("Call Type:"), 
    //     select({class: "officerselect", id: rec.id+"-calltype", style: "display: block; margin-bottom: 5px;", value: callTypeVal.rawVal, onchange: e => callTypeVal.rawVal = e.target.value},
    //       option({value: ""}, "Select Call Type"), // TODO: populate call types from database
    //     ),
    //   ),
    // ),

    // div({style: "position: relative;"},
    //   label("Description of Incident:"),     
    //   textarea({class: "reasonforcalltextarea", id: rec.id+"-reasonforcall", style: "margin-bottom: 5px; field-sizing: content; height: 118px;",
    //     value: reasonForCallVal.rawVal, onchange: e => reasonForCallVal.rawVal = e.target.value},
    //   ),
    // ),

    // div({style: "position: relative;"},
    //   label("Resolution:"), 
    //   textarea({class: "resolutiontextarea", id: rec.id+"-resolution", style: "margin-bottom: 5px; field-sizing: content; height: 118px;",
    //     value: resolutionVal.rawVal, onchange: e => resolutionVal.rawVal = e.target.value},
    //   ),
    // ),

    // div({style: "position: relative;"},
    //   label("Pictures:"), 
    //   article({class: "pictureareaaa", id: rec.id+"-pictures", style: "display: flex; justify-content: space-between; height: 118px"},
    //     (   // ternary
    //         picturesVal.val.length > 0
    //       ?
    //         picturesVal.val.map(item => {
    //           return img({src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px"})
    //         })
    //       :
    //         ""
    //     )
    //   ),
    // ),

    div({class: "buttonbox ", id: rec.id+"-buttons"},
      button({onclick: save},"Save"),
      button("Cancel"),
    ),  
  ),
)
};