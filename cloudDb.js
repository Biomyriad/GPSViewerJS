var cloudDb = {}

cloudDb.base_host = "https://api.airtable.com/v0"
cloudDb.base_id = "apphuzAGCTF0tEtp4"//"appU9Tu1u6TzVrKnP"
cloudDb.tokenB64 = "patoXqL65Pc6L8c7j.01d6100deac10905bf6a41e139824d1f1cc1482264861f3bb09c373309b50e34"

//string filter = "IF(AND(IS_AFTER({Date and Time of Incident}, '" + StartFrom.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture) + "'), IS_BEFORE({Date and Time of Incident}, '" + EndTo.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture) + "')), 1, 0)";
//string filter = "IF(AND(IS_AFTER({Date and Time of Incident}, '" + "yyyy-MM-dd" + "'), IS_BEFORE({Date and Time of Incident}, '" + "yyyy-MM-dd" + "')), 1, 0)";

// searchParams.filterByFormula = "IF(AND(IS_AFTER({Date and Time of Incident}, '" +
            // `${startTimeStamp.getFullYear()}-${startTimeStamp.getMonth()+1}-${startTimeStamp.getDate()}` + 
            // "'), IS_BEFORE({Date and Time of Incident}, '" + 
            // `${endTimeStamp.getFullYear()}-${endTimeStamp.getMonth()+1}-${endTimeStamp.getDate()+1}` + 
            // "')), 1, 0)";
// searchParams.sort = [{field: "Date and Time of Incident", direction: "asc"}]

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
    //console.log(data)

    return data
  } catch (err) {
    console.log('AT error: ' + err)
    return false
  }
}

cloudDb.getIncidentByDateRange= async (startTimeStamp, endTimeStamp) => {
  let retRecs = [], offsetId
  startTimeStamp.setHours(20)
  startTimeStamp.setMinutes(30)
  endTimeStamp.setHours(7)
  endTimeStamp.setMinutes(0)

  let atFilter =  'filterByFormula=IF(AND(IS_AFTER({Date and Time of Incident},"' +
                  `${startTimeStamp.getFullYear()}-${startTimeStamp.getMonth()+1}-${startTimeStamp.getDate()}` + 
                  '"),IS_BEFORE({Date and Time of Incident},"' + 
                  `${endTimeStamp.getFullYear()}-${endTimeStamp.getMonth()+1}-${endTimeStamp.getDate()+1}` + 
                  '")),1,0)'

  let atSort = `&sort[0][field]=Date+and+Time+of+Incident&sort[0][direction]=asc`

  let atEncodedParams = encodeURI(atFilter+atSort)
  //console.log(atFilter+atSort)
  //return

  try {
    let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/incident%20reports%20and%20observations?&${atEncodedParams}&pageSize=${offsetId}`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cloudDb.token()}`
      }
    });
    let data = await response.json();
    
    retRecs.push(...data.records)
    if(data.offset) retRecs.push(...await cloudDb.getAll('&offset='+data.offset))

    const filteredData = retRecs.filter(item => {
      const itemDate = new Date(item.fields['Date and Time of Incident']);
      return itemDate >= startTimeStamp && itemDate <= endTimeStamp;
    });

    return filteredData
  } catch (err) {
    console.log('AT error: ' + err)
    return false
  }
}

cloudDb.getAll = async (tableName, offsetId='') => {
  let retRecs = []
  try {

    let response = await fetch(`${cloudDb.base_host}/${cloudDb.base_id}/${tableName}?pageSize=${offsetId}`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cloudDb.token()}`
      }
    });
    let data = await response.json();
    
    retRecs.push(...data.records)
    if(data.offset) retRecs.push(...await cloudDb.getAll(tableName, '&offset='+data.offset))

    //var currentUpdate = null
    //data.records.forEach(rec => {
    //  if (rec.fields.current) {
    //    currentUpdate = rec.fields
    //  }
    //});
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

