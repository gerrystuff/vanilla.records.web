const baseUrl = 'http://localhost:8080/api/records';



const tempRecord = {
    "record": "08:35:00",
    "km": 1
}


export const createRecord = async(record) => {


    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(record),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => console.log(res));
}


export const getRecords = async() => {


    let records;

    await fetch(baseUrl)
        .then(response => response.json())
        .then(data => {


            records = data.records;
        });



    return records;

};