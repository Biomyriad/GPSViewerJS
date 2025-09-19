//const laptop = new Product("Laptop", 1200);
//laptop.displayDetails(); // Output: Product: Laptop, Price: $1200



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

  // displayDetails() {
  //   console.log(`Product: ${this.name}`);
  // }
}

