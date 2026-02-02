// "Record Code"
// "Date and Time of Incident"
// "Reporting Officer"
// "Property Code"
// "Description of incident or observation"
// "Internal Note"
// "Management Follow up"
// "Picture or other attachment if needed"
// "Incident Report Picture"

var dataBase = new AtDb()
var incidentRecs = []

const tableName = "Incident%20Reports%20and%20Observations"

async function preLoad() {
  await dataBase.initDbAsync()

  let shiftDate = document.getElementById("shift-date")
  shiftDate.value = new Date().toLocaleDateString('en-CA')
  shiftDate.onchange = (e) => {
    var d = dataBase.addDays(new Date(e.currentTarget.value),1)
    loadReports(d)
  }

  document.getElementById("filterbyroute").onchange = (e) => {
    console.log(e)
    let shiftDate = document.getElementById('shift-date')
    shiftDate.onchange({currentTarget: shiftDate})
    console.log(document.getElementById("filterbyroute").value)
  }

  let xx = document.getElementById("shift-date").value
  loadReports(dataBase.addDays(new Date(xx),1))
}

function dateNav() {
  let shiftDate = document.getElementById('shift-date')
  shiftDate.value = dataBase.subDays(new Date(shiftDate.value), 1).toLocaleDateString('en-CA')
  shiftDate.onchange({currentTarget: shiftDate})
}

function dateNav2() {
  let shiftDate = document.getElementById('shift-date')
  shiftDate.value = dataBase.addDays(new Date(shiftDate.value), 2).toLocaleDateString('en-CA')
  shiftDate.onchange({currentTarget: shiftDate})
}

async function loadReports(shiftDate) {
console.log("load.....")
  let startTimeStamp = shiftDate
  let endTimeStamp = dataBase.addDays(shiftDate,1)
  startTimeStamp.setHours(20); startTimeStamp.setMinutes(30)
  endTimeStamp.setHours(7); endTimeStamp.setMinutes(0)
  incidentRecs =await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, tableName, 'Date and Time of Incident', ascDesc = "asc")
  
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


  ///////////////////////////////////////////////////////////////////////////////

  // Clear list
  document.getElementById("recordslist").replaceChildren()


  var title = document.createElement("summary");
  //title.setAttribute("id",rec.id+"-title");
  //title.setAttribute("class","rec-content");
  title.setAttribute("style","padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;");
  title.innerHTML = "Mandatory Reports"
  document.getElementById("recordslist").appendChild(title)

  incidentRecs.forEach(rec => {

    if(rec.isMandatory == true) {
      if(rec.route.includes(document.getElementById("filterbyroute").value) || document.getElementById("filterbyroute").value == 'none') {
        createReportHtml(rec.rec, chkReports(rec))
      } 
    }
  })

  title = document.createElement("summary");
  title.setAttribute("style","padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;");
  title.innerHTML = "Extra Reports"
  document.getElementById("recordslist").appendChild(title)

  incidentRecs.forEach(rec => {
    if(rec.isMandatory == false) {
      if(rec.route.includes(document.getElementById("filterbyroute").value) || document.getElementById("filterbyroute").value == 'none') {
        createReportHtml(rec.rec)
      } 
    }
  })

  return

  //console.log(loadedReportList.length)
  // let rec = await cloudDb.getOne("recHu52FwctlfyJRL")
  // console.log(rec)
}

//IS_AFTER({Date and Time of Incident}, "2025-04-09")


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
        console.log("173 PIC: " + recPics.length)
        return "red"
      }
    } else {
      console.log("173 PIC: none" )
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
        console.log("590 PIC: " + recPics.length)
        return "red"
      }
    } else {
      console.log("590 PIC: none" )
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

}

function isEmptyOrWhitespace(str) {
  return str === null || str === undefined || str.trim().length === 0;
}


function createReportHtml(rec, tstCol="#262f42ff") {

//<details id="recQSf7OEq5OO436H-record">
// 	<summary id="recQSf7OEq5OO436H-title">11:50:00 PM 173 - Evans Creek @ Woodbridge</summary>
// 	<article id="recQSf7OEq5OO436H-content class="rec-content">
// 		<select id="recQSf7OEq5OO436H-propertycode">
// 			<option value="reczX6h9NAVWSF9f5">176 - AMC Redmond Place</option>
// 		</select>
// 		<input id="recQSf7OEq5OO436H-datetime" type="datetime-local" value="2025-04-10T23:50:00.000">
// 		<select id="recQSf7OEq5OO436H-officerselect">
// 			<option value="sel9P7sw8sICjlSrR">Amber Schumaker </option>
// 		</select>
// 		<textarea id="recQSf7OEq5OO436H-description"></textarea>
// 		<article id="recQSf7OEq5OO436H-pictures" style="display: flex; justify-content: space-between;">
// 			<img src="" style="height: 100px; border-radius: 4px">
// 		</article>
// 	</article>
//</details>

// -record
// -title
// -content
// -propertycode
// -datetime
// -dateselect
// -officerselect
// -description
// -pictures

  var mainCont = document.createElement("details");
  mainCont.setAttribute("name","incidentrecord"); // set name to be the same and you can only have one open at a time
  mainCont.setAttribute("class","incidentrecord"); 
  mainCont.setAttribute("id",rec.id+"-record");

  var routeColor = ""
  var prop = dataBase.allProps.find(prec => prec.id == rec.fields['Property Code'][0])
  if(prop.fields.Route.includes('South Route')) {
    routeColor = "green"
  }
  if(prop.fields.Route.includes('NE Route')) {
    if(routeColor == "green") {routeColor = "purple"}
    else {routeColor = "blue"}
  }

  var routeIndicator = document.createElement("div");
  routeIndicator.setAttribute("id",rec.id+"-routecolorbox");
  routeIndicator.setAttribute("class","rec-routecolorbox");  
  routeIndicator.setAttribute("style",`background-color: ${routeColor};`);

	var title = document.createElement("summary");
  title.setAttribute("id",rec.id+"-title");
  title.setAttribute("class","rec-title");
  title.setAttribute("style",`border-color: ${tstCol};`);
  var dt = new Date(rec.fields['Date and Time of Incident'])//.toLocaleTimeString()
  title.appendChild(routeIndicator)
  title.innerHTML +=`${formatTime(dt)}`+ " " + rec.fields['Record Code']
  

	var content = document.createElement("article");
  content.setAttribute("id",rec.id+"-content");
  content.setAttribute("class","rec-content");

	var prop = document.createElement("select"); // Property Code
  prop.setAttribute("class","propselect");
	prop.setAttribute("id",rec.id+"-propertycode");
  prop.onchange = recOnChange

  dataBase.allProps.forEach(item => {
    var propOpt = document.createElement("option"); //
    if(rec.fields["Property Code"][0] == item.id) propOpt.setAttribute("selected","");
    //propOpt.setAttribute("disabled","");
    propOpt.setAttribute("value",item.id);
    propOpt.innerText = item.fields.Name
    prop.appendChild(propOpt)
  });

  let d = new Date(rec.fields['Date and Time of Incident'])
	var dateTime = document.createElement("input"); //  Date and Time of Incident
  dateTime.setAttribute("class","datetimeinput");
	dateTime.setAttribute("id",rec.id+"-datetime");
	dateTime.setAttribute("type","datetime-local");
	dateTime.setAttribute("value",(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1));
  dateTime.onchange = recOnChange

	var officer = document.createElement("select"); // Reporting Officer
  officer.setAttribute("class","officerselect");
	officer.setAttribute("id",rec.id+"-officerselect");
  officer.onchange = recOnChange

  var blankOpt = document.createElement("option"); // 
  blankOpt.setAttribute("value",'');
  officer.appendChild(blankOpt)

  dataBase.incidentOfficerList.forEach(item => {
    var officerOpt = document.createElement("option"); // 
    if(rec.fields["Reporting Officer"] == item.name) officerOpt.setAttribute("selected","");
    //officerOpt.setAttribute("disabled","");
    officerOpt.setAttribute("value",item.id);
    officerOpt.innerText = item.name
    officer.appendChild(officerOpt)
  })

	var discr = document.createElement("textarea"); // Description of incident or observation
  discr.setAttribute("class","descriptiontextarea");
  discr.setAttribute("id",rec.id+"-description")
  discr.value = rec.fields['Description of incident or observation']
  discr.onchange = recOnChange

	var pic = document.createElement("article"); // Picture or other attachment if needed
  pic.setAttribute("class","picturearea");
  pic.setAttribute("id",rec.id+"-pictures");

  if(rec.fields['Picture or other attachment if needed'] != undefined) {
    rec.fields['Picture or other attachment if needed'].forEach(item => {
      var pics = document.createElement("img");
      pics.setAttribute("src",item.thumbnails.large.url);
      pics.setAttribute("style","height: 100px; border-radius: 4px");
      pic.appendChild(pics)
    })
  }

  var btnHldr = document.createElement("div")
  btnHldr.setAttribute("id",rec.id+"-buttons");
  btnHldr.setAttribute("class","buttonbox invisible");

  var _button1 = document.createElement("button");
  _button1.innerHTML = 'Save';
  _button1.onclick = async function()
  {
  console.log(rec.id + "<-----")
  let re = await cloudDb.getOne(rec.id,tableName)
  console.log(re)
      //alert("hello, world");
  }

  var _button2 = document.createElement("button");
  _button2.innerHTML = 'Cancel';
  _button2.onclick = async function(){  }

  mainCont.appendChild(title)
  mainCont.appendChild(content)

  content.appendChild(prop)
  content.appendChild(dateTime)
  content.appendChild(officer)
  content.appendChild(discr)
  content.appendChild(pic)
  content.appendChild(btnHldr)

  btnHldr.appendChild(_button1)
  btnHldr.appendChild(_button2)
document.getElementById("recordslist").appendChild(mainCont)

}

function recOnChange(e) {
  
    //console.log(this.id); // logs the className of my_element
    //console.log(e.target.id);

    let rec = incidentRecs.find(rec => rec.id == this.id.substring(0,this.id.indexOf("-")))
    console.log(rec)


    rec = rec.rec //     <------------ quick fix when rec turned into class



// -record
// -title
// -propertycode
// -datetime
// -dateselect
// -officerselect
// -description
// -pictures

    var buttons = document.getElementById(rec.id + "-buttons")
    var record = document.getElementById(rec.id + "-record")
    var title = document.getElementById(rec.id + "-title")
    var content = document.getElementById(rec.id + "-content")
    var propertyCode = document.getElementById(rec.id + "-propertycode")
    var datetime = document.getElementById(rec.id + "-datetime")
    var officerSelect = document.getElementById(rec.id + "-officerselect")
    var description = document.getElementById(rec.id + "-description")
    var pictures = document.getElementById(rec.id + "-pictures")


    console.log("-----------------------------------------"+"record")
    //console.log(title)
    console.log("propertyCode: " + propertyCode.value + " || " + rec.fields["Property Code"][0])
    console.log(propertyCode.value == rec.fields["Property Code"][0])

    let d = new Date(rec.fields['Date and Time of Incident'])
    console.log("datetime: " + datetime.value + " || " + ((new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)).substring(0,16))
    console.log(datetime.value == ((new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)).substring(0,16))

    console.log("officerSelect: " + officerSelect.options[officerSelect.selectedIndex].text + " || " + rec.fields["Reporting Officer"])
    console.log(officerSelect.options[officerSelect.selectedIndex].text == rec.fields["Reporting Officer"])

    console.log("description: " + description.value)
    console.log(". . . . . . . .")
    console.log(rec.fields['Description of incident or observation'])
    console.log(description.value == rec.fields['Description of incident or observation'])
    //console.log(pictures)
    console.log("---------------------------")

    title.classList.toggle("rec-content-edited")
    buttons.classList.toggle("invisible")


}

function recordBtn() {
  
}

function formatTime(dt) {
  var ap = "AM"
  var h = dt.getHours()
  var m = dt.getMinutes()

  //console.log(h)
  if(h > 12) {
    h = h - 12
    ap = "PM"
  }

  if(h == 0) {
    h=12
  }

  if(m < 10) {
    m = "0" + m
  }
  return `${h}:${m} ${ap}`
}