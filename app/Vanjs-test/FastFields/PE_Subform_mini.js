const { label, div, button, input, img, hr, span, select, option, article, summary, details, h2 , h3 } = van.tags;

export default function PE_SubForm(recLive = null, cancelBtnCallback = null, saveBtnCallback = null) {
/*{
  "multiphoto_picker_1": [
    {
      "comment": "",
      "photo": "151844_4d51c7a9-5fe1-422b-b223-766da0890096_abcd7d3a-0ac0-4623-b4b7-12343f4c8bfe.jpg"
    },
    {
      "comment": "",
      "photo": "151844_4d51c7a9-5fe1-422b-b223-766da0890096_7ac68ab3-5fdb-42f9-a3ef-03dc6c51ecde.jpg"
    }
  ],
  "alpha_1": "bronco sport",
  "alpha_2": "CJZ8069",
}*/
console.log("Subform data:", recLive);
  if(!recLive || recLive == null || recLive == undefined) {
    console.log("No data provided to subform, using defaults");
    recLive = {
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

  const makeModelVal = van.state(recLive.alpha_1)
  const plateNumVal = van.state(recLive.alpha_2)
  //const imagesVal = van.state(recLive.multiphoto_picker_1)

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
          value: makeModelVal.val, onchange: e => makeModelVal.val = e.target.value //disabled: true
        },
        ),
      ),

      div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
        label("Plate Number:"),
        input({
          class: "", type: "text", style: "display: block; margin-bottom: 5px;",
          value: plateNumVal.val, onchange: e => plateNumVal.val = e.currentTarget.value.toUpperCase()
        },
        ),
      ),


      div({class: "buttonbox"},
        button({onclick: cancelBtnCallback, style: 'width: 100px;' },"Cancel"),
        button({onclick: () => {saveBtnCallback(returnData()); console.log(returnData(),)}, style: 'width: 100px;' },"Save"),
      ),  
    )
};


