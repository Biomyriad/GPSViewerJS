const {div,button,input,textarea,img,p,hr,span,select,option,article,summary,details} = van.tags;

//TODO: setup check for edits and errors
//TODO: Connect buttons

export default function ObservationReport(rec) {
  var routeColor = ""
  var prop = dataBase.allProps.find(prec => prec.id == rec.fields['Property Code'][0])
  if(prop.fields.Route.includes('South Route')) {
    routeColor = "green"
  }
  if(prop.fields.Route.includes('NE Route')) {
    if(routeColor == "green") {routeColor = "purple"}
    else {routeColor = "blue"}
  }

  var timeDateOfReport = new Date(rec.fields['Date and Time of Incident'])

return details({name: "incidentrecord", class: "incidentrecord", id: rec.id+"-record"},
  summary({class: "rec-title", id: rec.id+"-title", style: `border-color: ${"green"};`},
    div({class: "rec-routecolorbox", id: rec.id+"-routecolorbox", style: `background-color: ${routeColor};`},),
    `${formatTime(timeDateOfReport)}`+ " " + rec.fields['Record Code']
  ),
  article({class: "rec-content", id: rec.id+"-content"},
    select({class: "propselect", id: rec.id+"-propertycode"},
      option({value: ""}, "Select Property"),

      dataBase.allProps.map(item => {
        return option({value: item.id, selected: (rec.fields["Property Code"][0] == item.id)}, item.fields.Name)
      })
    ),
    input({
            class: "datetimeinput", id: rec.id+"-datetime", type: "datetime-local",
            value: (new Date(timeDateOfReport.getTime() - timeDateOfReport.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)},
          ),
    select({class: "officerselect", id: rec.id+"-officerselect"},
      option({value: ""}, "Select Officer"),

      dataBase.incidentOfficerList.map(item => {
        return option({value: item.id, selected: (rec.fields["Reporting Officer"] == item.name)}, item.name)
      })
    
    ),   
    textarea({class: "descriptiontextarea", id: rec.id+"-description"}, rec.fields['Description of incident or observation']),
    article({class: "picturearea", id: rec.id+"-pictures"},
      (   // ternary
          rec.fields['Picture or other attachment if needed']
        ?
          rec.fields['Picture or other attachment if needed'].map(item => {
            return img({src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px"})
          })
        :
          ""
      )
    ),
    div({class: "buttonbox ", id: rec.id+"-buttons"},
      button("Save"),
      button("Cancel"),
    ),  
  ),
)
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

