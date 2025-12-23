import Reports from "./comp/Reports.js"
import testForm from "./comp/ObservationReport.js"
import MainTabs from "./comp/MainTabs-vanui.js"

const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = () => {

  return div({style: "height: 100%;"},
    MainTabs  ({
      "1": testForm(),
      "start-flag.svg": div(p("Content for Tab 2")),
      "3": Reports(),
      "4": div(p("Content for Tab 2")),
      "5": div(p("Content for Tab 2")),
      "6": div(p("Content for Tab 2")),
    })
  );
};

//////////////////////////////////////////////////

van.add(document.body, App())


async function load() {
  await preLoad()
}
load() 
