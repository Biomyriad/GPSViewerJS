/*

    //points
    {
        "lat": 47.34837921486891,
        "lon": -122.22251460615911,
        "time": "2025-11-08T04:30:00.999Z"
    }
    
    //groupedPoints
    {
      propNumber: 123
      propName: "abc"
      timeIn: Date
      timeOut: Date
      points: [points]
    }

    //props.dat object structure 
    {
        "ZoneNumber": 0,
        "ZoneName": "AOG Office",
        "ZonePoints": [
            {
                "TimeStamp": "0001-01-01T00:00:00",
                "Lg": -122.2227931,
                "Lt": 47.3475684
            }, ....
        ]
    }
*/


class GPXRoute {
  constructor() {

    this.points = []
    this.propZones = []
    this.routeSegments = []
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

  // props.dat decoding
  async textDecompressAsync(compressedText) {
    const gzBuffer = Uint8Array.from(atob(compressedText), c => c.charCodeAt(0));
    const msgLength = new DataView(gzBuffer.buffer).getInt32(0, true);
    const ms = new Uint8Array(gzBuffer.length - 4);
    ms.set(gzBuffer.subarray(4));

    const buffer = new Uint8Array(msgLength);
    const zip = new DecompressionStream('gzip');
    const readableStream = new ReadableStream({
      start(controller) {
        controller.enqueue(ms);
        controller.close();
      }
    });

    const decompressedStream = readableStream.pipeThrough(zip);
    const reader = decompressedStream.getReader();

    var data = await reader.read().then(({ done, value }) => {
      if (done) return '';
      return new TextDecoder('utf-8').decode(value);
    });

    this.propZones = JSON.parse(data)
  }

  insideZone(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i].Lt, yi = vs[i].Lg;
      var xj = vs[j].Lt, yj = vs[j].Lg;

      var intersect = ((yi > y) != (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }

    return inside;
  }


  filterRouteSegments() {
    //copied from old program
    // NEEDS REVIEW!!!!
    // ALSO CHECK THE TIME ON LAST POINT OF EACH SEG'S 
    for (var i = 1; i < this.routeSegments.length - 1; i++)
    {
        if (this.routeSegments[i].propName == "Transit")
        {
            // if the gps is outside the prop for more than X time then dont combine
            // TODO: Replace 300 with the zonedef's filter setting.
            var time1 = new Date(this.routeSegments[i].timeOut)
            var time2 = new Date(this.routeSegments[i].timeIn)

            if ((time1 - time2) < 300000)
            {
                if (this.routeSegments[i - 1].propName == this.routeSegments[i + 1].propName)
                {

                    this.routeSegments[i].points.forEach((loc) => {
                      this.routeSegments[i - 1].points.push(loc);
                    })

                    this.routeSegments[i + 1].points.forEach((loc) => {
                      this.routeSegments[i - 1].points.push(loc);
                    })

                    this.routeSegments[i - 1].timeIn = this.routeSegments[i - 1].points[0].time
                    this.routeSegments[i - 1].timeOut = this.routeSegments[i - 1].points[this.routeSegments[i - 1].points.length -2]?.time

                    this.routeSegments.splice(i + 1, 1)
                    this.routeSegments.splice(i, 1)
                    i = i - 1
                }
            }
        }
    }
  }

  pointsToRouteSegments() {
    var routeSegments = []
    var lastProp = {
      "ZoneNumber": null,
      "ZoneName": "Transit",
      "ZonePoints": [[0,0],[0,0],[0,0]]
    }
    var currentSegment = {
      propNumber: 0,
      propName: "",
      timeIn: undefined,
      timeOut: undefined,
      points: []
    }

    var testVar = 0

    // do an initial setup loop to avoid checks each loop
    this.propZones.forEach((prop) => {
      if (this.insideZone([this.points[0].lat, this.points[0].lon], prop.ZonePoints)) {
        lastProp = prop
        currentSegment = {
          propNumber: prop.ZoneNumber,
          propName: prop.ZoneName,
          timeIn: new Date(this.points[0].time),
          timeOut: undefined,
          points: []
        }
      }
    })


    //this.points.forEach((pnt) => {
    for (let x = 0; x < this.points.length; x++) {
      //console.log("points loop")

      if (this.insideZone([this.points[x].lat, this.points[x].lon], lastProp.ZonePoints)) {
        currentSegment.points.push(this.points[x])
        //console.log("+1")
      } else {

        var isFound = false
        //this.propZones.forEach((prop) => {
        for (let y = 0; y < this.propZones.length; y++) {

          if (this.insideZone([this.points[x].lat, this.points[x].lon], this.propZones[y].ZonePoints)) {
            lastProp = this.propZones[y]

            currentSegment.timeOut = new Date(currentSegment.points.at(-1).time)
            routeSegments.push(currentSegment)

            currentSegment = {
              propNumber: this.propZones[y].ZoneNumber,
              propName: this.propZones[y].ZoneName,
              timeIn: new Date(this.points[x].time),
              timeOut: undefined,
              points: []
            }
            currentSegment.points.push(this.points[x])
            isFound = true
            break
          } 
        }
        if (isFound) continue
        
        if (lastProp.ZoneNumber == null) {
          currentSegment.points.push(this.points[x])
        } else {
            lastProp = {
                        "ZoneNumber": null,
                        "ZoneName": "Transit",
                        "ZonePoints": [[0,0],[0,0],[0,0]]
                      }

            currentSegment.timeOut = new Date(currentSegment.points.at(-1).time)
            routeSegments.push(currentSegment)

            currentSegment = {
              propNumber: null,
              propName: "Transit",
              timeIn: new Date(this.points[x].time),
              timeOut: undefined,
              points: []
            }
            currentSegment.points.push(this.points[x])
        }
      }

    }

    this.routeSegments = routeSegments

    // var asd = 0
    //console.log('////////////////////////////////////// ', testVar)
    // routeSegments.forEach((rte) => {
    //   //asd = asd + rte.points.length
    //   console.log(rte)
    // })

    // console.log(asd)

  }


}


//console.log(this.propZones[0])
//console.log(this.insideZone([47.347427, -122.222907], this.propZones[0].ZonePoints))

// if(this.insideZone([pnt.lat, pnt.lon], this.propZones[0].ZonePoints)) {
//   console.log(pnt)
// }



    // this.points.forEach((pnt) => {
    
    //   console.log("points loop")
    //   testVar++
    //   if (this.insideZone([pnt.lat, pnt.lon], lastProp.ZonePoints)) {
    //     currentSegment.points.push(pnt)
    //   } else {

    //     this.propZones.forEach((prop) => {
    //       console.log("zones loop")
    //       if (this.insideZone([pnt.lat, pnt.lon], prop.ZonePoints)) {
    //         console.log("xxxxxxxxxx prop - ", prop.ZoneName)
    //         lastProp = prop
    //         //console.log(prop.ZoneName)

    //         currentSegment.timeOut = new Date(currentSegment.points.at(-1).time)
    //         routeSegments.push(currentSegment)

    //         currentSegment = {
    //           propNumber: prop.ZoneNumber,
    //           propName: prop.ZoneName,
    //           timeIn: new Date(pnt.time),
    //           timeOut: undefined,
    //           points: []
    //         }
    //         currentSegment.points.push(pnt)
    //       } 
          
    //     })

    //     console.log("xxxxxxxxxx street")

    //   }

    // })