// "Record Code"
// "Date and Time of Incident"
// "Reporting Officer"
// "Property Code"
// "Description of incident or observation"
// "Internal Note"
// "Management Follow up"
// "Picture or other attachment if needed"
// "Incident Report Picture"

const tblProperty = "All Properties"
const tableName = "Incident Reports and Observations"

var propertiesList = null
var incidentReportingOfficer = null
var loadedReportList = null

async function preLoad() {

  let shiftDate = document.getElementById("shift-date")
  shiftDate.value = new Date().toLocaleDateString('en-CA')
  shiftDate.onchange = (e) => {
    console.log(e.currentTarget.value)
    var d = atUtil.addDays(new Date(e.currentTarget.value),1)
    loadReports(d)
  }

  var baseSchema = await cloudDb.getSchema()
  incidentReportingOfficer = baseSchema.tables[4].fields[3].options.choices

  var props = await cloudDb.getAll(tblProperty)
  propertiesList = props

}

function lookupProperty(propId) {
  return propertiesList.find(rec => rec.id == propId).fields.Name
}

async function loadReports(shiftDate) {

  /// make this generic and pass in the data. cant do full get all

  let startTimeStamp = shiftDate//new Date("4/21/2025")
  let endTimeStamp = atUtil.addDays(shiftDate,1)//new Date("4/22/2025")

  startTimeStamp.setHours(20); startTimeStamp.setMinutes(30)
  endTimeStamp.setHours(7); endTimeStamp.setMinutes(0)

  let atEncodedParams = atUtil.getDateFilterParams (startTimeStamp,endTimeStamp, tableColumn = "Date+and+Time+of+Incident", ascDesc = "asc")

  let retRecs = []
  retRecs.push(...await cloudDb.getAll(tableName,'',atEncodedParams))

  const loadedReportList = retRecs.filter(item => {
    const itemDate = new Date(item.fields['Date and Time of Incident']);
    return itemDate >= startTimeStamp && itemDate <= endTimeStamp;
  });

  /////////////////////////////////////////////////////////////////////////////// 
  var times = {}
  loadedReportList.forEach(rec => {
    console.log(rec.createdTime + " = " + rec.fields['Record Code'], rec)
    if(Object.keys(times).indexOf(rec.createdTime)){
      times[rec.createdTime] = 1
    } else {
      times[rec.createdTime] = times[rec.createdTime] + 1
    }
  })
  //console.log('++ ')
  console.log("EOL 1st", times)         // sort by route, sort by mandatory
    
  var largestName = ""
  var largest = 0;
  Object.keys(times).forEach(itm => {
    console.log('>> ', itm)
    if (times[itm] > largest) {
        largest = times[itm];
        largestName = itm
        console.log('++ ')
        console.log('-- ', itm, times[itm])
    }
  })

  console.log("EOL 2nd", times)
  console.log('++ ', largest + "  --  " + largestName)
  ///////////////////////////////////////////////////////////////////////////////

  // Clear list
  document.getElementById("recordslist").replaceChildren()


  var title = document.createElement("summary");
  //title.setAttribute("id",rec.id+"-title");
  //title.setAttribute("class","rec-content");
  title.setAttribute("style","padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;");
  title.innerHTML = "Mandatory Reports"
  document.getElementById("recordslist").appendChild(title)

  loadedReportList.forEach(rec => {
    if(rec.createdTime ==largestName) createReportHtml(rec)
  })

  title = document.createElement("summary");
  title.setAttribute("style","padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;");
  title.innerHTML = "Extra Reports"
  document.getElementById("recordslist").appendChild(title)

  loadedReportList.forEach(rec => {
    if(rec.createdTime !=largestName) createReportHtml(rec)
  })

  return

  console.log(loadedReportList.length)
  // let rec = await cloudDb.getOne("recHu52FwctlfyJRL")
  // console.log(rec)
}

//IS_AFTER({Date and Time of Incident}, "2025-04-09")


function createReportHtml(rec) {

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
  mainCont.setAttribute("id",rec.id+"-record");
  mainCont.setAttribute("style","margin-bottom: 5px;");

	var title = document.createElement("summary");
  title.setAttribute("id",rec.id+"-title");
  title.setAttribute("class","rec-content");
  title.setAttribute("style","padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;");
  var dt = new Date(rec.fields['Date and Time of Incident'])//.toLocaleTimeString()
  title.innerHTML =`${formatTime(dt)}`+ " " + rec.fields['Record Code']

	var content = document.createElement("article");
  content.setAttribute("id",rec.id+"-content");
  content.setAttribute("class","rec-content");

	var prop = document.createElement("select"); // Property Code
	prop.setAttribute("id",rec.id+"-propertycode");
  prop.onchange = recOnChange

  propertiesList.forEach(item => {
  var propOpt = document.createElement("option"); //
    if(rec.fields["Property Code"][0] == item.id) propOpt.setAttribute("selected","");
    //propOpt.setAttribute("disabled","");
    propOpt.setAttribute("value",item.id);
    propOpt.innerText = item.fields.Name
    prop.appendChild(propOpt)
  });

  let d = new Date(rec.fields['Date and Time of Incident'])
	var dateTime = document.createElement("input"); //  Date and Time of Incident
	dateTime.setAttribute("id",rec.id+"-datetime");
	dateTime.setAttribute("type","datetime-local");
	dateTime.setAttribute("value",(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1));
  dateTime.onchange = recOnChange

	var officer = document.createElement("select"); // Reporting Officer
	officer.setAttribute("id",rec.id+"-officerselect");
  officer.onchange = recOnChange

  incidentReportingOfficer.forEach(item => {
    var officerOpt = document.createElement("option"); // 
    if(rec.fields["Reporting Officer"] == item.name) officerOpt.setAttribute("selected","");
    //officerOpt.setAttribute("disabled","");
    officerOpt.setAttribute("value",item.id);
    officerOpt.innerText = item.name
    officer.appendChild(officerOpt)
  })

	var discr = document.createElement("textarea"); // Description of incident or observation
  discr.setAttribute("id",rec.id+"-description")
  discr.value = rec.fields['Description of incident or observation']
  discr.onchange = recOnChange

	var pic = document.createElement("article"); // Picture or other attachment if needed
  pic.setAttribute("id",rec.id+"-pictures");
  pic.setAttribute("style","display: flex; justify-content: space-between; height: 133px");

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
  btnHldr.setAttribute("class","invisible");
  btnHldr.setAttribute("style","display: flex; justify-content: space-around;")

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

    let rec = loadedReportList.find(rec => rec.id == this.id.substring(0,this.id.indexOf("-")))
    console.log(rec)

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