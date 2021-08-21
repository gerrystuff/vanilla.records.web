import { fn } from './js/scripts';

import './index.css';

const btn = document.getElementById("#btn");
const label = document.getElementById('#label');

btn.addEventListener("click", function(event) {
    event.preventDefault();

    label.innerHTML = fn();

});