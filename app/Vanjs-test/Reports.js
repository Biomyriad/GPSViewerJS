const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

export default function Reports() {

  return div({class: "container", style: "margin-top: 50px;"},
    div({style: "display: flex; justify-content: space-around; align-items: center; margin-bottom: 40px;"},
        button({onclick: dateNav},"<-"),
        input({id:"shift-date", type:"date", style:"width: 150px; margin: 0;"}),
        button({onclick: dateNav2},"->"),
    ),

    hr(
        span("Filter by route"),
        select({id:"filterbyroute"},
            option({value:"none"},"No Filter"),
            option({value:"South Route"},"South Route"),
            option({value:"NE Route"},"NE Route"),
        )
    ),

    article({id:"recordslist"},
        summary({"aria-busy":"true"})
    ),

    div({id: "out"})
  )
};