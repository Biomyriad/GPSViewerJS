//const {button, div, pre} = van.tags

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const Run = ({sleepMs}) => {
//   const steps = van.state(0);
//   ( 
//     async () => { 
//         for (; steps.val < 40; ++steps.val) await sleep(sleepMs) 
//     }
//   )()

//   return pre(() => `${" ".repeat(40 - steps.val)}🚐💨Hello VanJS!${"_".repeat(steps.val)}`)
// }

// const Hello = () => {
//   const dom = div()
//   return div(
//     dom,
//     button({onclick: () => van.add(dom, Run({sleepMs: 2000}))}, "Hello 🐌"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 500}))}, "Hello 🐢"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 100}))}, "Hello 🚶‍♂️"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 10}))}, "Hello 🏎️"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 2}))}, "Hello 🚀"),
//   )
// }

//var xxx = Hello()
//van.add(document.body, Hello())
//van.add(document.getElementById("HERE"), Hello())


/////////////////////////////////////////////////////////////


const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = () => {
  return div({style: ""},
    TabsR  ({
      tabButtonRowClass: "XXXX",
      tabButtonClass: "YYYY",
      tabContentClass: "zzzz",
      style: "max-width: 500px;",
      tabButtonActiveColor: "grey",
      tabButtonBorderStyle: "none",
      tabButtonRowStyleOverrides: {"padding-left": "12px", "background-color": "#444444",},
    },{
      "Tab 1": div(p("Content for Tab 1")),
      "Tab 2": div(p("Content for Tab 2")),
      "Tab 3": div({class: "container", style: "margin-top: 50px;"},

        div({style: "display: flex; justify-content: space-around; align-items: center; margin-bottom: 40px;"},
          button({onclick: dateNav},"<-"),
          input({id:"shift-date", type:"date", style:"width: 150px; margin: 0;"}),
          button({onclick: dateNav2},"->"),
        ),

        hr(
          span("Filter by route"),
          select({id:"filterbyroute"},
            option({value:"none"},"No Filter"),
            option({value:"South Route"},"South Route"),
            option({value:"NE Route"},"NE Route"),
          )
        ),

        article({id:"recordslist"},
          summary({"aria-busy":"true"})
        ),

        div({id: "out"})
      ),
    })
  );
};
let test = {}
const TabsR = (...stuff) => {
  test = Tabs(...stuff)
  var tabsBar = test.getElementsByClassName("XXXX")[0]
  test.removeChild(tabsBar)
  test.appendChild(tabsBar)
  console.log(test)
  return test
};

van.add(document.body, App())



    async function load() {
      await preLoad()
    }
    load() 




////////////////////////////////////////////////////////////


// import van from "vanjs-core";
// import { Tabs } from "vanjs-ui";

// const { div, p } = van.tags;

// const App = () => {
//   return div(
//     Tabs({
//       "Tab 1": div(p("Content for Tab 1")),
//       "Tab 2": div(p("Content for Tab 2")),
//       "Tab 3": div(p("Content for Tab 3")),
//     })
//   );
// };

// van.add(document.body, App());