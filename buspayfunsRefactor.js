
let rate = 0; 
let hours = 0;
let minutes = 0;
let minutesConversion = 0;
let fractionHour = 0;
let time = 0;
let pay = 0;


function calculatePay() {
    rate = document.getElementById("rateInputEl").value;
    rate = parseFloat(rate);
    hours = document.getElementById("hoursInputEl").value;
    hours = parseFloat(hours);
    if (isNaN(hours)) hours = 0;
    minutes = document.getElementById("minutesInputEl").value;
    minutes = parseFloat(minutes);
    if (isNaN(minutes)) minutes = 0;
    time = hours + (minutes / 60);
    pay = rate * time;

    // if (isNaN(pay)) pay = 
    document.getElementById("showPayEl").textContent = "$" + pay.toFixed(2);

    //alert(minutes);
 }

/*

minutesConversion = minutes / 60;
    fractionHour = minutesConversion.toFixed(5);
    fractionHour = parseFloat(fractionHour);

function calculatePay() {
    let grabRate = document.getElementById("rateInputEl").value // grab rate
    grabRate = parseFloat(grabRate);          // convert rate string to number
    rate = grabRate;                        // insert numb val into "rate"

    let grabHours = document.getElementById("hoursInputEl").value // grab hours
    grabHours = parseFloat(grabHours);          // convert hours string to number
    hours = grabHours;                        // insert numb val into "hours"

    let grabMinutes = document.getElementById("minutesInputEl").value // grab minutes
    grabMinutes = parseFloat(grabMinutes);          // convert minutes string to number
    minutes = grabMinutes;                        // insert numb val into "minutes"

    let showPay = document.getElementById("showPayEl");

    // if (rate < 1) {showPay.innerHTML = " - rate is zero -"};


    // document.getElementById("showPayEl").innerHTML= "$" + pay.toFixed(2);
    
}
*/


let overtimerate = rate * 1.5;
let overtime = time - 40;
let overtimepay = overtime * overtimerate;
let straighttimepay = rate * 40;

let straightplusoverpay = straighttimepay + overtimepay;

// document.getElementById("rateEl").textContent = rate.toFixed(2);
// document.getElementById("hoursEl").textContent = hours;
// document.getElementById("minutesEl").textContent = minutes;

let li1 = document.getElementById("li1").innerHTML
let li2 = document.getElementById("li2").innerHTML
let li3 = document.getElementById("li3").innerHTML
let li4 = document.getElementById("li4").innerHTML
let li5 = document.getElementById("li5").innerHTML
let li6 = document.getElementById("li6").innerHTML









function theResetButtonActions() {
    ratesInsertIntoButtons(
    18.87, 19.94, 21.29, 22.91, 24.80, 26.95);
    document.getElementById("showPayEl").innerHTML = "$0";
}

function onloadratesInsertIntoButtons() {
    ratesInsertIntoButtons(
    18.87, 19.94, 21.29, 22.91, 24.80, 26.95);
}

function ratesInsertIntoButtons(
    rate1, rate2, rate3, rate4, rate5, rate6) {
    document.getElementById("step1Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step2Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step3Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step4Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step5Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step6Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step1Button").style.border = "2px solid rgb(128, 128, 128)";  // grey
    document.getElementById("step2Button").style.border = "2px solid rgb(128, 128, 128)";  // grey
    document.getElementById("step3Button").style.border = "2px solid rgb(128, 128, 128)";  // grey
    document.getElementById("step4Button").style.border = "2px solid rgb(128, 128, 128)";  // grey
    document.getElementById("step5Button").style.border = "2px solid rgb(128, 128, 128)";  // grey
    document.getElementById("step6Button").style.border = "2px solid rgb(128, 128, 128)";  // grey
    document.getElementById("step1Button").value = "$" + rate1.toFixed(2);
    document.getElementById("step2Button").value = "$" + rate2.toFixed(2);
    document.getElementById("step3Button").value = "$" + rate3.toFixed(2);
    document.getElementById("step4Button").value = "$" + rate4.toFixed(2);
    document.getElementById("step5Button").value = "$" + rate5.toFixed(2);
    document.getElementById("step6Button").value = "$" + rate6.toFixed(2);
}

function selectStep1() {
    let buttonValue = document.getElementById("step1Button").value;  // Remove "$" in front button value string.
    buttonValue = buttonValue.slice(1);
    document.getElementById("rateInputEl").value = buttonValue;     // x-fer value to rate Input Element.
    document.getElementById("step1Button").style.border = 
                            "2px solid blue";                       // style the rate button
    document.getElementById("step1Button").style.backgroundColor = 
                            "rgb(255, 219, 153)";                   // style the rate button = lighter-than-moccasin by 2 shades
    document.getElementById("step2Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step3Button").style.backgroundColor = "rgb(242, 242, 242)"; // un-style the other rate buttons // light grey
    document.getElementById("step4Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step5Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step6Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step2Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step3Button").style.border = "2px solid rgb(128, 128, 128)"; // un-style the other rate buttons 
    document.getElementById("step4Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step5Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step6Button").style.border = "2px solid rgb(128, 128, 128)";
}

function selectStep2() {
    let buttonValue = document.getElementById("step2Button").value;  // Remove "$" in front button value string.
    buttonValue = buttonValue.slice(1);
    document.getElementById("rateInputEl").value = buttonValue;     // x-fer value to rate Input Element.
    document.getElementById("step2Button").style.border = 
                            "2px solid blue";                       // style the rate button
    document.getElementById("step2Button").style.backgroundColor = 
                            "rgb(255, 219, 153)";                   // style the rate button = lighter-than-moccasin by 2 shades
    document.getElementById("step1Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step3Button").style.backgroundColor = "rgb(242, 242, 242)"; // un-style the other rate buttons // light grey
    document.getElementById("step4Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step5Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step6Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step1Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step3Button").style.border = "2px solid rgb(128, 128, 128)"; // un-style the other rate buttons 
    document.getElementById("step4Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step5Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step6Button").style.border = "2px solid rgb(128, 128, 128)";
}

function selectStep3() {
    let buttonValue = document.getElementById("step3Button").value;  // Remove "$" in front button value string.
    buttonValue = buttonValue.slice(1);
    document.getElementById("rateInputEl").value = buttonValue;     // x-fer value to rate Input Element.
    document.getElementById("step3Button").style.border = 
                            "2px solid blue";                       // style the rate button
    document.getElementById("step3Button").style.backgroundColor = 
                            "rgb(255, 219, 153)";                   // style the rate button = lighter-than-moccasin by 2 shades
    document.getElementById("step2Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step1Button").style.backgroundColor = "rgb(242, 242, 242)"; // un-style the other rate buttons // light grey
    document.getElementById("step4Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step5Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step6Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step2Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step1Button").style.border = "2px solid rgb(128, 128, 128)"; // un-style the other rate buttons 
    document.getElementById("step4Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step5Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step6Button").style.border = "2px solid rgb(128, 128, 128)";
}

function selectStep4() {
    let buttonValue = document.getElementById("step4Button").value;  // Remove "$" in front button value string.
    buttonValue = buttonValue.slice(1);
    document.getElementById("rateInputEl").value = buttonValue;     // x-fer value to rate Input Element.
    document.getElementById("step4Button").style.border = 
                            "2px solid blue";                       // style the rate button
    document.getElementById("step4Button").style.backgroundColor = 
                            "rgb(255, 219, 153)";                   // style the rate button = lighter-than-moccasin by 2 shades
    document.getElementById("step2Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step3Button").style.backgroundColor = "rgb(242, 242, 242)"; // un-style the other rate buttons // light grey
    document.getElementById("step1Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step5Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step6Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step2Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step3Button").style.border = "2px solid rgb(128, 128, 128)"; // un-style the other rate buttons 
    document.getElementById("step1Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step5Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step6Button").style.border = "2px solid rgb(128, 128, 128)";
}

function selectStep5() {
    let buttonValue = document.getElementById("step5Button").value;  // Remove "$" in front button value string.
    buttonValue = buttonValue.slice(1);
    document.getElementById("rateInputEl").value = buttonValue;     // x-fer value to rate Input Element.
    document.getElementById("step5Button").style.border = 
                            "2px solid blue";                       // style the rate button
    document.getElementById("step5Button").style.backgroundColor = 
                            "rgb(255, 219, 153)";                   // style the rate button = lighter-than-moccasin by 2 shades
    document.getElementById("step2Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step3Button").style.backgroundColor = "rgb(242, 242, 242)"; // un-style the other rate buttons // light grey
    document.getElementById("step4Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step1Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step6Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step2Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step3Button").style.border = "2px solid rgb(128, 128, 128)"; // un-style the other rate buttons 
    document.getElementById("step4Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step1Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step6Button").style.border = "2px solid rgb(128, 128, 128)";
}

function selectStep6() {
    let buttonValue = document.getElementById("step6Button").value;  // Remove "$" in front button value string.
    buttonValue = buttonValue.slice(1);
    document.getElementById("rateInputEl").value = buttonValue;     // x-fer value to rate Input Element.
    document.getElementById("step6Button").style.border = 
                            "2px solid blue";                       // style the rate button
    document.getElementById("step6Button").style.backgroundColor = 
                            "rgb(255, 219, 153)";                   // style the rate button = lighter-than-moccasin by 2 shades
    document.getElementById("step2Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step3Button").style.backgroundColor = "rgb(242, 242, 242)"; // un-style the other rate buttons // light grey
    document.getElementById("step4Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step5Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step1Button").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("step2Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step3Button").style.border = "2px solid rgb(128, 128, 128)"; // un-style the other rate buttons 
    document.getElementById("step4Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step5Button").style.border = "2px solid rgb(128, 128, 128)";
    document.getElementById("step1Button").style.border = "2px solid rgb(128, 128, 128)";
}








