const { label, div, button, input, p, hr, span, select, option, article, summary } = van.tags;

export default async function fftest() {

  const ffun = van.state("")
  const ffpwd = van.state("")

  const load = async () => {
  //   var data = {}

  //   //  let res = await fetch(``, {
  //   //     method: 'POST',
  //   //     headers: {content: "application/json"}, body: JSON.stringify({})
  //   //   });//   let data = await res.json();

  //   /////////////////////////// /////////////////////////////////////////
  //   await fetch(``, {
  //     method: 'POST',
  //     headers: {
  //       content: "application/json",
  //       'Cache-Control': 'no-cache',
  //     },
  //   })
  //     .then(function (response) {
  //       if (!response.ok) {
  //         console.log('Network response was not ok', response.status, response.statusText);
  //         //throw new Error('Network response was not ok');
  //         return response
  //       } else {
  //         return response.json()
  //       }
  //     })
  //     .then(function (jsonData) {
  //       data = jsonData
  //       console.log(jsonData);
  //       // localStorage.setItem('username', 'JohnDoe');
  //       // const username = localStorage.getItem('username'); // 'JohnDoe'
  //       // localStorage.removeItem('username');
  //       // localStorage.clear();
  //       // localStorage.key(index): Retrieves the name of the key at a specified index, useful for looping through all stored items. 
  //     })
  //     .catch(function (error) {
  //       console.error('There has been a problem with your fetch operation:', error)
  //     });

  //   return div(JSON.stringify(data))

  console.log("starting load")
  var ffapi = new FastFieldsAPI()
  //await ffapi.authenticate(ffun.val, ffpwd.val)

  //await ffapi.updateLookupList()
  await ffapi.uploadMedia()


  }

  return div({ style: "height: 100%;" },
    div({ style: "display: flex; gap: 10px; width: 100%;" },
      div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
        label("UN:"),
        input({
          class: "", id: "fftst-un", type: "text", style: "display: block; margin-bottom: 5px;",
          value: ffun.val, onchange: e => ffun.val = e.target.value
        },
        ),
      ),
      div({ style: "position: relative; flex-grow: 1; flex-shrink: 1;" },
        label("PWD:"),
        input({
          class: "", id: "fftst-pwd", type: "text", style: "display: block; margin-bottom: 5px;",
          value: ffpwd.val, onchange: e => ffpwd.val = e.target.value
        },
        ),
      ),
      input({ type: "button", value: "Load Data", onclick: async (e) => await load(), style: "width: 110px;" }),
    )
  );
};






