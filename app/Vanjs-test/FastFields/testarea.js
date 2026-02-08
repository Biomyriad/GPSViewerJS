const {label, div, button, input,p,hr,span,select,option,article,summary} = van.tags;

export default async function fftest () {

  const ffun = van.state("")
  const ffpwd = van.state("")

  const load = async () => {

//Authorization: Basic 
// FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038

// let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/${tableName}/`+recId, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${cloudDb.token()}`
    //   }
    // });
    // let data = await response.json();

  let response = await fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${loadx(ffun.val, ffpwd.val)}`,
      'FastFieldAPI-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038',
    },
    //body: JSON.stringify(recObj)
  });
  let data = await response.json();
  console.log(data)


    return div(JSON.stringify(data))
  }

  const loadx = (username, password) => {
    return btoa(username + ":" + password)
  }

  return div({style: "height: 100%;"},
    //await load(),
    div({style: "display: flex; gap: 10px; width: 100%;"},
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("UN:"),     
        input({class: "", id: "fftst-un", type: "text", style: "display: block; margin-bottom: 5px;",
              value: ffun.val, onchange: e => ffun.val = e.target.value},
        ),
      ),
      div({style: "position: relative; flex-grow: 1; flex-shrink: 1;"},
        label("PWD:"), 
        input({class: "", id: "fftst-pwd", type: "text", style: "display: block; margin-bottom: 5px;",
                value: ffpwd.val, onchange: e => ffpwd.val = e.target.value},
        ),
      ),
      input({type: "button", value: "Load Data", onclick: async (e) => await load(), style: "width: 110px;"}),
    ),

  );
};

