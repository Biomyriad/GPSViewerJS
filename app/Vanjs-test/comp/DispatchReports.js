const {div,button,input,textarea,img,label,hr,span,select,option,article,summary,details} = van.tags;

export default function ObservationReport({rec, errCol}) {
  const callTimeOfReport = new Date(rec.fields['Time of Call'])
  const resolutionTimeOfReport = new Date(rec.fields['Time of resolution'])

  callTimeOfReport.setSeconds(0,0)
  resolutionTimeOfReport.setSeconds(0,0)

	const callersAptVal = van.state(rec.fields['Unit Number'] || "")
  const propertyIdVal = van.state(rec.fields['Property Code'] ? rec.fields['Property Code'][0] : "")
  const timeOfCallVal = van.state( (new Date(callTimeOfReport.getTime() - callTimeOfReport.getTimezoneOffset() * 60000).toISOString()).slice(0, -1) || "")
  const offendersAptVal = van.state(rec.fields['Offending Unit'] || "")
  const nameOfCallerVal = van.state(rec.fields['Name of caller'] || "")
  const reasonForCallVal = van.state(rec.fields["Reason for the customer's call"] || "")
  const respondingOfficerVal = van.state(rec.fields['Responding Officer'] || "")
  const timeOfResolutionVal = van.state( (new Date(resolutionTimeOfReport.getTime() - resolutionTimeOfReport.getTimezoneOffset() * 60000).toISOString()).slice(0, -1) || "")
  const resolutionVal = van.state(rec.fields['Resolution'] || "")
  const dispatchOfficerVal = van.state(rec.fields['Dispatch Officer'] || "")
  const picturesVal = van.state(rec.fields['Pictures'] || [])
  const callTypeVal = van.state(rec.fields['Call Type'] || "")

  var routeColor = ""
  var prop = dataBase.allProps.find(prec => prec.id == rec.fields['Property Code'][0])
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

  var respondingOfficerSelections = dataBase.respondingOfficerList.map(item => {
        return option({value: item.id, selected: (respondingOfficerVal.val == item.name)}, item.name)})
  var dispatchOfficerSelections = dataBase.dispatchOfficerList.map(item => {
        return option({value: item.id, selected: (dispatchOfficerVal.val == item.name)}, item.name)})

  var propertySelections = dataBase.allProps.map(item => {
        return option({value: item.id, selected: (propertyIdVal.val == item.id)}, item.fields.Name)})

  

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

return details({name: "record-container", class: "dispatchrecord", id: rec.id+"-record"}, //, open:"open"},
  summary({class: "rec-title", id: rec.id+"-title", style: `border-color: ${errCol};`},
    div({class: "rec-routecolorbox", id: rec.id+"-routecolorbox", style: `background-color: ${routeColor};`},),
    `${formatTime(callTimeOfReport)}`+ " " + callTypeVal.val + " | " + callersAptVal.val + " | " + prop.fields.Name
  ),
  article({class: "rec-content", id: rec.id+"-content"},
    div({style: "position: relative;"},
      label("Site/Property:"), 
      select({class: "propselect", id: rec.id+"-propertycode", style: "display: block;", value: propertyIdVal.rawVal, onchange: e => propertyIdVal.rawVal = e.target.value},
        option({value: ""}, "Select Property"), propertySelections
      ),
    ),
    div({style: "position: relative;"},
      label("Time Of Call:"), 
      input({
              class: "datetimeinput", id: rec.id+"-timeofcall", type: "datetime-local", style: "display: block; margin-bottom: 5px;",
              value: timeOfCallVal.rawVal, onchange: e => timeOfCallVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Caller's Unit Number:"),     
      input({class: "callersaptinput", id: rec.id+"-callersapt", type: "text", style: "display: block; margin-bottom: 5px;",
            value: callersAptVal.rawVal, onchange: e => callersAptVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Caller's Name:"), 
      input({class: "nameofcallerinput", id: rec.id+"-nameofcaller", type: "text", style: "display: block; margin-bottom: 5px;",
              value: nameOfCallerVal.rawVal, onchange: e => nameOfCallerVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Offending Unit's Number:"), 
      input({class: "offendersaptinput", id: rec.id+"-offendersapt", type: "text", style: "display: block; margin-bottom: 5px;",
              value: offendersAptVal.rawVal, onchange: e => offendersAptVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Description of Incident:"),     
      textarea({class: "reasonforcalltextarea descriptiontextarea", id: rec.id+"-reasonforcall", 
        value: reasonForCallVal.rawVal, onchange: e => reasonForCallVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Responding Officer:"),     
      select({class: "officerselect", id: rec.id+"-respondingofficer", style: "display: block;", value: respondingOfficerVal.rawVal, onchange: e => respondingOfficerVal.rawVal = e.target.value},
        option({value: ""}, "Select Officer"), respondingOfficerSelections
      ),
    ),
    div({style: "position: relative;"},
      label("Time Of Resolution:"), 
      input({
            class: "datetimeinput", id: rec.id+"-timeofresolution", type: "datetime-local", style: "display: block;",
            value: timeOfResolutionVal.rawVal, onchange: e => timeOfResolutionVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Resolution:"), 
      textarea({class: "resolutiontextarea descriptiontextarea", id: rec.id+"-resolution", 
        value: resolutionVal.rawVal, onchange: e => resolutionVal.rawVal = e.target.value},
      ),
    ),
    div({style: "position: relative;"},
      label("Dispatching Officer:"), 
      select({class: "officerselect", id: rec.id+"-dispatchofficer", style: "display: block;", value: dispatchOfficerVal.rawVal, onchange: e => dispatchOfficerVal.rawVal = e.target.value},
        option({value: ""}, "Select Officer"), dispatchOfficerSelections
      ),
    ),
    div({style: "position: relative;"},
      label("Call Type:"), 
      select({class: "officerselect", id: rec.id+"-calltype", style: "display: block;", value: callTypeVal.rawVal, onchange: e => callTypeVal.rawVal = e.target.value},
        option({value: ""}, "Select Call Type"), 
      ),
    ),
    div({style: "position: relative;"},
      label("Pictures:"), 
      article({class: "picturearea", id: rec.id+"-pictures"},
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