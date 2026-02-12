const {label, div, button, input,p,hr,span,select,option,article,summary} = van.tags;

export default async function fftest () {

  const ffun = van.state("")
  const ffpwd = van.state("")

  const load = async () => {
  var data = {}

////////////////////////// AWAIT //////////////////////////////////    
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

/////////////////////////// THEN /////////////////////////////////////////
    console.log(`Basic ${loadx(ffun.val, ffpwd.val)}`)
    await fetch(`https://test.cors.workers.dev/?https://api.fastfieldforms.com/services/v3/authenticate`, {
      //referrerPolicy: 'no-referrer-when-downgrade',
      credentials: "include",
      method: 'POST',
      headers: {
        content: "application/json", "Cache-Control": "no-cache",
        Authorization: `Basic ${loadx(ffun.val, ffpwd.val)}`,
        'FastField-API-Key': '1a9ea71e79ab459d825f562f8aa4188d', // primary
        //'FastField-API-Key': '22b602553cce45f8a9b5ba840e1d299e', // secondary
      },
      body: JSON.stringify({

      })
    })
    .then(function (response) {
      if (!response.ok) {
        console.log('Network response was not ok', response.status, response.statusText, response.text());
        //throw new Error('Network response was not ok');
      }
      // response.json() returns another promise
      return response.json();
    })
    .then(function (jsonData) {
      data = jsonData
      console.log(jsonData);
      // localStorage.setItem('username', 'JohnDoe');
      // const username = localStorage.getItem('username'); // 'JohnDoe'
      // localStorage.removeItem('username');
      // localStorage.clear();
      // localStorage.key(index): Retrieves the name of the key at a specified index, useful for looping through all stored items. 
    })
    .catch(function (error) {
      console.error('There has been a problem with your fetch operation:', error);
    });


//////////////////////// AXIOS ////////////////////////////////////
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

