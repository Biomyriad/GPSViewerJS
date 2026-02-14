//NODE ONLY 




async function dipatchForm(){

var data = 
{
    // NOTES: Looks like there is "Status (Is List of some kind)", "Priority (3: High, Medium, low, N/A)", "Project (String)", "Address", "Task Info"
    "formId": 585136,
    "name": "AOG REPORTING",
    //"dueDate": "2017-12-03T08:38:27.771-08:00",//(optional,stringISO)
    //"referenceId": "", //(optional,string) 	An external identiﬁer assigned to the dispatch which can be used to uniquely identify the Dispatch record in FastField. Often the reference Id is used to reference an existing identiﬁer from another system.
    "autoCreateUsers": false,
    "recipients": [
        // {
        //     "firstName": "Joe", //(autoCreateUsers only?)
        //     "lastName": "Test", //(autoCreateUsers only?)
        //     "email": "testuser@mergemobile.com" //(autoCreateUsers only?)
        // },
        {"userId": 333461}, // (OR UserId))
    ],
    "dispatchEmailSubject": "New Test Dispatched Form!",
    "dispatchEmailMessage": "Please work ;P",
    "message": "We can get chatty here and... maybe add html? This prob gets sanitized. You know what?! Lets try... <b>bold</b> <i>italics</i> <u>underline</u> <a style='border: 1px solid blue;' href='https://www.fastfieldforms.com'>link</a>",
    "mergeFields": [ //(optional)
      { 
        "fieldKey": "My_Name",
        "value": "This came from code!!"
      }, 
      // { 
      //   "fieldKey": "name",
      //   "value": "abc name"
      // }, 
      // {
      //   "fieldKey": "job_id",
      //   "value": 1234
      // }, 
      // {
      //   "fieldKey": "job_date",
      //   "value": "2015-02-20T08:00:00Z"
      // }, 
      // {
      //   "fieldKey": "single_list_state",
      //   "value": "FL"
      // }, 
      // {
      //   "fieldKey": "multi_list_jobtype",
      //   "value": ["Trenching", "Excavation"]
      // }, 
      // {
      //   "fieldKey": "subform_4",
      //   "value": [
      //     [{
      //       "fieldKey": "alpha_1",
      //       "value": "Text"
      //     }, {
      //       "fieldKey": "numeric_2",
      //       "value": 12345
      //     }]
      //   ]
      // },
  ]
}




    var ffkey = "151844_fdef3e0b14ae49c785d01368c2fb10c5.csv"
    var xxx = ""
    await fetch(`https://api.fastfieldforms.com/services/v3/dispatch`, {
            method: 'POST',
            headers: {
                'X-Gatekeeper-SessionToken': '4b3d46cac647457d830f696b3b68a948',
                'Cache-Control': 'no-cache',
                'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d'},
                body: JSON.stringify(data)
        })
        .then(response => {
            // console.log(response.status);
            // console.log(response.text());
            return response.json()
        })
        .then(data => {
        // xxx = data.downloadUrl;
            console.log(data);
        })
        .catch(err => console.error(err));
}

//dipatchForm()


// fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
//   credentials: "include",
//   referrerPolicy: 'no-referrer-when-downgrade',
//   method: 'POST',
//   headers: {

//     Content: "application/json",
//     Authorization: `Basic bWF0dEBhb2dzZWN1cml0eS5jb206QWRtaW4yMDIxIQ==`,
//     //Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
//     'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d'
//   },
//   body: JSON.stringify({

//   })
// })
//   .then(function (response) {
//     if (!response.ok) {
//       console.log('Network response was not ok', response.status, response.statusText);
//       //throw new Error('Network response was not ok');
//     }
//     // response.json() returns another promise
//     return response.json();
//   })
//   .then(function (jsonData) {
//     console.log(jsonData);
//   })
//   .catch(function (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   });
// console.log("Hello World");


// var ffkey = "151844_fdef3e0b14ae49c785d01368c2fb10c5.csv"
// var xxx = ""
// await fetch(`https://api.fastfieldforms.com/services/v3/media/download?key=${ffkey}`, {
//         method: 'GET',
//         // Request headers
//         headers: {
//             'X-Gatekeeper-SessionToken': '4b3d46cac647457d830f696b3b68a948',
//             'Cache-Control': 'no-cache',
//             'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d'}
//     })
//     .then(response => {
//         // console.log(response.status);
//         // console.log(response.text());
//         return response.json()
//     })
//     .then(data => {
//       // xxx = data.downloadUrl;
//         console.log(data);
//     })
//     .catch(err => console.error(err));


// const textBlob = new Blob([
// `Heading 1, Heading 2
// Value 1, Value 2
// Value 3, Value 4
// `
// ], { type: 'text/plain' });
// const formData = new FormData();
// formData.append('file', textBlob, 'tst2.csv');

// var ffkey = "151844_dispatch@aogsecurity.com/"
// var xxx = ""
// await fetch(`https://api.fastfieldforms.com/services/v3/lookuplists/lookup_fffbcfcefc224f98bba1b2b046afb57e`, {
//         method: 'PUT',
//         // Request headers
//         headers: {
//             'X-Gatekeeper-SessionToken': 'eec597d415e44057a1a799effa8066ae',
//             'Cache-Control': 'no-cache',
//             'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d'},
//             body: formData
//     })
//     .then(response => {
//         // console.log(response.status);
//         // console.log(response.text());
//         return response.json()
//     })
//     .then(data => {
//       //xxx = data.downloadUrl;
//         console.log(data);
//     })
//     .catch(err => console.error(err));    

// fetch(xxx, {
//   credentials: "include",
//   method: 'GET',
//   headers: {
//     content: "xml/csv",
//   },
// })
//   .then(function (response) {
//     if (!response.ok) {
//       console.log('#2) Network response was not ok', response.status, response.statusText);
//       throw new Error('Network response was not ok');
//     }
//     // response.json() returns another promise
//     return response.json();
//   })
//   .then(function (jsonData) {
//     console.log('#2) -------------------------------------------------');
//     console.log(jsonData);
//   })
//   .catch(function (error) {
//     console.error('#2) There has been a problem with your fetch operation:', error);
//   });

