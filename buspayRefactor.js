let rate = 25.99;
let hours = 38;
let minutes = 19;
let fractionhour = minutes / 60;
let time = hours + fractionhour;
let pay = time * rate;

let overtimerate = rate * 1.5;
let overtime = time - 40;
let overtimepay = overtime * overtimerate;
let straighttimepay = rate * 40;

let straightplusoverpay = straighttimepay + overtimepay;

let li1 = document.getElementById("li1").innerHTML
let li2 = document.getElementById("li2").innerHTML
let li3 = document.getElementById("li3").innerHTML
let li4 = document.getElementById("li4").innerHTML
let li5 = document.getElementById("li5").innerHTML
let li6 = document.getElementById("li6").innerHTML


document.getElementById("rateEl").textContent = rate.toFixed(2);
document.getElementById("hoursEl").textContent = hours;
document.getElementById("minutesEl").textContent = minutes;


