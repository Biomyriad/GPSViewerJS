
const { img } = van.tags;

export default function MainTabs(children) {
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
  
  console.log(tabsBar)

  for(const tab of tabsBar.children) {
    console.log(tab.innerHTML)
    tab.replaceChildren()
    
    tab.appendChild(img({"src": "../images/home.svg", "style": "height: 60px; width: 200px",}))
  }

  test.removeChild(tabsBar)
  test.appendChild(tabsBar)
  return test
};