var dbx = new DbApi()
var currentFileList = []

async function initApp() {
  var fList = await dbx.listFiles("/Apps/GPSLogger for Android")
  currentFileList = flist
  
}



// From DBox API
////{.tag: 'folder', name: 'Apps', path_lower: '/apps', path_display: '/Apps', id: 'id:NYsSBEDcsFAAAAAAAAAADw'}
function getUniqueFileIds(fileList) {
  var uList = []
  
  var fileId = ""
  for (let [index, value] of fileList.entries()) {
    fileId = value.name.split("_")[0]
    if(!uList.includes(fileId)) uList.push(fileId)
  }
  
  return uList
}

async function unzipFile(blob) {
  var zipFile = await new JSZip.loadAsync(blob)
  var fileHandle = zipFile.files[Object.keys(zipFile.files)[0]]
  var fileData = await fileHandle.async('string')
  return fileData
}