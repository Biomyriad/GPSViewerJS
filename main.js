var dbx = new DbApi()
var currentFileList = []

var sRte = null

async function initApp() {

}

// From DBox API
////{.tag: 'folder', name: 'Apps', path_lower: '/apps', path_display: '/Apps', id: 'id:NYsSBEDcsFAAAAAAAAAADw'}
function getUniqueFileIds(fileList) {
  var uList = []

  var fileId = ""
  for (let [index, value] of fileList.entries()) {
    fileId = value.name.split("_")[0]
    if (!uList.includes(fileId)) uList.push(fileId)
  }

  return uList
}

async function unzipFile(blob) {
  var zipFile = await new JSZip.loadAsync(blob)
  var fileHandle = zipFile.files[Object.keys(zipFile.files)[0]]
  var fileData = await fileHandle.async('string')
  return fileData
}

var dateSelect = document.getElementById('dateselect')
var routeSelect = document.getElementById('routeselect')

// setup map
var map = L.map('map').setView([47.348149, -122.222297], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var RouteLine = null
var polyLines = null

//document.getElementById("dateselect").addEventListener("change", function() {
dateSelect.addEventListener("change", async function () {
  //var input = this.value;
  //var dateEntered = new Date(input);
  //console.log(input); //e.g. 2015-11-13
  //console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

  //selectedDate.setDate(selectedDate.getDate() + 1)
  console.log(new Date(dateSelect.value))
  var fList = await dbx.listFiles("/Apps/GPSLogger for Android")
  var uniqueIds = getUniqueFileIds(fList)
  console.log(uniqueIds)

  routeSelect.replaceChildren()

  var opt = document.createElement('option');
  opt.value = "";
  opt.innerHTML = "Route";
  opt.selected = true
  opt.disabled = true
  routeSelect.appendChild(opt);

  for (var i = 0; i <= uniqueIds.length - 1; i++) {
    var opt = document.createElement('option');
    opt.value = uniqueIds[i];
    opt.innerHTML = uniqueIds[i];
    routeSelect.appendChild(opt);
  }

});

async function formData() {
  var selectedDate = new Date(dateSelect.value)
  selectedDate.setDate(selectedDate.getDate() + 1) // fix off by one
  selectedDate.setHours(20)
  selectedDate.setMinutes(30)
  var selectedNextDate = new Date(dateSelect.value)
  selectedNextDate.setDate(selectedNextDate.getDate() + 2) // fix off by one
  selectedNextDate.setHours(7)
  selectedNextDate.setMinutes(0)
  console.log("------------>  " + selectedDate)
  console.log("------------>  " + selectedNextDate)

  var selectedRouteValue = routeSelect.value;
  var selectedRouteText = routeSelect.options[routeSelect.selectedIndex].text;

  //console.log(selectedDate)
  //console.log(selectedRouteValue)
  console.log(selectedRouteText)


  var fileNameA = selectedRouteValue + "_" + getDateString(selectedDate)
  var fileNameB = selectedRouteValue + "_" + getDateString(selectedNextDate)
  console.log(fileNameA)
  console.log(fileNameB)


  sRte = new GPXRoute()
  var basePath = '/Apps/GPSLogger for Android/'

  try {
    console.log(fileNameA)
    var data = await dbx.downloadFile(basePath + fileNameA + '.zip')
    var gpxA = await unzipFile(data)
    sRte.addPointsFromGPX(gpxA)

  } catch (e) {
    console.error(e);
  } finally {
    console.log('We do cleanup here');
  }

  try {
    console.log(fileNameB)
    var data = await dbx.downloadFile(basePath + fileNameB + '.zip')
    var gpxB = await unzipFile(data)
    sRte.addPointsFromGPX(gpxB)
  } catch (e) {
    console.error(e);
  } finally {
    console.log('We do cleanup here');
  }


  //console.log(sRte.points.length)
  sRte.filterByTimeRange(selectedDate, selectedNextDate)
  //console.log(sRte.points.length)

  console.log(sRte.points[0].time.toLocaleString())
  console.log(sRte.points[1].time.toLocaleString())
  console.log(sRte.points[sRte.points.length - 2].time.toLocaleString())
  console.log(sRte.points[sRte.points.length - 1].time.toLocaleString())

  //console.log(sRte.points[0])

  //draw points

  var arrPts = []
  sRte.points.forEach((pt) => {
    arrPts.push([pt.lat, pt.lon])
  })

  //RouteLine = L.polyline(arrPts, { color: "#ff0000" }).addTo(map);

  var polylineArray = [
    L.polyline(arrPts, { color: "#ff0000" })
  ];

  if (polyLines != null) map.removeLayer(polyLines);
  polyLines = L.layerGroup(polylineArray);
  polyLines.addTo(map);

}

function getDateString(date) {
  //const dateObj = new Date(date);
  const dateObj = new Date(date.getTime());
  const month = dateObj.getMonth() + 1; // months from 1-12
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  // Using padded values, so that 2023/1/7 becomes 2023/01/07
  const pMonth = month.toString().padStart(2, "0");
  const pDay = day.toString().padStart(2, "0");
  const newPaddedDate = `${year}${pMonth}${pDay}`;

  //var newDate = year + "/" + month + "/" + day;
  //var newDate = `${year}/${month}/${day}`;
  //console.log(newPaddedDate)
  return newPaddedDate
}