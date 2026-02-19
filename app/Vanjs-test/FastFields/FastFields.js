class FastFieldsAPI {

  constructor(apiKey=false) {
    //this.baseUrl = 'https://api.fastfieldforms.com/services/v3/'
    //this.baseUrl = 'http://127.0.0.1:3001/https://api.fastfieldforms.com/services/v3/'
    this.baseUrl = 'https://proxy.corsfix.com/?https://api.fastfieldforms.com/services/v3/'

    this.apiKey = '1a9ea71e79ab459d825f562f8aa4188d'
    this.sessionToken = ''//''
    this.authCredentials = ''

    if(apiKey) this.apiKey = apiKey

    //'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d', // primary
    //'FastField-API-Key': '22b602553cce45f8a9b5ba840e1d299e', // secondary

     // CHECK TO SEE THE LIFETIME OF IMAGES.!!!!
     // Eg if you use the upload media endpoint, how long do you have access to the media download url?
     // Does it expire after an amount of time or is it when its attached to a form and the 
     // submitted/dispatched form is deleted?

  }

  async authenticate(username, password) {
    var response = await this.sendRequest('authenticate', 'POST', null, {
      'Authorization': `Basic ${btoa(username + ":" + password)}`
    })
    console.log(response)
    if(response.isErrorStatus) return this.isRequestError(response, "authenticate")  

    this.sessionToken = response.data.sessionToken
    console.log("FastFieldsAPI|authenticate: ", "Authentication successful, session token: ", this.sessionToken)
    return true

  }

  async createPDFReport() {

  }

  async getMediaDownloadURL(awsMediaKey) {
    var response = await this.sendRequest('media/download?key=' + awsMediaKey, 'GET', null)
    if(this.isRequestError(response, "getMediaDownloadURL")) return false

    return response.downloadUrl
  }

  async uploadMedia() {

  const formData = new FormData();
    fetch('../images/car.jpg')
    .then(response => response.blob())
    .then(data => {
      formData.append('file', data, 'car.jpg');
      this.sendRequest('media/upload', 'POST', formData)
    })

  }

  async createDispatch(formObj) {
    var response = await this.sendRequest('dispatch', 'POST', formObj)
    if(this.isRequestError(response, "createDispatch")) return false

    return response.downloadUrl
  }

  async recallDispatch() {

  }

  async getDispatchesByUser() {

  }

  async createLookupList() {

  }

  async getLookupLists() {
// GET https://portal.fastfieldforms.com/api/lookuplist/lookup_22324c08b75c403db5c5a86967c0c794/data

  }

  async updateLookupList() {
    const textBlob = new Blob([
    `Heading 1, Heading 2
    Value 1, Value 2
    Value 3, Value 4
    Hello, World3
    too, manywords
    Last, test?
    `
    ], { type: 'text/plain' });
    const formData = new FormData();
    formData.append('file', textBlob, 'tst5.csv');
    
    this.sendRequest('lookuplists/lookup_fffbcfcefc224f98bba1b2b046afb57e', 'PUT', formData)

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

  async sendRequest(endpoint, method = 'GET', body = null, headers = {} ) {
    // TODO: Add error handling, retries, rate limit or loss on internet, etc.
    try {
        if(this.sessionToken != '') headers['X-Gatekeeper-SessionToken'] = this.sessionToken
        var response = await fetch(this.baseUrl + endpoint, {
          method: method,
          headers: {
            'Cache-Control': 'no-cache',
            'FastField-API-Key': this.apiKey,
            ...headers,
            // "x-corsfix-headers": JSON.stringify({
            //     "User-Agent": "MyAgent/1.0",
            // }),
          },
          body: body ? body : null
        })

        if (!response.ok) {
          console.log("FastFieldsAPI|sendRequest: ",'Network response was not ok', response.status, response.statusText);
          console.log("FastFieldsAPI|sendRequest: ",'', response);
          return {isErrorStatus: response.status, response: response}
          //throw new Error('Network response was not ok');
        } else {

          console.log("FastFieldsAPI|sendRequest: ",'Network response WAS ok?', response.status, response.statusText);
          const responseClone = response.clone(); // Create a clone
          var text = await responseClone.text()
          console.log("Raw body text:", text);

          if(!text==""){
            var jsonData = await response.json()
            console.log(jsonData)
          }

          return {data: jsonData}
        }
    } catch(error) {
        console.error("FastFieldsAPI|sendRequest: ",'There has been a problem with your fetch operation:', error);
        return {isErrorStatus: '0', error: error}
    }

  }

  isRequestError(errorObject, context="") {
    //TODO: add returning of reason for failed authentication (wrong credentials, network error, etc.)
    // - check http/status for some of the reasons, to be enough?
    if(errorObject.isErrorStatus) { 
      console.log("FastFieldsAPI|"+context+": ", "Request failed with status: ", errorObject.isErrorStatus)
      if( errorObject.error) {
        console.log("FastFieldsAPI|"+context+": ", "Error details: ", errorObject.error)
      }
      return true
    }

    return false
    // use context (call name) to do call specific error handling
  }
}
