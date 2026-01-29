import Alt from "./ReportsAlt.js";
const { div, button, input, p, hr, span, select, option, article, summary } = van.tags;

export default async function Reports() {


  const dateNavBack = () => {
    let shiftDate = document.getElementById('shift-date')
    shiftDate.value = dataBase.subDays(new Date(shiftDate.value), 1).toLocaleDateString('en-CA')
    shiftDate.dispatchEvent(new Event('change'))
  }
  const dateNavForward = () => {
    let shiftDate = document.getElementById('shift-date')
    shiftDate.value = dataBase.addDays(new Date(shiftDate.value), 2).toLocaleDateString('en-CA')
    shiftDate.dispatchEvent(new Event('change'))
  }

  return div({ class: "container", style: "margin-top: 50px;" },
    div({ style: "display: flex; justify-content: space-around; align-items: center; margin-bottom: 40px;" },
      button({ onclick: dateNavBack }, "<-"),

      input({ id: "shift-date",
              value: new Date().toLocaleDateString('en-CA'),
              type: "date",
              style: "width: 150px; margin: 0;",
              onchange: async (e) => {await load(dataBase.addDays(new Date(e.currentTarget.value),1))}
            }),
      button({ onclick: dateNavForward }, "->"),
    ),

    hr(),
    span("Filter by route"),
    select({ id: "filterbyroute" },
      option({ value: "none" }, "No Filter"),
      option({ value: "South Route" }, "South Route"),
      option({ value: "NE Route" }, "NE Route"),
    ),

    article({ id: "recordslist" },
      summary({ "aria-busy": "true" }, span("Mand"),
				Alt(),
      ),
    ),
  )

}