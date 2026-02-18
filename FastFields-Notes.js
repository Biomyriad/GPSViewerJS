file picker version

async function uploadImage() {
    // 1. Get the file input element
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select an image file.");
        return;
    }

    // 2. Create a FormData object
    // Appending the file to FormData is the standard way for file uploads
    const formData = new FormData();
    formData.append("imageFile", file); // 'imageFile' is the field name your server expects

    // 3. Use the fetch API to send the FormData
    try {
        const response = await fetch('/your-upload-endpoint', {
            method: 'POST',
            body: formData // Fetch automatically sets the correct Content-Type: multipart/form-data header
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Or response.text() depending on your server's response
        console.log('Upload successful:', result);
        alert('Image uploaded successfully!');

    } catch (error) {
        console.error('Error uploading image:', error);
        alert('Image upload failed.');
    }
}

/*

    //  let res = await fetch(``, {
    //     method: 'POST',
    //     headers: {content: "application/json"}, body: JSON.stringify({})
    //   });//   let data = await res.json();

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

POST Authenticate
POST Create PDF Report

GET Get Media Download URL
POST Upload Media

POST Create Dispatch
PUT Recall Dispatch
GET Get Dispatches By User

POST Create Lookup List
GET Get Lookup Lists
PUT Update Lookup List

GET Get Form Definition
GET Get Form Result
GET Get Forms
GET Get Forms by Library

GET Get Libraries
GET Get Libraries by User

GET Get Users by Library
GET Get Users
*/