const {div,button,input,textarea,img,label,hr,span,select,option,article,summary,details,fieldset,h0,h1,h2,h3,h4,h5,h6} = van.tags;

export default function ObservationReport({rec, errCol}) {
  var callTimeOfReport = ''
  var calculatedCallTimeOfReport = ''
  var calculatedResolutionTimeOfReport = ''

  
  if(rec.fields["Time of Call"] == "" || rec.fields["Time of Call"] == undefined) {

  } else {
    callTimeOfReport = new Date(rec.fields['Time of Call'] ? rec.fields['Time of Call'] : "")
    callTimeOfReport.setSeconds(0,0)
    calculatedCallTimeOfReport = new Date(callTimeOfReport.getTime() - callTimeOfReport.getTimezoneOffset() * 60000).toISOString().slice(0, -1)
  }
  console.log(rec.fields["Time of resolution"])
  if(rec.fields["Time of resolution"] == "" || rec.fields["Time of resolution"] == undefined) {

  } else {
    var resolutionTimeOfReport = new Date(rec.fields['Time of resolution'] ? rec.fields['Time of resolution'] : "" )
    resolutionTimeOfReport.setSeconds(0,0)
    console.log(resolutionTimeOfReport)
    calculatedResolutionTimeOfReport = new Date(resolutionTimeOfReport.getTime() - resolutionTimeOfReport.getTimezoneOffset() * 60000).toISOString().slice(0, -1)
  }


	const callersAptVal = van.state(rec.fields['Unit Number'] || "")
  const propertyIdVal = van.state(rec.fields['Property Code'] ? rec.fields['Property Code'][0] : "")
  const timeOfCallVal = van.state( calculatedCallTimeOfReport )
  const offendersAptVal = van.state(rec.fields['Offending Unit'] || "")
  const nameOfCallerVal = van.state(rec.fields['Name of caller'] || "")
  const reasonForCallVal = van.state(rec.fields["Reason for the customer's call"] || "")
  const respondingOfficerVal = van.state(rec.fields['Responding Officer'] || "")
  const timeOfResolutionVal = van.state( calculatedResolutionTimeOfReport )
  const resolutionVal = van.state(rec.fields['Resolution'] || "")
  const dispatchOfficerVal = van.state(rec.fields['Dispatch Officer'] || "")
  const picturesVal = van.state(rec.fields['Pictures'] || [])
  const callTypeVal = van.state(rec.fields['Call Type'] || "")

  var prop = dataBase.allProps.find(prec => prec.id == rec.fields['Property Code'][0])

  var routeColor = ""
  var routeAbbr = ""
  var prop = dataBase.allProps.find(prec => prec.id == rec.fields['Property Code'][0])
  if(prop.fields.Route.includes('South Route')) {
    routeColor = "green"
    routeAbbr = "S"
  }
  if(prop.fields.Route.includes('NE Route')) {
    if(routeColor == "green") {routeColor = "purple"; routeAbbr = "NS"}
    else {routeColor = "blue"; routeAbbr = "N"}
  }
  if(routeColor == "" ) {
    routeColor = "gray"
    routeAbbr = "X"
  }

  var respondingOfficerSelections = dataBase.respondingOfficerList.map(item => {
        return option({value: item.id, selected: (respondingOfficerVal.val == item.name)}, item.name)})
  var dispatchOfficerSelections = dataBase.dispatchOfficerList.map(item => {
        return option({value: item.id, selected: (dispatchOfficerVal.val == item.name)}, item.name)})

  var propertySelections = dataBase.allProps.map(item => {
        return option({value: item.id, selected: (propertyIdVal.val == item.id)}, item.fields.Name)})

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

/*in order: 
callers apt
prop
time of call
offend unit
name caller
reason for call
responding officer
time of resolution
dispatch officer
pics
*/

return details({name: "record-container", class: "dispatchrecord", id: rec.id+"-record"},//, open:"open"},
  summary({class: "rec-title", id: rec.id+"-title", style: `border-color: ${errCol}; display: flex; justify-content: space-between; align-items: center;`},
    div({style: "display: flex; align-items: center; white-space: nowrap;"},
      div({class: "rec-routecolorbox", id: rec.id+"-routecolorbox", style: `background-color: ${routeColor}; display: flex; align-items: center; justify-content: center;`}, span(`${routeAbbr}`)),
      span(`${formatTime(callTimeOfReport)}`+ " " + callTypeVal.val + " | " + callersAptVal.val + " | " + prop.fields.Name),
    ),
  ),

  article({class: "rec-content", id: rec.id+"-content"},
    div({style: "position: relative;"},
      label("Site/Property:"), 
      select({class: "propselect", id: rec.id+"-propertycode", style: "display: block;", value: propertyIdVal.rawVal, onchange: e => propertyIdVal.rawVal = e.target.value},
        option({value: ""}, "Select Property"), propertySelections
      ),
    ),

    div({style: "display: flex; gap: 10px; width: 100%;"},

      div({style: "position: relative; flex-basis: 50%; flex-grow: 1; flex-shrink: 1;"},
        label("Time Of Call:"),
        input({
                class: "datetimeinput", id: rec.id+"-timeofcall", type: "datetime-local",
                style: "position: absolute; opacity: 0%;",
                value: timeOfCallVal.val, oninput: e => timeOfCallVal.val = e.target.value},
        ),
        div({class: "readonly-text",tabindex:"0", style: "display: flex; justify-content: space-between; align-items: center;white-space: nowrap;"},
          van.derive(() => formatTime(timeOfCallVal.val)  ),
          img({src: `../images/calendar.svg`, style: "height: 30px; width: 30px;"}),
        ),
      ),    

      div({style: "position: relative; flex-basis: 50%; flex-grow: 1; flex-shrink: 1;"},
        label("Time Of Resolution:"),
        input({
                class: "datetimeinput", id: rec.id+"-timeofresolution", type: "datetime-local",
                style: "position: absolute; opacity: 0%;",
                value: timeOfResolutionVal.val, oninput: e => timeOfResolutionVal.val = e.target.value},
        ),
        div({class: "readonly-text",tabindex:"0", style: "display: flex; justify-content: space-between; align-items: center;white-space: nowrap;"},
          van.derive(() => formatTime(timeOfResolutionVal.val)  ),
          img({src: `../images/calendar.svg`, style: "height: 30px; width: 30px;"}),
        ),
      ),  

    ),
    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Dispatching Officer:"), 
        select({class: "officerselect", id: rec.id+"-dispatchofficer", style: "display: block;", value: dispatchOfficerVal.rawVal, onchange: e => dispatchOfficerVal.rawVal = e.target.value},
          option({value: ""}, "Select Officer"), dispatchOfficerSelections
        ),
      ),
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Responding Officer:"),     
        select({class: "officerselect", id: rec.id+"-respondingofficer", style: "display: block;", value: respondingOfficerVal.rawVal, onchange: e => respondingOfficerVal.rawVal = e.target.value},
          option({value: ""}, "Select Officer"), respondingOfficerSelections
        ),
      ),
    ),
    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Caller's Unit Number:"),     
        input({class: "callersaptinput", id: rec.id+"-callersapt", type: "text", style: "display: block; margin-bottom: 5px;",
              value: callersAptVal.rawVal, onchange: e => callersAptVal.rawVal = e.target.value},
        ),
      ),
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("Offending Unit's Number:"), 
        input({class: "offendersaptinput", id: rec.id+"-offendersapt", type: "text", style: "display: block; margin-bottom: 5px;",
                value: offendersAptVal.rawVal, onchange: e => offendersAptVal.rawVal = e.target.value},
        ),
      ),
    ),
    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; width: 100%;"},
        label("Caller's Name:"), 
        input({class: "nameofcallerinput", id: rec.id+"-nameofcaller", type: "text", style: "display: block; margin-bottom: 5px;",
                value: nameOfCallerVal.rawVal, onchange: e => nameOfCallerVal.rawVal = e.target.value},
        ),
      ),
      div({style: "position: relative; width: 100%;"},
        label("Call Type:"), 
        select({class: "officerselect", id: rec.id+"-calltype", style: "display: block; margin-bottom: 5px;", value: callTypeVal.rawVal, onchange: e => callTypeVal.rawVal = e.target.value},
          option({value: ""}, "Select Call Type"), // TODO: populate call types from database
        ),
      ),
    ),
    div({style: "position: relative;"},
      label("Description of Incident:"),     
      textarea({class: "reasonforcalltextarea", id: rec.id+"-reasonforcall", style: "margin-bottom: 5px; field-sizing: content; height: 118px;",
        value: reasonForCallVal.rawVal, onchange: e => reasonForCallVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Resolution:"), 
      textarea({class: "resolutiontextarea", id: rec.id+"-resolution", style: "margin-bottom: 5px; field-sizing: content; height: 118px;",
        value: resolutionVal.rawVal, onchange: e => resolutionVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Pictures:"), 
      article({class: "pictureareaaa", id: rec.id+"-pictures", style: "display: flex; justify-content: space-between; height: 118px"},
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
    div({class: "buttonbox ", id: rec.id+"-buttons"},
      button({onclick: save},"Save"),
      button("Cancel"),
    ),  
  ),
)
};