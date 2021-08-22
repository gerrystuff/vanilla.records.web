import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getRecords, createRecord } from './app/services/records_service';
import { formatDate } from './app/utils/formats'

const htmlRecords = document.querySelector("#records");

getRecords().then(records => {

    for (let i = 0; i < records.length; i++) {

        const date = formatDate(records[i].createdAt)

        const card = `
        <div class="card text-center">
        <div class="card-body">
            <h5 class="card-title" style="color:green">${date}</h5>
            <h6 class="card-subtitle mb-2 " style="color:white;">Total km: ${records[i].km}</h6>
            <legend style="color: white;">${records[i].record}</legend>
        </div>
    </div>
        `


        let tempDiv = document.createElement('div');

        tempDiv.innerHTML = card;


        htmlRecords.appendChild(tempDiv);


    }





})

document.getElementById("form-btn").addEventListener("click", async function(event) {

    event.preventDefault();

    const km = document.getElementById("km").value;
    const record = document.getElementById("record").value;
    const spin = document.getElementById("customspinner");
    const alert = document.getElementById("alert");


    if (km.length < 1 || record.length < 1) {
        console.log(km.length, '::', record.length)
        const warning = `Ingrese valores`;
        alert.innerHTML = warning;
        return;
    }


    spin.classList.add("spinner-border");
    spin.classList.add("text-light");

    const tempRecord = {
        "record": record,
        "km": km
    };


    // const save = await createRecord(tempRecord);
    await createRecord(tempRecord).then((ok) => {

        if (ok) {
            const warning = `Record creado con exito.`;
            alert.innerHTML = warning;

            spin.classList.remove("spinner-border");
            spin.classList.remove("text-light");

        } else {
            const warning = `Error en el servidor.`;
            alert.innerHTML = warning;

            spin.classList.remove("spinner-border");
            spin.classList.remove("text-light");
        }

        document.querySelector("form").reset();

    });

    // console.log('what', save);


    // if (save) {
    //     const warning = `Record creado con exito.`;
    //     alert.innerHTML = warning;

    //     spin.classList.remove("spinner-border");
    //     spin.classList.remove("text-light");


    // } else {
    //     const warning = `Error en el servidor.`;
    //     alert.innerHTML = warning;

    //     spin.classList.remove("spinner-border");
    //     spin.classList.remove("text-light");
    // }

})