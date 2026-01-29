const {input, li, option, select, span, ul} = van.tags

export default function SortedList() {
  const items = van.state("a,b,c"), sortedBy = van.state("Ascending")
  return span(
    // input({type: "text"}),
    // "Comma-separated list: ",
    input({oninput: e => items.val = e.target.value,
      type: "text", value: items.val}), " ",
    // select({oninput: e => sortedBy.val = e.target.value},
    //   option({selected: () => sortedBy.val === "Ascending", value: "Ascending"}, "Ascending"),
    //   option({selected: () => sortedBy.val === "Descending", value: "Descending"}, "Descending"),
    // ),
    // A State-derived child node
    () => sortedBy.val === "Ascending" ?
      ul(items.val.split(",").sort().map(i => li(i))) :
      ul(items.val.split(",").sort().reverse().map(i => li(i))),
  )
}