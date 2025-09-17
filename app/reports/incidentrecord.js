//const laptop = new Product("Laptop", 1200);
//laptop.displayDetails(); // Output: Product: Laptop, Price: $1200



class IncidentRecord {
  constructor(name="") {
    this.name = name
    this.isMandatory = false
    this.modified = false
    this.route = []
    this.rec = {}
    this.createdTime = {}
    this.id = ""

  }

  // displayDetails() {
  //   console.log(`Product: ${this.name}`);
  // }
}

