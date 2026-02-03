const {div,button,input,textarea,img,p,hr,span,select,option,article,summary,details} = van.tags;

export default function ObservationReport({rec, errCol}) {
  const timeDateOfReport = new Date(rec.fields['Date and Time of Incident'])

//callers apt
  const propertyIdVal = van.state(rec.fields['Property Code'] ? rec.fields['Property Code'][0] : "")
  const dateTimeVal = van.state( (new Date(timeDateOfReport.getTime() - timeDateOfReport.getTimezoneOffset() * 60000).toISOString()).slice(0, -1))
  //offending unit
  //name of caller
  //reason for call //const descriptionVal = van.state(rec.fields['Description of incident or observation'] || "")
  const officerVal = van.state(rec.fields['Reporting Officer'])
  //time of resolution
  //resolution
  // dispatch officer
  const attachmentVal = van.state(rec.fields['Picture or other attachment if needed'] || [])





  var routeColor = ""
  var prop = dataBase.allProps.find(prec => prec.id == rec.fields['Property Code'][0])
  if(prop.fields.Route.includes('South Route')) {
    routeColor = "green"
  }
  if(prop.fields.Route.includes('NE Route')) {
    if(routeColor == "green") {routeColor = "purple"}
    else {routeColor = "blue"}
  }

  var officerSelections = dataBase.incidentOfficerList.map(item => {
        return option({value: item.id, selected: (officerVal.val == item.name)}, item.name)})
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

return details({name: "dispatchrecord", class: "dispatchrecord", id: rec.id+"-record"},
  summary({class: "rec-title", id: rec.id+"-title", style: `border-color: ${errCol};`},
    div({class: "rec-routecolorbox", id: rec.id+"-routecolorbox", style: `background-color: ${routeColor};`},),
    `${formatTime(timeDateOfReport)}`+ " " + rec.fields['Record Code']
  ),
  article({class: "rec-content", id: rec.id+"-content"},
    select({class: "propselect", id: rec.id+"-propertycode", style: "display: block;", value: propertyIdVal.rawVal, onchange: e => propertyIdVal.rawVal = e.target.value},
      option({value: ""}, "Select Property"),

      propertySelections
    ),
    input({
            class: "datetimeinput", id: rec.id+"-datetime", type: "datetime-local", style: "display: block;",
            value: dateTimeVal.rawVal, onchange: e => dateTimeVal.rawVal = e.target.value},
          ),
    select({class: "officerselect", id: rec.id+"-officerselect", style: "display: block;", value: officerVal.rawVal, onchange: e => officerVal.rawVal = e.target.value},
      option({value: ""}, "Select Officer"),

      officerSelections
    ),   

    textarea({class: "reasonforcalltextarea descriptiontextarea", id: rec.id+"-description", value: descriptionVal.rawVal, onchange: e => descriptionVal.rawVal = e.target.value}),

    article({class: "picturearea", id: rec.id+"-pictures"},
      (   // ternary
          attachmentVal.val.length > 0
        ?
          attachmentVal.val.map(item => {
            return img({src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px"})
          })
        :
          ""
      )
    ),
    div({class: "buttonbox ", id: rec.id+"-buttons"},
      button({onclick: save},"Save"),
      button("Cancel"),
    ),  
  ),
)
};