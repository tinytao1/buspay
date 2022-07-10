
let rate = 0; 
let hours = 0;
let minutes = 0;
let minutesConversion = 0;
let fractionHour = 0;
let time = 0;
let pay = 0;

let overtime = 0;
let overtimeRate = 0;
let overtimePay = 0;

let straightTime = 0;
let straightTimePay = 0;
let straightPlusOvertimePay = 0;

let allOvertimePay = 0;

let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");
let li5 = document.getElementById("li5");
let li6 = document.getElementById("li6");
let li7 = document.getElementById("li7");
let li8 = document.getElementById("li8");
let li9 = document.getElementById("li9");

let allOTBtn = document.getElementById("allOvertimeButton");
let goBtn = document.getElementById("goBtn")

function calculatePay() {
    allOTBtn.style.backgroundColor = "rgb(242, 242, 242)";
    allOTBtn.style.border = "2px solid rgb(128, 128, 128)";
    allOTBtn.style.color = "black";
    goBtn.style.backgroundColor = "rgb(140, 217, 175)";
    goBtn.style.border = "solid 2px rgb(64, 191, 121)";

    rate = document.getElementById("rateInputEl").value;
    rate = parseFloat(rate);
    if (isNaN(rate)) rate = 0;
    hours = document.getElementById("hoursInputEl").value;
    hours = parseFloat(hours);
    if (isNaN(hours)) hours = 0;
    minutes = document.getElementById("minutesInputEl").value;
    minutes = parseFloat(minutes);
    if (isNaN(minutes)) minutes = 0;
    time = hours + (minutes / 60);
    pay = rate * time;

    if (time === 0) {document.getElementById("showPayEl").innerHTML = "$" + pay.toFixed(2); return;}
    else if (time <= 40) {
        fractionHour = minutes / 60;
        document.getElementById("showPayEl").innerHTML = "$" + pay.toFixed(2);
        li1.innerHTML = minutes + " minutes " + "/" + " 60 = " + fractionHour.toFixed(4) + " of an hour.";
        li2.innerHTML =  time.toFixed(4) + " hours, multiplied by $" + rate.toFixed(2) + " = $" + pay.toFixed(4);
        li1.style.display = "list-item";
        li1.style.listStyle="disc";
        li2.style.display = "list-item";

        li3.style.display = "none";
        li4.style.display = "none";
        li5.style.display = "none";
        li6.style.display = "none";
        li7.style.display = "none";
        li8.style.display = "none";
        li9.style.display = "none";
}
    else {
        fractionHour = minutes / 60;
        overtime = time - 40;
        overtimeRate = rate * 1.5;
        straightTime = 40;

        straightTimePay = straightTime * rate;

        overtimePay = overtime * overtimeRate; //good
 
        straightPlusOvertimePay = straightTimePay + overtimePay; //good

        document.getElementById("showPayEl").innerHTML = "$" + straightPlusOvertimePay.toFixed(2); //good

        li1.style.display = "list-item";
        li1.style.listStyle="disc";
        li1.innerHTML = "<b>Straight time:</b>" + " $" + straightTimePay.toFixed(2);

        li2.style.display = "list-item";
        li2.innerHTML = "<b>Overtime:</b>" + " $" + overtimePay.toFixed(2);

        li3.style.display = "list-item";
        li3.innerHTML = minutes + " minutes " + "/" + " 60 = " + fractionHour.toFixed(4) + " of an hour.";

        li4.style.display = "list-item";
        li4.innerHTML = time.toFixed(4) + " hours - 40 = " + overtime.toFixed(4) + " hours of overtime.";

        li5.style.display = "list-item";
        li5.innerHTML = 40 + " hours multiplied by $" + rate.toFixed(2) + " = $" + straightTimePay.toFixed(2);

        li6.style.display = "list-item";
        li6.innerHTML = "$" + rate.toFixed(2) + " /hour straight time<br>multiplied by 1.5 = <br>$" + overtimeRate.toFixed(4) + " /hour overtime rate.";

        li7.style.display = "list-item";
        li7.innerHTML = overtime.toFixed(4) + " hours multiplied by $" + overtimeRate.toFixed(4) + " = $" + overtimePay.toFixed(4);

        li8.style.display = "list-item";
        li8.innerHTML = "$" + straightTimePay.toFixed(2) + " + $" + overtimePay.toFixed(2) + " = $" + straightPlusOvertimePay.toFixed(2);
    }
}

function allOvertime() {
    allOTBtn.style.backgroundColor = "rgb(255, 153, 153)";
    allOTBtn.style.border = "2px solid rgb(128, 0, 0)";
    allOTBtn.style.color = "rgb(128, 0, 0)";
    goBtn.style.backgroundColor = "rgb(242, 242, 242)";
    goBtn.style.border = "solid 2px rgb(128, 128, 128)";

    rate = document.getElementById("rateInputEl").value;
    rate = parseFloat(rate);
    if (isNaN(rate)) rate = 0;
    hours = document.getElementById("hoursInputEl").value;
    hours = parseFloat(hours);
    if (isNaN(hours)) hours = 0;
    minutes = document.getElementById("minutesInputEl").value;
    minutes = parseFloat(minutes);
    if (isNaN(minutes)) minutes = 0;
    time = hours + (minutes / 60);
    pay = rate * time;

    fractionHour = minutes / 60; 
    overtimeRate = rate * 1.5;
    allOvertimePay = time * overtimeRate;

    document.getElementById("showPayEl").innerHTML = "$" + allOvertimePay.toFixed(2);

    li1.innerHTML = "<b>All Overtime</b>";
    li1.style.display = "list-item";
    li1.style.listStyle = "none";


    li2.innerHTML = minutes + " minutes " + "/" + " 60 = " + fractionHour.toFixed(4) + " of an hour.";
    li2.style.display = "list-item";

    li3.innerHTML = "$" + rate.toFixed(2) + " /hour multiplied by 1.5 = <br>$" + overtimeRate.toFixed(4) + " /hour overtime rate.";
    li3.style.display = "list-item"

    li4.style.display = "list-item";
    li4.innerHTML = time.toFixed(4) + " hours, multiplied by $" + overtimeRate.toFixed(4) + " = $" + allOvertimePay.toFixed(4);

    li5.style.display = "none";
    li6.style.display = "none";
    li7.style.display = "none";
    li8.style.display = "none";
    li9.style.display = "none";
}



function theResetButtonActions() {
    ratesInsertIntoButtons(
    18.87, 19.94, 21.29, 22.91, 24.80, 26.95);
    document.getElementById("showPayEl").innerHTML = "$0";
    li1.style.display = "none";
    li2.style.display = "none";
    li3.style.display = "none";
    li4.style.display = "none";
    li5.style.display = "none";
    li6.style.display = "none";
    li7.style.display = "none";
    li8.style.display = "none";
    li9.style.display = "none";
    allOTBtn.style.backgroundColor = "rgb(242, 242, 242)";
    allOTBtn.style.border = "2px solid rgb(128, 128, 128)";
    allOTBtn.style.color = "black";
    goBtn.style.backgroundColor = "rgb(140, 217, 175)";
    goBtn.style.border = "solid 2px rgb(64, 191, 121)";
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








