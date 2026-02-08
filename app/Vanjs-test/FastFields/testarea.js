const {label, div, button, input,p,hr,span,select,option,article,summary} = van.tags;

export default async function fftest () {
//401: Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.
  const ffun = van.state("")
  const ffpwd = van.state("")

  const load = async () => {

//Authorization: Basic 
// FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038

// try {
//  let response = await fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
//     method: 'POST',
//     headers: {
//       content: "application/json",

//       Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
//       'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038',      
//     },
//     body: JSON.stringify({

//     })
//   });
//   let data = await response.json();
// alert(data)

// }
// catch (err) {
//   alert(err)
// }
    console.log(`Basic ${loadx(ffun.val, ffpwd.val)}`)
    await fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
      method: 'POST',
      headers: {
        content: "application/json",
        Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
        'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038',
        //'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_1b55ab8d27b36646d9a2de55e4765068'
      },
      body: JSON.stringify({

      })
    })
    .then(function (response) {
      if (!response.ok) {
        console.log('Network response was not ok', response.status, response.statusText);
        //throw new Error('Network response was not ok');
      }
      // response.json() returns another promise
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
    })
    .catch(function (error) {
      console.error('There has been a problem with your fetch operation:', error);
    });

 
  // let data
  // try {
  //   const response = await axios({
  //     url: "https://api.fastfieldforms.com/services/v3/authenticate",
  //     method: "POST",
  //     headers: {
  //       Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
  //       "FastFieldAPI-Key": "FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038",
  //       content: "application/json",
  //     },
  //     // data: recObj,
  //     timeout: 15000,
  //     withCredentials: true,
  //   })
  //   data = response.data
  // } catch (err) {
  //   if (err?.message?.includes("Network Error")) {
  //     throw new Error("CORS or network error: ensure the API allows your origin or use a server-side proxy.")
  //   }
  //   if (err?.response) {
  //     throw new Error(`FastField ${err.response.status}: ${err.response.data?.message || err.response.statusText}`)
  //   }
  //   throw err
  // }

  


    return div(JSON.stringify(data))
  }

  const loadx = (username, password) => {
    return btoa(username + ":" + password)
  }

  return div({style: "height: 100%;"},
    //await load(),
    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("UN:"),     
        input({class: "", id: "fftst-un", type: "text", style: "display: block; margin-bottom: 5px;",
              value: ffun.val, onchange: e => ffun.val = e.target.value},
        ),
      ),
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("PWD:"), 
        input({class: "", id: "fftst-pwd", type: "text", style: "display: block; margin-bottom: 5px;",
                value: ffpwd.val, onchange: e => ffpwd.val = e.target.value},
        ),
      ),
      input({type: "button", value: "Load Data", onclick: async (e) => await load(), style: "width: 110px;"}),
    ),

  );
};


//https://app.requestly.io/rules/editor/edit/Script_hklf6
/* <script type="text/javascript">
    fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
      method: 'POST',
      headers: {
        content: "application/json",
        Authorization: `Basic A==`,
        //Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
        'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038',
      },
      body: JSON.stringify({

      })
    })
      .then(function (response) {
        if (!response.ok) {
          console.log('Network response was not ok', response.status, response.statusText);
          //throw new Error('Network response was not ok');
        }
        // response.json() returns another promise
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
      })
      .catch(function (error) {
        console.error('There has been a problem with your fetch operation:', error);
      });
	console.log("Hello World");
</script> */


// {
//     "sessionToken": "fb02dc38399b421ba80d48878285b4a9",
//     "sessionExpiration": "2026-02-09T04:57:19.62Z",
//     "accountId": 151844,
//     "userId": 333461,
//     "uniqueId": "bd73a1f1-d60d-4a30-806a-a336519a819f",
//     "userName": "dispatch@aogsecurity.com",
//     "firstName": "Dispatch",
//     "lastName": "Guard",
//     "accountName": "Always On Guard Security ",
//     "termsAndConditionsUrl": "",
//     "daysToKeepSubmittedForms": 90,
//     "isDirectPostAccount": false,
//     "isWhiteLabel": false,
//     "whiteLabelAccountId": 151844,
//     "masterAccountId": 0,
//     "formsStatusList": [
//         {
//             "id": 4203,
//             "uniqueId": "4c809cd3-2140-455e-8d9e-634d88ca411a",
//             "accountGuid": "401284b9-9dd7-4173-9a2d-e5552a8e75d5",
//             "name": "REQUEST MANAGER REVIEW",
//             "color": "#FF4949",
//             "isGlobal": false,
//             "updatedAt": "2024-02-08T02:11:15.59Z",
//             "forms": [
//                 {
//                     "id": 978493,
//                     "uniqueId": "6172316a-99d1-4d1a-b78d-140d99b42139",
//                     "name": "TEST 287 - Verde Esterra Park TEST",
//                     "accountId": 151844,
//                     "isSubForm": false,
//                     "version": 6,
//                     "updatedAt": "0001-01-01T00:00:00",
//                     "locationOutlierFactor": 0,
//                     "showLocationAddress": false,
//                     "hideAllEmptyFieldsFromReports": false,
//                     "isDefaultTaskForm": false,
//                     "isQBConnectedForm": false,
//                     "isQBSyncEnabled": false
//                 }
//             ],
//             "userGroups": []
//         }
//     ],
//     "mapBoxAT": "pk.eyJ1IjoiamVmZnN0YXkiLCJhIjoid21sQzBWOCJ9.O7_CZPnofYEqXkpeo4vdlw",
//     "useCalculationDependencyGraph": true,
//     "betas": {
//         "tasks": true,
//         "groupDispatch": true,
//         "formStatus": true
//     },
//     "roles": [
//         "Admin",
//         "Analyst",
//         "Builder",
//         "Collector",
//         "Dispatcher",
//         "Librarian",
//         "List Editor",
//         "Viewer"
//     ],
//     "globalLists": [],
//     "defaultDateFormat": "MM-dd-yyyy",
//     "defaultTimezoneId": "America/Los_Angeles",
//     "momentDateFormat": "MM[-]DD[-]YYYY",
//     "momentHourFormat": "hh:mm A",
//     "userGroups": [],
//     "lookupLists": [
//         {
//             "accountId": 151844,
//             "name": "Action Taken",
//             "createdAt": "2021-01-12T21:55:18.52Z",
//             "updatedAt": "2021-01-12T21:55:18.52Z",
//             "version": 1,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/b8f45ec3812544f6925585a496732197.csv'}",
//             "listId": "lookup_ccc54d40e2214ac9b351ac0e14c3eae7",
//             "columnNames": "col_ActionTaken",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "All Properties",
//             "createdAt": "2021-02-21T03:00:25.18Z",
//             "updatedAt": "2025-06-18T18:18:13.153Z",
//             "version": 21,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/29150f493f884fe399a43c264c9c2da0.csv'}",
//             "listId": "lookup_e5d5b25275864ea19a26ed5bab72946c",
//             "columnNames": "col_Name",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "Double Cover",
//             "createdAt": "2021-02-13T03:18:30.4Z",
//             "updatedAt": "2022-11-21T19:26:57.873Z",
//             "version": 7,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/5747dc7c0f5e40d3b5938e74af28736e.csv'}",
//             "listId": "lookup_06db6602dd614295bd690b02e7149ebf",
//             "columnNames": "col_PropertyName",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "Guard Name",
//             "createdAt": "2020-12-30T05:19:10.103Z",
//             "updatedAt": "2026-02-07T00:22:05.837Z",
//             "version": 172,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/757252834e6d41ff9bb0ff9c6935f827.csv'}",
//             "listId": "lookup_dcfb31e75db0406f9bf048ce7cffd413",
//             "columnNames": "col_GuardName,col_GuardEmail",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "Merge Mobile - Equipment Order Form - Item List",
//             "createdAt": "2020-12-07T01:07:16.197Z",
//             "updatedAt": "2020-12-07T01:07:16.197Z",
//             "version": 1,
//             "path": "{ \"key\" : \"151844/f266236372fb4b6d9565cf9feca5e017.csv\", \"bucket\" : \"fastfield-globallists\" }",
//             "listId": "lookup_3710948e7d4d4827b58fcc2052333660",
//             "columnNames": "col_Item,col_Description,col_Price",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "NE Properties - DO NOT USE",
//             "createdAt": "2021-01-14T02:28:55.54Z",
//             "updatedAt": "2022-03-17T00:18:16.913Z",
//             "version": 9,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/11e39c5d19044fb18fccf2017dc2eda6.csv'}",
//             "listId": "lookup_4045ef22af7d4f3a9496609fc0ef776a",
//             "columnNames": "col_Name",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "NE Route Properties",
//             "createdAt": "2021-01-03T02:26:27.327Z",
//             "updatedAt": "2025-03-17T23:58:47.53Z",
//             "version": 40,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/4baff6c47ddc4f33aaecc9e9eb0e47b8.csv'}",
//             "listId": "lookup_22324c08b75c403db5c5a86967c0c794",
//             "columnNames": "col_PropertyName",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "Route",
//             "createdAt": "2020-12-30T05:22:27.183Z",
//             "updatedAt": "2022-05-30T22:08:05.317Z",
//             "version": 6,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/9f1e2a1c77874289a641e3cdea03ec2f.csv'}",
//             "listId": "lookup_970aefc441db4f7fb22222158293f036",
//             "columnNames": "col_Route",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "South Rte Properties",
//             "createdAt": "2020-12-30T05:01:37.243Z",
//             "updatedAt": "2025-10-30T21:14:12.587Z",
//             "version": 45,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/bbfbea2954f9498a87781e160268a3df.csv'}",
//             "listId": "lookup_b39ae4a053894cd7851efbbff4b9d555",
//             "columnNames": "col_PropertyName",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "SUMMER NE",
//             "createdAt": "2025-06-18T18:15:57.503Z",
//             "updatedAt": "2025-06-18T18:15:57.503Z",
//             "version": 1,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/18d76cf504b3438c9676f61f9303b73c.csv'}",
//             "listId": "lookup_98b4846c436247988d0ba63e4fbe53c4",
//             "columnNames": "col_PropertyName",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "SUMMER NE Rte",
//             "createdAt": "2022-05-30T22:04:25.433Z",
//             "updatedAt": "2025-06-18T16:49:56.02Z",
//             "version": 15,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/ff18c7d65150435abaa379bd0cc661ec.csv'}",
//             "listId": "lookup_d0828fcc45a44e11b23addf4bf951d73",
//             "columnNames": "col_Name",
//             "indexes": []
//         },
//         {
//             "accountId": 151844,
//             "name": "SUMMER SOUTH",
//             "createdAt": "2025-06-18T18:11:30.76Z",
//             "updatedAt": "2025-07-22T23:34:34.063Z",
//             "version": 3,
//             "path": "{ bucket:'fastfield-globallists', key:'151844/b9c746cc12cc4148b4cdb21f00cd67f7.csv'}",
//             "listId": "lookup_45e724fa6c7444958b1dbb32edada1de",
//             "columnNames": "col_PropertyName",
//             "indexes": []
//         }
//     ],
//     "formsMenuName": null,
//     "formsMenuHidden": false,
//     "libraryMenuName": null,
//     "libraryMenuHidden": true,
//     "inBoxMenuName": null,
//     "inBoxMenuHidden": false,
//     "inProgressMenuName": null,
//     "syncMenuName": null,
//     "syncMenuHidden": false,
//     "submittedMenuName": null,
//     "submittedMenuHidden": false,
//     "kioskMenuHidden": true,
//     "copyEditMenuHidden": false,
//     "editFormMenuHidden": false,
//     "stopFloatMenuHidden": true,
//     "switchAccountsMenuHidden": true,
//     "customMenuFile": "151844_customMenu.json",
//     "customMenuVersion": 8,
//     "customMenusJson": []
// }




// fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
//   method: 'POST', headers: {
//     Authorization: `Basic ZGlzcGF0Y2hAYW9nc2VjdXJpdHkuY29tOkd1YXJkMjAyMA==`,
//     'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_1b55ab8d27b36646d9a2de55e4765068'
// }}).then(res => {
//   if (!res.ok) console.log('Response, not OK:', res.status, res.statusText)
//   return res.json()
// })
// .then(jData => console.log(jData))
// .catch(err => console.error('Fetch error:', err))


// CLEAN

//401: Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.

// Hello, I am attempting to connect and Auth with FastField API according to the API document I received from support. I am receiving the following error message: 

// 401: Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.

// Here is the code I wrote to attempt to connect (The auth data in the headers are dummy data in this):

// fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
//   method: 'POST', headers: {
//     Authorization: `Basic OGc2VXJWzcGtAyMAp29djdHl2hkF0YZkuYd1YXJk9nAYMj==`,
//     'FastField-API-Key': 'FF-5e07402861e39fd3e0292dd0e6014166_0_1b4689a76508366b5dd27b2de55e465a'
// }}).then(res => {
//   if (!res.ok) console.log('Response, not OK:', res.status, res.statusText)
//   return res.json()
// })
// .then(jData => console.log(jData))
// .catch(err => console.error('Fetch error:', err))

// Any insight into what I may be doing wrong would be greatly appreciated.