// (function() {
// var cors_api_host = '127.0.0.1:3001';
// var cors_api_url = 'https://' + cors_api_host + '/';
// var slice = [].slice;
// var origin = window.location.protocol + '//' + window.location.host;
// var open = XMLHttpRequest.prototype.open;
// XMLHttpRequest.prototype.open = function() {
//     var args = slice.call(arguments);
//     var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//     if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//         targetOrigin[1] !== cors_api_host) {
//         args[1] = cors_api_url + args[1];
//     }
//     return open.apply(this, args);
// };
// })();

//await dataBase.initDbAsync()



        // localStorage.setItem('username', 'JohnDoe');
        // const username = localStorage.getItem('username'); // 'JohnDoe'
        // localStorage.removeItem('username');
        // localStorage.clear();
        // localStorage.key(index): Retrieves the name of the key at a specified index, useful for looping through all stored items. 

//////////////////////////////////////////////////

import Reports from "./comp/Reports.js"
//import Reports from "./comp/ReportsShell.js"
import vjs from "./comp/VehicleReport.js"
import testForm from "./comp/DispatchReports.js"
import fftest from "./FastFields/testarea.js"
import MainTabs from "./comp/MainTabs-vanui.js"

const {a, div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = async () => {


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
      //"1": await vjs({rec: rec.rec, errCol: "transparent"}),
      "1": await fftest(),
      //"2": await Reports(),
      "2": div(p("First Page, 'Shift Summary', updates, Initial report data, etc ")),
      "3": div(p("Home, The page to be left on (mostly). has info about current prop if you on one or info for the next if in transit. check to see if calls to dispatch or other events have occurred. (like just arriving on a prop to confirm time-in).")),
      "4": div(p("patrol times and miles.")),
      "5": div(p("Documentation, SOPs, contact info, etc.")),
      "6": div(p(
              p("app and account settings, preferences, etc."),
              hr(),
              a({ href: "//" + window.location.host +"/app/gps/"}, "GPS")
            )),
    })
  );
};

van.add(document.body, await App())

