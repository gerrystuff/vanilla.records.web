import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { recordsArray, getRecords } from './app/services/records_service';
import { formatDate } from './app/utils/formats'

const main = document.querySelector("main");

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

        main.appendChild(tempDiv);


    }

})