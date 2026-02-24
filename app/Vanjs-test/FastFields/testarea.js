import TagForm from "./PE_SubForm.js";
import Accord from "./Accordion.js";
import mini from "./PE_Subform_mini.js";

const { label, div, button, input, img, hr, span, select, option, article, summary, details, h2, h3, p } = van.tags;

export default async function fftest() {

  const guardNameVal = van.state("")
  const reportDateStrVal = van.state(new Date().toLocaleDateString('en-CA'))

  const vehicleSubFormsVal = van.state([
      {
        "multiphoto_picker_1": [
          {
            "comment": "",
            "photo": ""
          },
          {
            "comment": "",
            "photo": ""
          }
        ],
        "alpha_1": "1111", // make/model
        "alpha_2": "2222", // plate number
      }
    ,{
        "multiphoto_picker_1": [
          {
            "comment": "",
            "photo": ""
          },
          {
            "comment": "",
            "photo": ""
          }
        ],
        "alpha_1": "333", // make/model
        "alpha_2": "444", // plate number
      }
  ])

  const VehicleSubFormDataVal = van.state(null)

  function subFormsList(xxx) {

    return xxx.val.map(subf => 
      Accord({ isOpen: false },
        div({ style: "display: flex; justify-content: space-between; align-items: center; white-space: nowrap; width: 100%;" },
          // div({class: "rec-routecolorbox", style: `background-color: red; display: flex; align-items: center; justify-content: center;`}, ),
          span({ style: "font-size: 20px; font-weight: bold; padding-left: 8px;" }, `${"4"}: ${'Mazda 323'} - ${'ABC1234'}`),
          img({ src: "../images/car.jpg", style: "height: 40px; width: 40px; border-radius: 4px" })
        ),
        mini(subf, () => { }, () => { })
      )
    )
  }

  // Accord({isOpen: true },
  //   div({style: "display: flex; justify-content: space-between; align-items: center; white-space: nowrap; width: 100%;"},
  //     // div({class: "rec-routecolorbox", style: `background-color: red; display: flex; align-items: center; justify-content: center;`}, ),
  //     span({style: "font-size: 20px; font-weight: bold; padding-left: 8px;"}, `${"4"}: ${'Mazda 323'} - ${'ABC1234'}`),
  //     img({ src: "../images/car.jpg", style: "height: 40px; width: 40px; border-radius: 4px" })
  //   ),
  //   mini(),
  // ),

  return div({ class: "container", style: "margin-top: 80px; padding: 6px;" },
    //{ "aria-busy": "true" },

    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Date:"),
      input({
        value: reportDateStrVal.val, type: "date",
        style: "", onchange: e => reportDateStrVal.val = e.currentTarget.value
      }),
    ),

    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Guard Name:"),
      input({
        class: "", type: "text", style: "display: block; margin-bottom: 5px;",
        value: guardNameVal.val, onchange: e => guardNameVal.val = e.target.value
      }),
    ),

    hr(),

    article({ style: "padding: 0px 8px; padding-bottom: 8px; " },

      summary({ style: "padding-left: 8px; height: 35px; border-radius: 4px; line-height: 35px; margin-bottom: 5px; overflow: hidden;" },
        "Reported Vehicles",
      ),
      div({style: "display: flex; flex-direction: column; gap: 8px;" },
          subFormsList(vehicleSubFormsVal)
      ),
    ),


    // () => Accord({isOpen: true },
    //   div({style: "display: flex; justify-content: space-between; align-items: center; white-space: nowrap; width: 100%;"},
    //     // div({class: "rec-routecolorbox", style: `background-color: red; display: flex; align-items: center; justify-content: center;`}, ),
    //     span({style: "font-size: 20px; font-weight: bold; padding-left: 8px;"}, `${"4"}: ${'Mazda 323'} - ${'ABC1234'}`),
    //     img({ src: "../images/car.jpg", style: "height: 40px; width: 40px; border-radius: 4px" })
    //   ),
    //   mini(
    //     {
    //       "multiphoto_picker_1": [
    //         {
    //           "comment": "",
    //           "photo": ""
    //         },
    //         {
    //           "comment": "",
    //           "photo": ""
    //         }
    //       ],
    //       "alpha_1": "", // make/model
    //       "alpha_2": "", // plate number
    //     }),() => { },() => { }),



    //// OUT OF POSITION
    // background: conic-gradient(#000 0% 25%, #8a08aa 0% 50%, #000 0% 75%, #8a08aa 0% 100%);
    // background-size: 40px 40px; /* Controls the size of the squares */
    div({
      style: `
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
      span({ style: "font-size: 25px; font-weight: bold; overflow: hidden;text-overflow: ellipsis; white-space: nowrap;" }, "177-Avalon Bear Creek PE"),
      button({ style: "", onclick: () => { } }, "Submit"),
    ),

    button({
      style: "position: fixed; bottom: 8%; right: 50%; transform: translateX(50%); border-radius: 50%; height: 60px; width: 60px;",
      onclick: () => {
        VehicleSubFormDataVal.val = null
        document.getElementById("popup-overlay").style.display = "flex"
        console.log("open new")
      }

    },
      img({ src: "../images/plus.svg" })
    ),


    div({ id: "popup-overlay", style: `background-color: rgba(0, 0, 0, 0.80); position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: none; justify-content: center; align-items: center;` },
      article({ style: "width: 90vw; background-color: rgb(38, 47, 66); border-radius: 0.5rem; padding: 8px;" },
        mini(
          VehicleSubFormDataVal.val,
          () => { document.getElementById("popup-overlay").style.display = "none"; console.log("close") },
          (formObj) => { vehicleSubFormsVal.val = [...vehicleSubFormsVal.val, formObj]; console.log(vehicleSubFormsVal.val); document.getElementById("popup-overlay").style.display = "none"; }),
      ),
    )

  );
};


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
