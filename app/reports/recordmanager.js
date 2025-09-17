//const laptop = new Product("Laptop", 1200);
//laptop.displayDetails(); // Output: Product: Laptop, Price: $1200
// 

class AtDb {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayDetails() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

//////////////////////////////
var atUtil = {}

atUtil.addDays = (date, days) => {
  const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  return newDate;
}

atUtil.subDays = (date, days) => {
  days = days -1
  const newDate = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  return newDate;
}

atUtil.xxx = () => {

}

atUtil.getDateFilterParams = (startTimeStamp,endTimeStamp, tableColumn = "", ascDesc = "") => {

  let atFilter = 'filterByFormula=IF(AND(IS_AFTER({Date and Time of Incident},"' +
    `${startTimeStamp.getFullYear()}-${startTimeStamp.getMonth() + 1}-${startTimeStamp.getDate()}` +
    '"),IS_BEFORE({Date and Time of Incident},"' +
    `${endTimeStamp.getFullYear()}-${endTimeStamp.getMonth() + 1}-${endTimeStamp.getDate() + 1}` +
    '")),1,0)'
  //let atSort = `&sort[0][field]=Date+and+Time+of+Incident&sort[0][direction]=asc`
  
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
  
  //console.log(atFilter + atSort)
  return encodeURI(atFilter + atSort)

}