//const laptop = new Product("Laptop", 1200);
//laptop.displayDetails(); // Output: Product: Laptop, Price: $1200
// 

class AtDb {
  constructor() {
    this.baseSchema = []
    this.allProps = []
    this.propIdToRouteLookup = []
    this.incidentOfficerList = []
    this.respondingOfficerList = []
    this.dispatchOfficerList = []
    this.tagTowOfficerList = []
  }

  /// Utils
  addDays = (date, days) => {
    const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    return newDate;
  }

  subDays = (date, days) => {
    days = days -1
    const newDate = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    return newDate;
  }

  isDateWithinMinutes(targetDate, referenceDate, minutesThreshold) {
    // Convert dates to milliseconds
    const targetTime = targetDate.getTime()
    const referenceTime = referenceDate.getTime()
    // Calculate the absolute difference in milliseconds
    const timeDifference = Math.abs(targetTime - referenceTime)
    // Convert minutesThreshold to milliseconds
    const minutesThresholdInMs = minutesThreshold * 60 * 1000
    // Check if the time difference is within the threshold
    return timeDifference <= minutesThresholdInMs
  }

  /// BASE DB INIT ///////////////////////////////

  async initDbAsync() {
    this.baseSchema = await cloudDb.getSchema()

    this.incidentOfficerList = this.baseSchema.tables[4].fields[3].options.choices
    this.respondingOfficerList = this.baseSchema.tables[3].fields[6].options.choices
    this.dispatchOfficerList = this.baseSchema.tables[3].fields[9].options.choices
    this.tagTowOfficerList = this.baseSchema.tables[2].fields[1].options.choices

    this.allProps = await cloudDb.getAll("All Properties")

    this.allProps.forEach(prop => {
      this.propIdToRouteLookup[prop.id] = prop.fields.Route
    })

  }

  lookupPropertyById(propId) {
    return this.allProps.find(rec => rec.id == propId)
  }

  genFilterByDateAndSortDirString = (startTimeStamp,endTimeStamp, tableColumn = "", ascDesc = "") => {
    endTimeStamp = this.addDays(endTimeStamp,1)
    let atFilter = `filterByFormula=IF(AND(IS_AFTER( {${tableColumn}},"${startTimeStamp.getFullYear()}/${startTimeStamp.getMonth() + 1}/${startTimeStamp.getDate()}"),IS_BEFORE({${tableColumn}},"${endTimeStamp.getFullYear()}/${endTimeStamp.getMonth() + 1}/${endTimeStamp.getDate()}")),1,0)`

    let atSort = ""
    switch(ascDesc) {
    case "asc":
      atSort = `&sort[0][field]=${tableColumn}&sort[0][direction]=asc`
      break;
    case "desc":
      atSort = `&sort[0][field]=${tableColumn}&sort[0][direction]=desc`
      break;
    default:
      // code block
    }
    return  encodeURI(atFilter + atSort)
  }

  async loadReportsAsync(startTimeAndDate, endTimeAndDate, tableName, sortColumn, ascDesc = "asc") {
    //const tableName = "Incident Reports and Observations"
    //const sortColumn = 'Date and Time of Incident'

    //let atEncodedParams = this.getDateFilterParams(startTimeStamp, endTimeStamp, tableColumn = "Date+and+Time+of+Incident", ascDesc = "asc")
    let atEncodedParams = this.genFilterByDateAndSortDirString(startTimeAndDate, endTimeAndDate, sortColumn, ascDesc)

    let retRecs = []
    retRecs.push(...await cloudDb.getAll(tableName, '', atEncodedParams))

    const loadedReportList = retRecs.filter(item => {
      const itemDate = new Date(item.fields[sortColumn]);
      return itemDate >= startTimeAndDate && itemDate <= endTimeAndDate;
    });

    var recs = [] 
    loadedReportList.forEach(rec => {
      recs.push(new DataRecord(rec))
    })

    return recs
  }
  
  // saving ...

}

class DataRecord {
  constructor(rec = {}) {
    this.rec = rec
    this.id = ""
    this.createdTime = {}

    this.isMandatory = false
    this.modified = false
    this.route = []
    
    if(rec != {}) {
      this.id = rec.id
      this.createdTime = rec.createdTime
    }
  }
}