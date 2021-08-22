import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getRecords, createRecord } from './app/services/records_service';
import { formatDate, serializeForm } from './app/utils/formats'

const htmlRecords = document.querySelector("#records");

getRecords().then(records => {

    for (let i = 0; i < records.length; i++) {

        const date = formatDate(records[i].createdAt)

        const card = `
        <div class="card text-center" style="width: 10rem;">
        <div class="card-body">
            <h5 class="card-title">${date}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Total km: ${records[i].km}</h6>
            <legend style="color: red;">${records[i].record}</legend>
        </div>
    </div>
        `


        let tempDiv = document.createElement('div');

        tempDiv.innerHTML = card;


        htmlRecords.appendChild(tempDiv);


    }




    // setRecordsForm();

})

document.getElementById("form-btn").addEventListener("click", function(event) {

    event.preventDefault();
    const km = document.getElementById("km").value;
    const record = document.getElementById("record").value;

    const tempRecord = {
        "record": record,
        "km": km
    };


    createRecord(tempRecord);





})