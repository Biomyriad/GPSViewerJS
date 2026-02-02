const {div,button,input,textarea,img,p,hr,span,select,option,article,summary,details} = van.tags;

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
    console.log(propertyIdVal.val)
    console.log(dateTimeVal.val)
    console.log(officerVal.val)
    console.log(descriptionVal.val)
    console.log(attachmentVal.val)
  }

save()

return div(details({name: "incidentrecord", class: "incidentrecord", id: rec.id+"-record"},
  summary({class: "rec-title", id: rec.id+"-title", style: `border-color: ${errCol};`},
    div({class: "rec-routecolorbox", id: rec.id+"-routecolorbox", style: `background-color: ${routeColor};`},),
    `${formatTime(timeDateOfReport)}`+ " " + rec.fields['Record Code']
  ),
  article({class: "rec-content", id: rec.id+"-content"},
    // select({class: "propselect", id: rec.id+"-propertycode", style: "display: block;", value: propertyIdVal.val, onchange: e => propertyIdVal.val = e.target.value},
    //   option({value: ""}, "Select Property"),

    //   propertySelections
    // ),
    input({
            class: "datetimeinput", id: rec.id+"-datetime", type: "datetime-local", style: "display: block;",
            value: dateTimeVal.val, oninput: e => dateTimeVal.val = e.target.value},
          ),
    // select({class: "officerselect", id: rec.id+"-officerselect", style: "display: block;", value: officerVal.val, onchange: e => officerVal.val = e.target.value},
    //   option({value: ""}, "Select Officer"),

    //   officerSelections
    // ),   
    // textarea({class: "descriptiontextarea", id: rec.id+"-description", value: descriptionVal.val, oninput: e => descriptionVal.val = e.target.value}),
    // article({class: "picturearea", id: rec.id+"-pictures"},
    //   (   // ternary
    //       attachmentVal.val.length > 0
    //     ?
    //       attachmentVal.val.map(item => {
    //         return img({src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px"})
    //       })
    //     :
    //       ""
    //   )
    // ),
    div({class: "buttonbox ", id: rec.id+"-buttons"},
      button({onclick: save},"Save"),
      button("Cancel"),
    ),  
  ),
))
};

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

