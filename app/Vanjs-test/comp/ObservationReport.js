const {label,div,button,input,textarea,img,p,hr,span,select,option,article,summary,details} = van.tags;

//TODO: setup check for edits and errors
//TODO: Connect buttons

export default function ObservationReport({rec, errCol}) {
  const timeDateOfReport = new Date(rec.fields['Date and Time of Incident'])

  const propertyIdVal = van.state(rec.fields['Property Code'] ? rec.fields['Property Code'][0] : "")
  const dateTimeVal = van.state( (new Date(timeDateOfReport.getTime() - timeDateOfReport.getTimezoneOffset() * 60000).toISOString()).slice(0, -1))
  const officerVal = van.state(rec.fields['Reporting Officer'])
  const descriptionVal = van.state(rec.fields['Description of incident or observation'] || "")
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
    // console.log(propertyIdVal.val)
    // console.log(dateTimeVal.val)
    // console.log(officerVal.val)
    // console.log(descriptionVal.val)
    // console.log(attachmentVal.val)
  }

save()

return details({name: "record-container", class: "incidentrecord", id: rec.id+"-record"},
  summary({class: "rec-title", id: rec.id+"-title", style: `border-color: ${errCol};`},
    div({class: "rec-routecolorbox", id: rec.id+"-routecolorbox", style: `background-color: ${routeColor};`},),
    `${formatTime(timeDateOfReport)}`+ " " + rec.fields['Record Code']
  ),
  article({class: "rec-content", id: rec.id+"-content"},
    div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
      label("Site/Property:"), 
      select({class: "propselect", id: rec.id+"-propertycode", style: "display: block;", value: propertyIdVal.rawVal, onchange: e => propertyIdVal.rawVal = e.target.value},
        option({value: ""}, "Select Property"),

        propertySelections
      ),
    ),
    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; flex-basis: 50%; flex-grow: 1; flex-shrink: 1;"},
        label("Time of Incident:"),
        input({
                class: "datetimeinput", id: rec.id+"-datetime", type: "datetime-local",
                style: "position: absolute; opacity: 0%;",
                value: dateTimeVal.rawVal, oninput: e => dateTimeVal.rawVal = e.target.value},
        ),
        div({class: "readonly-text",tabindex:"0", style: "display: flex; justify-content: space-between; align-items: center; white-space: nowrap;"},
          van.derive(() => formatTime(dateTimeVal.rawVal)  ),
          img({src: `../images/calendar.svg`, style: "height: 30px; width: 30px;"}),
        ),
      ), 

      
      div({ style: "position: relative; flex-basis: 50%; flex-grow: 1; flex-shrink: 1;" },
        label("Officer:"),
        select({ class: "officerselect", id: rec.id + "-officerselect", style: "display: block; overflow: hidden;", value: officerVal.rawVal, onchange: e => officerVal.rawVal = e.target.value },
          option({ value: "" }, "Select Officer"),

          officerSelections
        ),
      ),
    ),
    div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
    label("Description:"), 
      textarea({class: "resolutiontextarea", id: rec.id+"-description", value: descriptionVal.rawVal, onchange: e => descriptionVal.rawVal = e.target.value, style: "margin-bottom: 5px; field-sizing: content; height: 118px;"}),
    ),
    div({ style: "position: relative;" },
      label("Pictures:"),
      article({ class: "pictureareaaaa", id: rec.id + "-pictures", style: "display: flex; justify-content: space-between; height: 118px" },
        (   // ternary
          attachmentVal.val.length > 0
            ?
            attachmentVal.val.map(item => {
              return img({ src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px" })
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

///////////////////////
// export default function Reports() {

//   return div({class: "container", style: "margin-top: 50px;"},
//     div({style: "display: flex; justify-content: space-around; align-items: center; margin-bottom: 40px;"},
//         button({onclick: dateNav},"<-"),
//         input({id:"shift-date", type:"date", style:"width: 150px; margin: 0;"}),
//         button({onclick: dateNav2},"->"),
//     ),

//     hr(
//         span("Filter by route"),
//         select({id:"filterbyroute"},
//             option({value:"none"},"No Filter"),
//             option({value:"South Route"},"South Route"),
//             option({value:"NE Route"},"NE Route"),
//         )
//     ),

//     article({id:"recordslist"},
//         summary({"aria-busy":"true"})
//     ),

//     div({id: "out"})
//   )
// };

