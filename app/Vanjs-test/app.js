

await dataBase.initDbAsync()


//////////////////////////////////////////////////

import Reports from "./comp/Reports.js"
//import Reports from "./comp/ReportsShell.js"
import vjs from "./comp/VehicleReport.js"
import testForm from "./comp/ObservationReport.js"
import MainTabs from "./comp/MainTabs-vanui.js"

const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = async () => {

  return div({style: "height: 100%;"},
    MainTabs  ({
      "1": await Reports(), //"1": testForm(incidentRecs[6].rec),
      "2": vjs(),//testForm(incidentRecs[6].rec),//"start-flag.svg": ,
      "3": div(p("Content for Tab 3")),
      "4": div(p("Content for Tab 4")),
      "5": div(p("Content for Tab 5")),
      "6": div(p("Content for Tab 6")),
    })
  );
};

van.add(document.body, await App())

