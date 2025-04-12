// "Record Code"
// "Date and Time of Incident"
// "Reporting Officer"
// "Property Code"
// "Description of incident or observation"
// "Internal Note"
// "Management Follow up"
// "Picture or other attachment if needed"
// "Incident Report Picture"

async function tst() {
  let startTimeStamp = new Date("4/10/2025")
  let endTimeStamp = new Date("4/11/2025")

  let listOfSaves = await cloudDb.getIncidentByDateRange(startTimeStamp, endTimeStamp)

  console.log(listOfSaves.length)
  for (i in listOfSaves) {

// console.log(listOfSaves[i].fields['Record Code'])
// console.log(listOfSaves[i].fields['Property Code'])
//console.log(new Date(listOfSaves[i].fields['Date and Time of Incident']))
// console.log(listOfSaves[i].fields['Reporting Officer'])
// console.log(listOfSaves[i].fields['Description of incident or observation'])

let d = new Date(listOfSaves[i].fields['Date and Time of Incident'])
const dateTimeLocalValue = (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);


let imgUrl = ''
let imgH = "100"
let img = listOfSaves[i].fields['Picture or other attachment if needed']
if(img != undefined) {
  console.log(img[0].thumbnails.large.url)
  imgUrl = img[0].thumbnails.large.url
  imgH = img[0].thumbnails.large.height/3
}



let item = `<details >
<summary>${new Date(listOfSaves[i].fields['Date and Time of Incident']).toLocaleTimeString()} ${listOfSaves[i].fields['Record Code']}</summary>
<article style="background-color: rgb(38, 47, 66);">
  <article name="Property Code">${listOfSaves[i].fields['Record Code']}</article>

    <input name="Date and Time of Incident" type="datetime-local" id="dateselect" value="${dateTimeLocalValue}"> 
    
    <select name="Reporting Officer" id="routeselect">
      <option selected disabled value="">${listOfSaves[i].fields['Reporting Officer']}</option>
    </select>

    <textarea name="Description of incident or observation">${listOfSaves[i].fields['Description of incident or observation']}</textarea>

    <article name="Picture or other attachment if needed"><img src="${imgUrl}" style="height:${imgH}px;"></article>

        
</article>
</details>`

let reportList = document.getElementById('recordslist')
reportList.innerHTML = reportList.innerHTML + item





  }
  console.log(listOfSaves.length)
  // let rec = await cloudDb.getOne("recHu52FwctlfyJRL")
  // console.log(rec)
}

//IS_AFTER({Date and Time of Incident}, "2025-04-09")