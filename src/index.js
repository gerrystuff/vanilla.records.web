import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { getRecords, createRecord, deleteRecord } from './app/services/records_service';
import { formatDate } from './app/utils/formats'

const htmlRecords = document.querySelector("#records");

let recordsList = [];

// Date.prototype.toDateInputValue = (function() {
//     var local = new Date(this);
//     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
//     return local.toJSON().slice(0, 10);
// });

// document.getElementById('datePicker').value = new Date().toDateInputValue();


getRecords().then(records => {

    recordsList = records;

    console.log(recordsList);


    for (let i = 0; i < records.length; i++) {

        const date = formatDate(records[i].createdAt)
        console.log(date);

        const card = `
        <div class="card text-center">
        <div class="card-body">
            <h5 class="card-title" style="color:green">${date}</h5>
            <h6 class="card-subtitle mb-2 " style="color:white;">Total km: ${recordsList[i].km}</h6>
            <legend style="color: white;">${recordsList[i].record}</legend>
            <img class="trash-icon" id="${recordsList[i].id}" value="20" src="./assets/images/trash.svg" alt="">
            
        </div>
    </div>
        `


        let tempDiv = document.createElement('div');

        tempDiv.innerHTML = card;


        htmlRecords.appendChild(tempDiv);


        //Funcion para eliminar el record seleccionado

        $(`#${recordsList[i].id}`).on("click", function(event) {
            deleteRecord(recordsList[i].id);
            document.location.reload();
        });

    }







})



document.getElementById("form-btn").addEventListener("click", async function(event) {

    event.preventDefault();

    const km = document.getElementById("km").value;
    const record = document.getElementById("record").value;
    const datePicker = document.getElementById("datePicker").value;

    const spin = document.getElementById("customspinner");
    const alert = document.getElementById("alert");


    if (km < 1 || record < 1) {
        console.log(km, '::', record.length)
        const warning = `Ingrese valores`;
        alert.innerHTML = warning;
        return;
    }


    spin.classList.add("spinner-border");
    spin.classList.add("text-light");

    const tempRecord = {
        "record": record,
        "km": km,
        "createdAt": datePicker
    };

    console.log(tempRecord);


    await createRecord(tempRecord).then(async(ok) => {

        if (ok) {
            const warning = `Record creado con exito.`;
            alert.innerHTML = warning;

            spin.classList.remove("spinner-border");
            spin.classList.remove("text-light");

            await delay(1500);
            document.location.reload();

        } else {
            const warning = `Error en el servidor.`;
            alert.innerHTML = warning;

            spin.classList.remove("spinner-border");
            spin.classList.remove("text-light");
        }

        document.querySelector("form").reset();

    });

})

const delay = ms => new Promise(res => setTimeout(res, ms));