

await dataBase.initDbAsync()


//////////////////////////////////////////////////

import Reports from "./comp/Reports.js"
//import Reports from "./comp/ReportsShell.js"
import vjs from "./comp/VehicleReport.js"
import testForm from "./comp/DispatchReports.js"
import fftest from "./FastFields/testarea.js"
import MainTabs from "./comp/MainTabs-vanui.js"

const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = async () => {

let rec = {
    "rec": {
        "id": "recMcLFHlAxbn6TwV",
        "createdTime": "2026-02-06T13:21:04.000Z",
        "fields": {
            "Date of Tag/Tow": "2026-02-06T13:19:38.427Z",
            "Reason for Tag": [
                "Fire lane"
            ],
            "Vehicle Lic#": "ZNA 55B",
            "Property Code": [
                "reco92CBVEBFmNvfz"
            ],
            "Tag or Tow?": "Tagged",
            "Pic": [
                {
                    "id": "attoJ1OfTx0B07oo5",
                    "width": 4000,
                    "height": 3000,
                    "url": "https://v5.airtableusercontent.com/v3/u/50/50/1770602400000/4GJOfyjqwMNV4etTyjVibg/bzjkmClm_AIgCFKyvKcUHkY4cnv6lXRzsGTOjoAGUOCvfcyMJYj7P5D6fGFmdHGeaEh-U_XHkdSws7cg1tpEJ7y2bPknIVHCnvSm-PnwUyTVIIfetVAnRfjteAyg9qHd56cGR4x1py9Mp0EHcUI8-pjAEtlgKYy-wIvn543zox8/gt0_2OeQ2lusbtDi2uk_U4x38x5R8I44tnWDAi20utQ",
                    "filename": "20260206_040407.jpg",
                    "size": 2912946,
                    "type": "image/jpeg",
                    "thumbnails": {
                        "small": {
                            "url": "https://v5.airtableusercontent.com/v3/u/50/50/1770602400000/a_arzWF9eSow3T-3DHxjlA/cNx10frNL47QJc4D10c2o9se3xrS3vzTs9iqmvvhrGJeTo3mIKTIkxWiq8gNYPZMMHkb1idy-Bh-_EuDHJ8e_RsOSfT2WWxmMbuMGUdyMyiOhCxVBxrf9OP0ZxKXBHMHpbyUOKfelr_4NbN00McdwA/v4A24VEsSb6BOvDhFYcrBWRHWd0-SL-4yzieZlXCnho",
                            "width": 48,
                            "height": 36
                        },
                        "large": {
                            "url": "https://v5.airtableusercontent.com/v3/u/50/50/1770602400000/FFfiesOYK_VEBNsUyFpdww/6Kys7GOPniBhSv26R34qkDTybh_7f1G9BVFKxL5lwsu0MmsocMUosRFS5YHHrGbC6nmkOtPSqofIh6DGTdeYEt2t_L6GITBzmfUsdpA6EsoMZqGtiT-EpQDg2ReKIPXfCiqcTkM7OW7B806alEBEnw/gLE1uKCboFKTgNZISL1S9-3GsLyll_fa6AzBRMSfOBA",
                            "width": 683,
                            "height": 512
                        },
                        "full": {
                            "url": "https://v5.airtableusercontent.com/v3/u/50/50/1770602400000/SaIp66Uu9O9IS0CBTq-8FQ/UnEZRTqWvn8MOgBE2W3XNKSjsX7BmpB68Ru8VmCz1hfkW1HMb_KZZi4XKs6LiuhfChhdu9EVffJFjFZjTUgE3t8JzZKyGdXRIMbmAQ-R_AlJqvedkMoJ5WijeRiDSvTbIfCOWdl-p5HN9BKq9Sb4QA/AvOboVN-fPeIsVbCsvpD-fktXMujV48ej0NurZklxIo",
                            "width": 3000,
                            "height": 2250
                        }
                    }
                }
            ],
            "Officer name": "Nico Lang",
            "Vehicle Make and Model": "Subaru Outback ",
            "Lic plate state": "AZ",
            "Car color": "Gray"
        }
    },
    "id": "recMcLFHlAxbn6TwV",
    "createdTime": "2026-02-06T13:21:04.000Z",
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
      "1": await vjs({rec: rec.rec, errCol: "transparent"}),
      //"1": await fftest(),
      //"1": await Reports(),
      "2": p(),//await Reports(),
      "3": div(p("Content for Tab 3")),
      "4": div(p("Content for Tab 4")),
      "5": div(p("Content for Tab 5")),
      "6": div(p("Content for Tab 6")),
    })
  );
};

van.add(document.body, await App())

