let rate = 25.99;
let hours = 61;
let minutes = 19;
let fractionhour = minutes / 60;
let time = hours + fractionhour;

let pay = time * rate;

let overtimerate = rate * 1.5;

let overtimepay = time * overtimerate;

let overtime = time - 40;

let straighttimepay = rate * 40;

let overtimepayover40hours = overtime * overtimerate;

let payover40hours = straighttimepay + overtimepayover40hours;

document.getElementById("rateEl").textContent = rate.toFixed(2);

document.getElementById("hoursEl").textContent = hours;

document.getElementById("minutesEl").textContent = minutes;


