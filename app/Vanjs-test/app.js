import Reports from "./Reports.js"
import TabsR from "./TabsR-vanui.js"

const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = () => {

  return div({style: "height: 100%;"},
    TabsR  ({
      tabButtonRowClass: "XXXX",
      tabButtonClass: "YYYY",
      tabContentClass: "zzzz",
      tabButtonActiveColor: "grey",
      tabButtonBorderStyle: "none",
      tabContentStyleOverrides: {"height": "100%"},
      style: `
        height: 100%;
        display: flex;
        flex-direction: column;
      `,
      tabButtonRowStyleOverrides: 
      {
        "height": "50px",
        "padding-left": "12px", 
        "background-color": "#444444",
        "display": "flex",
        "align-items": "center",
        "justify-content": "space-around",

      },
    },{
      "Start": div(p("Content for Tab 1")),
      "Home": div(p("Content for Tab 2")),
      "Reports": Reports(),
      "Times": div(p("Content for Tab 2")),
      "Doc": div(p("Content for Tab 2")),
      "⚙️": div(p("Content for Tab 2")),
    })
  );
};

//////////////////////////////////////////////////

van.add(document.body, App())


async function load() {
  await preLoad()
}
load() 
