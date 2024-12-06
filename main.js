
let myDate = new Date(2025);

console.log(myDate.getFullYear());

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
let finishYear = new Date(2025, 0, 0);
let nowYear = new Date();

let diference = finishYear.getTime() - nowYear.getTime();

days.textContent = (diference / 1000 / 60 / 60 / 24).toFixed(0).toString().padStart(2, '0');
hours.textContent = ((diference / 1000 / 60 / 60) % 24).toFixed(0).toString().padStart(2, '0');
minutes.textContent = ((diference / 1000 / 60) % 60).toFixed(0).toString().padStart(2, '0');
seconds.textContent = ((diference / 1000) % 60).toFixed(0).toString().padStart(2, '0');
}, 1000)

