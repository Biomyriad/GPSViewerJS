import TagForm from "./PE_SubForm.js";
import Accord from "./Accordion.js";
import mini from "./PE_Subform_mini.js";

const { label, div, button, input, img, hr, span, select, option, article, summary, details, h2 , h3,p } = van.tags;

export default async function fftest() {

  const guardNameVal = van.state("")
  const reportDateStrVal = van.state(new Date().toLocaleDateString('en-CA'))
  const vehicleSubFormsVal = van.state([])

  const subFormClosedVal = van.state(false)

  const load = async () => { }

  return div({ class: "container", style: "margin-top: 80px; padding: 6px;" },
    //{ "aria-busy": "true" },
    Modal({
        closed: subFormClosedVal,
        blurBackground: true,
        backgroundColor: "rgba(0,0,0,0.35)",
        backgroundClass: "qwerty",
        backgroundStyleOverrides: "",
        modalStyleOverrides: {'background-color': 'transparent', padding: "0px", borderRadius: "0.5rem"},
      },
      //TagForm()
      Accord({ },
       
      ),
    ),

    //   div(input({type: "radio", name: "lang", value: "Zig", checked: true}), "Zig"),
    //   div(input({type: "radio", name: "lang", value: "Rust"}), "Rust"),
    //   div(input({type: "radio", name: "lang", value: "Kotlin"}), "Kotlin"),
    //   div(input({type: "radio", name: "lang", value: "TypeScript"}), "TypeScript"),
    //   div(input({type: "radio", name: "lang", value: "JavaScript"}), "JavaScript"),

    //   p({style: "display: flex; justify-content: space-evenly;"},
    //     button({onclick:() => {}}, "Ok"),
    //     button({onclick: () => subFormClosedVal.val = true}, "Cancel"),
    //   )
    // ),

    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Date:"),
      input({
        value: reportDateStrVal.val, type: "date",
        style: "", onchange: e => reportDateStrVal.val = e.currentTarget.value}),
    ),

    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Guard Name:"),
      input({
        class: "", type: "text", style: "display: block; margin-bottom: 5px;",
        value: guardNameVal.val, onchange: e => guardNameVal.val = e.target.value
      },
      ),
    ),

    hr(),

    article({  },

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
    ),


    //// OUT OF POSITION
    // background: conic-gradient(#000 0% 25%, #8a08aa 0% 50%, #000 0% 75%, #8a08aa 0% 100%);
    // background-size: 40px 40px; /* Controls the size of the squares */
    div({ style: `
      position: absolute; 
      top: 0px; 
      left: 50%; 
      transform: translateX(-50%);

      height: 70px;
      width: 100%;  
      line-height: 70px;

      box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.35);
      -webkit-box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.35); 

      display: flex; 
      justify-content: space-around; 
      align-items: center;
      overflow: hidden;
    `},
      span({style: "font-size: 25px; font-weight: bold; overflow: hidden;text-overflow: ellipsis; white-space: nowrap;"}, "177-Avalon Bear Creek PE"),
      button({ style: "", onclick: () => { } }, "Submit"),
    ),

    button({
      style: "position: fixed; bottom: 8%; right: 50%; transform: translateX(50%); border-radius: 50%; height: 60px; width: 60px;",

      onclick: () => {} }, img({ src:"../images/plus.svg"})
    ),

  );
};


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
