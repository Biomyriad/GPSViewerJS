
const { img } = van.tags;

export default function MainTabs(labels, children) {
    //TODO: Look into stuff and check for tabButtonRowClass
    //IF not found assign random unique class and use to flip
    //IF found used assigned name to flip
  var test = Tabs({
      tabButtonRowClass: "XXXX",
      tabButtonClass: "YYYY",
      tabContentClass: "zzzz",
      tabButtonActiveColor: "grey",
      tabButtonBorderStyle: "none",
      style: `
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
      `,
      tabContentStyleOverrides: {
        "overflow-y": "auto",
        "position": "fixed",
        "top": "0",
        "height": "93%",
        "width": "100%",
      },
      tabButtonRowStyleOverrides: 
      {
        "position": "fixed",
        "bottom": "0",
        "height": "7%",
        "width": "100%",
        "padding-left": "12px", 
        "background-color": "#444444",
        "display": "flex",
        "align-items": "center",
        "justify-content": "space-around",
      },
    },    
    children)
  var tabsBar = test.getElementsByClassName("XXXX")[0]
  
  //console.log(tabsBar)
//const tab of tabsBar.children
Object.entries(labels).forEach((lab, index) => {
  const tab = tabsBar.children[index]
  const imgSrc = lab[1]
  const labelText = lab[0]  
  tab.replaceChildren()
  tab.appendChild(
    van.tags.div(
      van.tags.img({"src": `../images/${imgSrc}`, "style": "min-height: 30px; max-height: 65px;",}), 
      //van.tags.span({style: "color: white; font-size: 12px; margin-top: 2px;"}, labelText)
    ),
  )
})
  // for( const lab of labels) {
  //   console.log(lab)

  //   // tab.replaceChildren()
    
  //   // tab.appendChild(
  //   //   div(
  //   //     img({"src": `../images/${})`, "style": "height: 60px; width: 200px",}),
  //   //     span()
  //   //   ),
  //   // )
  // }

  test.removeChild(tabsBar)
  test.appendChild(tabsBar)
  return test
};