const { label, div, button, input, img, hr, span, select, option, article, summary, details, h2 , h3 } = van.tags;

export default function PE_SubForm(rec = null, cancelBtnCallback = null, saveBtnCallback = null, readOnly = false) {
  if(!rec || rec == null || rec == undefined) {
    //console.log("No data provided to subform, using defaults");
    rec = {
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
      "alpha_1": "", // make/model
      "alpha_2": "", // plate number
    }
  }

  const makeModelVal = van.state(rec.alpha_1)
  const plateNumVal = van.state(rec.alpha_2)
  //const imagesVal = van.state(rec.multiphoto_picker_1)

  const clearForm = () => {
    makeModelVal.val = ""
    plateNumVal.val = ""
    //imagesVal.val = []
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
    }}

return div({style: "width: 100%; height: 100%;"},// padding: 8px; background-color: #262f42;"},//{class: "rec-content"},
      div({ style: "position: relative;" },
        label("Pictures:"),
        article({ class: "pictureareaaaa", style: "display: flex; justify-content: center; height: 140px; margin-bottom: 5px;" },
          // (   // ternary
          //   attachmentVal.val.length > 0
          //     ?
          //     attachmentVal.val.map(item => {
          //       return img({ src: item.thumbnails.large.url, style: "height: 100px; border-radius: 4px" })
                  img({ src: "../images/car.jpg", style: "height: 100px; border-radius: 4px" })
          //     })
          //     :
          //     ""
          // )
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
        button({onclick: () => {cancelBtnCallback(); clearForm()}, style: 'width: 110px;' },"Cancel"),
        button({onclick: () => {saveBtnCallback(returnData()); clearForm()}, style: 'width: 110px;' },"Save"),
      ) : div({class: "buttonbox"},),  
    )
};


