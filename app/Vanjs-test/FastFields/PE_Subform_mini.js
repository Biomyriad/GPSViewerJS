import Camera from "./Camera.js"
const { label, div, button, input, img, hr, article, h2, canvas, video } = van.tags;

export default function PE_SubForm(rec = null, cancelBtnCallback = null, saveBtnCallback = null, readOnly = false) {
  if(!rec || rec == null || rec == undefined) {
    //console.log("No data provided to subform, using defaults");
    rec = {
      "multiphoto_picker_1": [
        // {
        //   "comment": "",
        //   "photo": ""
        // },
        // {
        //   "comment": "",
        //   "photo": ""
        // }
      ],
      "alpha_1": "", // make/model
      "alpha_2": "", // plate number
    }
  }

  const makeModelVal = van.state(rec.alpha_1)
  const plateNumVal = van.state(rec.alpha_2)
  const imagesVal = van.state(rec.multiphoto_picker_1)

  function clearForm () {
    // console.log("Clearing form data...");
    //imagesVal.val = []

    var x = document.getElementsByTagName("input");
    for(let i = 0; i < x.length; i++) {
      x[i].value = "";
    }
  }

  const returnData = () => { return {
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
      "alpha_1": makeModelVal.val,
      "alpha_2": plateNumVal.val,
    }
  }



  const cameraPopup = div({ id: "camera-popup-overlay", style: `z-index: 1000; background-color: rgba(0, 0, 0, 0.80); position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: none; justify-content: center; align-items: center;` },
    article({ style: "width: 90vw; background-color: rgb(38, 47, 66); border-radius: 0.5rem; padding: 8px;" },
      div({},
        Camera(),
        console.log("camera component rendered")
      ),
    ),
  )

  const closePopup = () => {
    console.log("Closing camera popup...");
    //document.getElementById("camera-popup-overlay").style.display = "none"
    cameraPopup.style.display = "none"
  }

  const openPopup = async () => {
    console.log("Opening camera popup...");
    //document.getElementById("camera-popup-overlay").style.display = "flex"
    cameraPopup.style.display = "flex"
  }

  return div({style: "width: 100%; height: 100%;"},// padding: 8px; background-color: #262f42;"},//{class: "rec-content"},
    div({ style: "position: relative;" },
      label("Pictures:"),
      article({ class: "pictureareaaaa", style: "display: flex; justify-content: center; height: 140px; margin-bottom: 5px; gap: 10px;" },
        (   // ternary
          imagesVal.val.length > 0
          ?
          imagesVal.val.map(item => { console.log(item)
            return img({ src: item.photo, style: "height: 100px; border-radius: 4px" })
            //img({ src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px" })
          })
          :
          ""
        ),
        button( {style: "height: 100px; width: 100px;", onclick: () => openPopup()}, img({ src: "../images/plus.svg", style: "height: 40px; width: 40px;" }) ),
      ),
    ),

    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Make/Model:"),
      input({
        class: "", type: "text", style: "display: block; margin-bottom: 5px;", 
        value: makeModelVal.val, onchange: e => makeModelVal.val = e.target.value, ...(readOnly ? {disabled: true} : {})
      },
      ),
    ),

    div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
      label("Plate Number:"),
      input({
        class: "", type: "text", style: "display: block; margin-bottom: 5px;", ...(readOnly ? {disabled: true} : {}),
        value: plateNumVal.val, onchange: e => plateNumVal.val = e.currentTarget.value.toUpperCase()
      },
      ),
    ),


    !readOnly ? div({class: "buttonbox"},
      button({onclick: () => {cancelBtnCallback(); clearForm();}, style: 'width: 110px;' },"Cancel"),
      button({onclick: () => {saveBtnCallback(returnData()); clearForm();}, style: 'width: 110px;' },"Save"),
    ) : div({class: "buttonbox"},),  
    cameraPopup,
  )
};


