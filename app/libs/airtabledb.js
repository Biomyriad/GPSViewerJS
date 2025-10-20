var cloudDb = {}

cloudDb.base_host = "https://api.airtable.com/v0"
cloudDb.base_id = "apphuzAGCTF0tEtp4"//"appU9Tu1u6TzVrKnP"
cloudDb.tokenB64 = "patoXqL65Pc6L8c7j.01d6100deac10905bf6a41e139824d1f1cc1482264861f3bb09c373309b50e34"

// Rec obj example
      //////
//var reqData = {
//  records: [
//    {
//      fields: {
//        email: email,
//        timestamp: `${new Date().getTime()}`
//      }
//    }
//  ]
//}

cloudDb.token = () => {
  return cloudDb.tokenB64 //atob(cloudDb.tokenB64)
}

cloudDb.newRecObj = (keyValObj) => {
  var recObj = {fields: {}}
  let keys = Object.keys(keyValObj)
  
  keys.forEach((item) => {
    console.log(item + ' ' + keyValObj[item])
    recObj.fields[item] = keyValObj[item]
  })
  console.log(recObj)
  
}

cloudDb.getSchema = async () => {
  let retRecs = []
  try {

    let response = await fetch(`${cloudDb.base_host}/meta/bases/${cloudDb.base_id}/tables`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cloudDb.token()}`
      }
    });

    let data = await response.json();
    console.log(data)

    return data
  } catch (err) {
    console.log('AT error: ' + err)
    return false
  }
}

cloudDb.getAll = async (tableName, offsetId='',searchParams='') => {

  let retRecs = []
  try {

    let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/${tableName}?&${searchParams}&${offsetId}`, {
    
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cloudDb.token()}`
      }
    });
    let data = await response.json();
console.log(data)
    retRecs.push(...data.records)
    if(data.offset) retRecs.push(...await cloudDb.getAll(tableName, 'offset='+data.offset))
    console.log(retRecs)
    return retRecs
  } catch (err) {
    console.log('AT error: ' + err)
    return false
  }
}

cloudDb.getOne = async (recId, tableName) => {
  let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/${tableName}/`+recId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cloudDb.token()}`
    }
  });
  let data = await response.json();
  return data
}

cloudDb.new = async (recObj,tableName) => {
  let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/${tableName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cloudDb.token()}`
    },
    body: JSON.stringify(recObj)
  });
  let data = await response.json();
  return data
}

cloudDb.update = async (recId,recObj,tableName) => {
  let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/${tableName}/`+recId, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cloudDb.token()}`
    },
    body: JSON.stringify(recObj)
  });
  let data = await response.json();
  return data
}

cloudDb.delete = async (recId,tableName) => {
  let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/${tableName}/`+recId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cloudDb.token()}`
    }
  });
  let data = await response.json();
  return data
}

