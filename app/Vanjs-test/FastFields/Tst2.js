//NODE ONLY 





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


var ffkey = "151844_fdef3e0b14ae49c785d01368c2fb10c5.csv"
var xxx = ""
await fetch(`https://api.fastfieldforms.com/services/v3/media/download?key=${ffkey}`, {
        method: 'GET',
        // Request headers
        headers: {
            'X-Gatekeeper-SessionToken': 'eec597d415e44057a1a799effa8066ae',
            'Cache-Control': 'no-cache',
            'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d'}
    })
    .then(response => {
        // console.log(response.status);
        // console.log(response.text());
        return response.json()
    })
    .then(data => {
      xxx = data.downloadUrl;
        console.log(data);
    })
    .catch(err => console.error(err));


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

