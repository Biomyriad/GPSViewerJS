/*
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

class FastFields {

  constructor() {
    this.baseUrl = 'http://127.0.0.1:3001/https://api.fastfieldforms.com/services/v3/'
    this.apiKey = '1a9ea71e79ab459d825f562f8aa4188d'
    this.sessionToken = ''
    this.authCredentials = ''
    //'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d', // primary
    //'FastField-API-Key': '22b602553cce45f8a9b5ba840e1d299e', // secondary

     // CHECK TO SEE THE LIFETIME OF IMAGES.!!!!
     // Eg if you use the upload media endpoint, how long do you have access to the media download url?
     // Does it expire after an amount of time or is it when its attached to a form and the 
     // submitted/dispatched form is deleted?

  }

  async authenticate(username, password) {
    var response = await this.sendRequest('authenticate', 'POST', null, {
      Authorization: 'Basic ' + btoa(username + ":" + password)
    })
    if(response.isErrorStatus) return this.errorHandler(response, "authenticate")  

    this.sessionToken = response.data.sessionToken
    console.log("FastFieldsAPI|authenticate: ", "Authentication successful, session token: ", this.sessionToken)
    return true

  }

  async createPDFReport() {

  }

  async getMediaDownloadURL() {

  }

  async uploadMedia() {

  }

  async createDispatch() {

  }

  async recallDispatch() {

  }

  async getDispatchesByUser() {

  }

  async createLookupList() {

  }

  async getLookupLists() {

  }

  async updateLookupList() {

  }

  async getFormDefinition() {

  }

  async getFormResult() {

  }

  async getForms() {

  }

  async getFormsByLibrary() {

  }

  async getLibraries() {

  }

  async getLibrariesByUser() {

  }

  async getUsersByLibrary() {

  }

  async getUsers() {

  }

  async sendRequest(endpoint, method = 'GET', headers = {}, body = null) {
    // TODO: Add error handling, retries, rate limit or loss on internet, etc.
    
    if(this.sessionToken != '') headers['X-Gatekeeper-SessionToken'] = this.sessionToken

    await fetch(this.baseUrl + endpoint, {
      method: method,
      headers: {
        'Content': "application/json",
        'Cache-Control': 'no-cache',
        'FastField-API-Key': this.apiKey, // primary
        'X-Gatekeeper-SessionToken': this.sessionToken,
        ...headers
      },
      body: body ? JSON.stringify(body) : null
    })
      .then(function (response) {
        if (!response.ok) {
          console.log("FastFieldsAPI|sendRequest: ",'Network response was not ok', response.status, response.statusText);
          return {isErrorStatus: response.status, response: response}
          //throw new Error('Network response was not ok');
        } else {
          return response.json()
        }
      })
      .then(function (jsonData) {
        //console.log(jsonData);
        return {data: jsonData}
      })
      .catch(function (error) {
        console.error("FastFieldsAPI|sendRequest: ",'There has been a problem with your fetch operation:', error);
        return {isErrorStatus: '0', error: error}
      });
  }

  errorHandler(errorObject, context="") {
    //TODO: add returning of reason for failed authentication (wrong credentials, network error, etc.)
    // - check http/status for some of the reasons, to be enough?
    if(errorObject.isErrorStatus) { 
      console.log("FastFieldsAPI|"+context+": ", "Request failed with status: ", errorObject.isErrorStatus)
      if( errorObject.error) {
        console.log("FastFieldsAPI|"+context+": ", "Error details: ", errorObject.error)
      }
      return false
    }

    // use context (call name) to do call specific error handling
  }
}




