class GPXRoute {
  constructor() {
    this.points = []
  }

  addPointsFromGPX(xmlString) {
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

  filterByTimeRange(startDate, endDate) {
    this.points = this.points.filter((pt) => {
      return startDate.getTime() <= pt.time.getTime() && pt.time.getTime() <= endDate.getTime()
    })
  }
  
  insideZone(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
}



}