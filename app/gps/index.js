var dbx = new DbApi()
var currentFileList = []

var sRte = null

async function initApp() {

}

// From DBox API
////{.tag: 'folder', name: 'Apps', path_lower: '/apps', path_display: '/Apps', id: 'id:NYsSBEDcsFAAAAAAAAAADw'}

var dateSelect = document.getElementById('dateselect')
var routeSelect = document.getElementById('routeselect')

// setup map
var map = L.map('map').setView([47.348149, -122.222297], 11);

console.log('Element Specific Color:', window.localStorage?.getItem("picoPreferredColorScheme"))


//standard
var mapLight = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

//dark

//super dark
var mapDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});


if ('light') {
  mapDark.removeLayer()
  mapLight.addTo("map")

} else {
  mapLight.removeLayer()
  mapDark.addTo("map")
}


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

///////////////////////////////////////////////////////////////////////

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

async function formData() {

  var selectedDate = new Date(dateSelect.value)
  selectedDate.setDate(selectedDate.getDate() + 1) // fix off by one
  selectedDate.setHours(20)
  selectedDate.setMinutes(30)

  var selectedNextDate = new Date(dateSelect.value)
  selectedNextDate.setDate(selectedNextDate.getDate() + 2) // fix off by one
  selectedNextDate.setHours(7)
  selectedNextDate.setMinutes(0)

  var selectedRouteValue = routeSelect.value;
  var selectedRouteText = routeSelect.options[routeSelect.selectedIndex].text;

  var fileNameA = selectedRouteValue + "_" + getDateString(selectedDate)
  var fileNameB = selectedRouteValue + "_" + getDateString(selectedNextDate)

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
    //console.log('We do cleanup here');
  }

  try {
    console.log(fileNameB)
    var data = await dbx.downloadFile(basePath + fileNameB + '.zip')
    var gpxB = await unzipFile(data)
    sRte.addPointsFromGPX(gpxB)
  } catch (e) {
    console.error(e);
  } finally {
    //console.log('We do cleanup here');
  }

  sRte.filterByTimeRange(selectedDate, selectedNextDate)

  var data = await getFileData("props.dat")
  await sRte.textDecompressAsync(data)


  sRte.pointsToRouteSegments()
  //draw points


// LAST POINT
var lastPt = sRte.points.at(-1)
let options = {hour: "2-digit", minute: "2-digit"};  
console.log(lastPt)
var lastPointMarker = L.marker([lastPt.lat, lastPt.lon])
    .bindPopup(lastPt.time.toLocaleTimeString("en-us", options))
    .openPopup()//.addTo(map)

///////////////////////////////////////////////////////////////////////

// ROUTE LINES
  var arrPts = []

  sRte.points.forEach((pt) => {
    arrPts.push([pt.lat, pt.lon])
  })

  var polylineArray = [L.polyline(arrPts, { color: "#ff0000" })]
  polylineArray.push(lastPointMarker)


  // if (polyLines != null) map.removeLayer(polyLines);
  // polyLines = L.layerGroup(polylineArray);
  // polyLines.addTo(map);

////////////////////////////////////////////////////////////////////////////

// ZoneName, ZoneNumber, ZonePoints
var propArray = []
sRte.propZones.forEach((prop) => {

  var arrPts2 = []
  prop.ZonePoints.forEach((pt) => {
    arrPts2.push([pt.Lt, pt.Lg])
  })

  var poly = L.polygon(arrPts2, { color: "#0000FF", weight: 2}).setStyle({fillColor: '#00ff0088'}).bindTooltip( prop.ZoneNumber + " - " + prop.ZoneName, { direction: 'left' })
  propArray.push(poly)

})

polylineArray.push(...propArray)

//map.fitBounds(polygon.getBounds());


// if (RouteLine != null) map.removeLayer(RouteLine);
// RouteLine = L.layerGroup([...propArray]);
// RouteLine.addTo(map);


///////////
  if (polyLines != null) map.removeLayer(polyLines);
  polyLines = L.layerGroup(polylineArray);
  console.log()
  console.log(polyLines)
  polyLines.addTo(map);

}

function getDateString(date) {
  const dateObj = new Date(date.getTime());
  const month = dateObj.getMonth() + 1; // months from 1-12 vs 0-11
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  // Using padded values, so that 2023/1/7 becomes 2023/01/07
  const pMonth = month.toString().padStart(2, "0");
  const pDay = day.toString().padStart(2, "0");
  const newPaddedDate = `${year}${pMonth}${pDay}`;
  return newPaddedDate
}

