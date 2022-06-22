



let rate;



function theResetButtonActions(){
    ratesInsertIntoButtons(
    18.87, 19.94, 21.29, 22.91, 24.80, 26.95);
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








