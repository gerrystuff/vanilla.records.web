const baseUrl = 'http://localhost:8080/api/records';



export async function createRecord(record) {

    return await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(record),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function(response) {
        if (response.ok) {

            return true;
        } else {
            return false;
        }
    });
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

export const deleteRecord = async(id) => {

    return await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            console.log(res);
            // document.location.reload();
        });
}