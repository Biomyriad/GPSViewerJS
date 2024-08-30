class GPXRoute {
  constructor() {
    this.points = []
  }

  async addPontsFromGPX(xmlString) {
    var points = []
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
    var xmlPts = xmlDoc.getElementsByTagName("trkpt")

    for (let item of xmlPts) {
      var newPoint = {
        lat: parseFloat(item.getAttribute("lat")),
        lon: parseFloat(item.getAttribute("lon")),
        time: new Date(item.childNodes[1].innerHTML)
      }
      points.push(newPoint)
    }
    this.points = this.points.concat(points)
  }

  async filterByTimeRange(startDate, endDate) {
    this.points = this.points.filter((pt) => {
      return startDate.getTime() <= pt.time.getTime() && pt.time.getTime() <= endDate.getTime()
    })
  }

}