const {label, div, button, input,p,hr,span,select,option,article,summary} = van.tags;

export default async function fftest () {

  const ffun = van.state("")
  const ffpwd = van.state("")

  const load = async () => {

//Authorization: Basic 
// FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038

// try {
//  let response = await fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
//     method: 'POST',
//     headers: {
//       content: "application/json",

//       Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
//       'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038',      
//     },
//     body: JSON.stringify({

//     })
//   });
//   let data = await response.json();
// alert(data)

// }
// catch (err) {
//   alert(err)
// }

    await fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
      method: 'POST',
      headers: {
        content: "application/json",
        //Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
        'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038',
      },
      body: JSON.stringify({

      })
    })
    .then(function (response) {
      if (!response.ok) {
        console.log('Network response was not ok', response.status, response.statusText);
        //throw new Error('Network response was not ok');
      }
      // response.json() returns another promise
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
    })
    .catch(function (error) {
      console.error('There has been a problem with your fetch operation:', error);
    });

 
  // let data
  // try {
  //   const response = await axios({
  //     url: "https://api.fastfieldforms.com/services/v3/authenticate",
  //     method: "POST",
  //     headers: {
  //       Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
  //       "FastFieldAPI-Key": "FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038",
  //       content: "application/json",
  //     },
  //     // data: recObj,
  //     timeout: 15000,
  //     withCredentials: true,
  //   })
  //   data = response.data
  // } catch (err) {
  //   if (err?.message?.includes("Network Error")) {
  //     throw new Error("CORS or network error: ensure the API allows your origin or use a server-side proxy.")
  //   }
  //   if (err?.response) {
  //     throw new Error(`FastField ${err.response.status}: ${err.response.data?.message || err.response.statusText}`)
  //   }
  //   throw err
  // }

  


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


//https://app.requestly.io/rules/editor/edit/Script_hklf6
/* <script type="text/javascript">
    fetch(`https://api.fastfieldforms.com/services/v3/authenticate`, {
      method: 'POST',
      headers: {
        content: "application/json",
        Authorization: `Basic A==`,
        //Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
        'FastField-API-Key': 'FF-d3015e0740286416e02921e39f6dd0e6_0_d962f8f2647c270840b8c9dcabb71038',
      },
      body: JSON.stringify({

      })
    })
      .then(function (response) {
        if (!response.ok) {
          console.log('Network response was not ok', response.status, response.statusText);
          //throw new Error('Network response was not ok');
        }
        // response.json() returns another promise
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
      })
      .catch(function (error) {
        console.error('There has been a problem with your fetch operation:', error);
      });
	console.log("Hello World");
</script> */