const { label, div, button, input, img, hr, span, select, option, article, summary, h1, h2 , h3 } = van.tags;

export default async function fftest() {

  const ffun = van.state("")
  const shiftDateStrVal = van.state(new Date().toLocaleDateString('en-CA'))

  const load = async () => { }

  return div({ class: "container", style: "margin-top: 15px; padding: 6px;" },
    //{ "aria-busy": "true" },



    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Date:"),
      input({
        id: "shift-date", value: shiftDateStrVal.val, type: "date",
        style: "", onchange: e => shiftDateStrVal.val = e.currentTarget.value}),
    ),

    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Guard Name:"),
      input({
        class: "", id: "fftst-un", type: "text", style: "display: block; margin-bottom: 5px;",
        value: ffun.val, onchange: e => ffun.val = e.target.value
      },
      ),
    ),

    div({ style: "display: flex; justify-content: space-around; align-items: center; margin-bottom: 20px;" },
      button({ onclick: () => {} }, "<-"),

      button({ onclick: () => {} }, "->"),
    ),

    hr(),

    // span("Filter by route"),
    // select({ id: "filterbyroute", value: "none", onchange: e => { var x = e.target.value; } },
    //   option({ value: "none" }, "No Filter"),
    //   option({ value: "South Route" }, "South Route"),
    //   option({ value: "NE Route" }, "NE Route"),
    // ),

    article({ id: "recordslist" },

      summary({ style: "padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;" }, 
        "Reported Vehicles",
        
      ),

      // () => div(vehicleRecsVal.val.map(
      //   (rec) => {
      //     if (rec.route.includes(routeFilterVal.val) || routeFilterVal.val == 'none') {
      //       //   createReportHtml(rec.rec)
      //       //    return ObsReport({rec: rec.rec,errCol: chkReports(rec)})
      //       return vehReport({ rec: rec.rec, errCol: "transparent" })
      //     }
      //   }
      // )),
      ///...
    ),
    button({
      style: "position: absolute; bottom: 10px; right: 50%; transform: translateX(50%); border-radius: 50%; height: 60px; width: 60px;",

      onclick: () => {} }, img({ src:"../images/plus.svg"})
    ),

  );
};


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
