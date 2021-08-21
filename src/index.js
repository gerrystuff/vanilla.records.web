import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fn } from './js/scripts';



const btn = document.getElementById("#btn");
const label = document.getElementById('#label');

btn.addEventListener("click", function(event) {
    event.preventDefault();

    label.innerHTML = fn();

});