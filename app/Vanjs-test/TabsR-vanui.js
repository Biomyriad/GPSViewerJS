export default function TabsR(...stuff) {
    //TODO: Look into stuff and check for tabButtonRowClass
    //IF not found assign random unique class and use to flip
    //IF found used assigned name to flip
  var test = Tabs(...stuff)
  var tabsBar = test.getElementsByClassName("XXXX")[0]
  test.removeChild(tabsBar)
  test.appendChild(tabsBar)
  return test
};