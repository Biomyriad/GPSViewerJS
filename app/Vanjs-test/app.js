

await dataBase.initDbAsync()


//////////////////////////////////////////////////

import Reports from "./comp/Reports.js"
//import Reports from "./comp/ReportsShell.js"
//import vjs from "./comp/VehicleReport.js"
import testForm from "./comp/DispatchReports.js"
import MainTabs from "./comp/MainTabs-vanui.js"

const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = async () => {
  const rec ={
    "rec": {
        "id": "reczY1K62xKnjVf01",
        "createdTime": "2026-02-02T06:24:03.000Z",
        "fields": {
            "Unit Number": "2-308",
            "Property Code": [
                "recEjmkdAJusTPE2C"
            ],
            "Time of Call": "2026-02-02T06:22:21.028Z",
            "Reason for the customer's call": "Neighbors above unit has children running after quiet hours. ",
            "Resolution": "Incident documented.",
            "Time of resolution": "2026-02-02T06:24:00.000Z",
            "Name of caller": "Lida",
            "Dispatch Officer": "Nico Lang",
            "Responding Officer": "Nico Lang",
            "Offending Unit #": "2-408"
        }
    },
    "id": "reczY1K62xKnjVf01",
    "createdTime": "2026-02-02T06:24:03.000Z",
    "isMandatory": false,
    "modified": false,
    "route": []
}


  return div({style: "height: 100%;"},
    MainTabs  ({
      // "Summary": "start-flag.svg",
      // "Home": "home.svg",
      // "Times": "stopwatch.svg",
      // "Reports": "report.svg",
      // "Docs": "books.svg",
      // "Settings": "settings.svg",

      "Reports": "report.svg",
      "Summary": "start-flag.svg",
      "Home": "home.svg",
      "Times": "stopwatch.svg",
      "Docs": "books.svg",
      "Settings": "settings.svg",
    },{
      "1": await Reports(),//testForm({rec: rec.rec}), //"1": testForm(incidentRecs[6].rec),
      //"1": testForm({rec: rec.rec}),
      "2": div(p("Content for Tab 2")),//testForm(incidentRecs[6].rec),//"start-flag.svg": ,
      "3": div(p("Content for Tab 3")),
      "4": div(p("Content for Tab 4")),
      "5": div(p("Content for Tab 5")),
      "6": div(p("Content for Tab 6")),
    })
  );
};

van.add(document.body, await App())

