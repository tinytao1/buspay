



let rate;



/*
function selectRateButton(buttonId, id2, id3, id4, id5, id6) {
    style_selectedRateButton("buttonId");                   // style the rate button
    unstyle_unselectedRateButtons(id2, id3, id4, id5, id6);  // un-style the other rate buttons
    // x-fer value to rateInputEl
}

function style_selectedRateButton(id1) {
    document.getElementById("id1").style.border = "2px solid blue";
    document.getElementById("id1").style.backgroundColor = "rgb(255, 219, 153)"; // lighter-than-moccasin by 2 shades
}
function unstyle_unselectedRateButtons(id2, id3, id4, id5, id6) {
    document.getElementById("id1").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("id2").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("id3").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("id4").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("id5").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("id6").style.backgroundColor = "rgb(242, 242, 242)"; // light grey
    document.getElementById("id2").style.border = "1px solid black";
    document.getElementById("id2").style.border = "1px solid black";
    document.getElementById("id3").style.border = "1px solid black";
    document.getElementById("id4").style.border = "1px solid black";
    document.getElementById("id5").style.border = "1px solid black";
    document.getElementById("id6").style.border = "1px solid black";
}


function selectRateButtonTrial(step1, ) {
    rate = step1;                                           // set the rate variable value.
    document.getElementById("rateInputEl").value = step1;   // insert rate into display input rate.
    style_selectedRateButton("step1ButtonEl");        // style the rate button element.
    //style_unselectedRateButton("step6el")       // undo styling for unselected buttons.
}

*/

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







/*

    document.getElementById("step1Button").value = "$" + rate1.toFixed(2);
    document.getElementById("step2Button").value = "$" + rate2.toFixed(2);
    document.getElementById("step3Button").value = "$" + rate3.toFixed(2);
    document.getElementById("step4Button").value = "$" + rate4.toFixed(2);
    document.getElementById("step5Button").value = "$" + rate5.toFixed(2);
    document.getElementById("step6Button").value = "$" + rate6.toFixed(2);

    document.getElementById("step1Button").value = rate1.toFixed(2);
    document.getElementById("step2Button").value = rate2.toFixed(2);
    document.getElementById("step3Button").value = rate3.toFixed(2);
    document.getElementById("step4Button").value = rate4.toFixed(2);
    document.getElementById("step5Button").value = rate5.toFixed(2);
    document.getElementById("step6Button").value = rate6.toFixed(2);
}

// function go() {
    // Grab user inputs for rate, hours, and minutes.
    rate = document.getElementById("rateinput").value;
    hours = document.getElementById("hoursinput").value;
    minutes = document.getElementById("minutesinput").value;
    rate = parseFloat(rate)
    hours = parseFloat(hours)
    minutes = parseFloat(minutes)
    document.getElementById("payEl").innerHTML = "$" + pay.toFixed(2);
    // alert(minutes + " " + rate + " " hours);
        // Show the pay.


    //if (time < 40) {
        //
        //
       // document.getElementById("payEl").innerHTML = "$" + pay.toFixed(2);
      //alert(rate);
      //
      // }
}

//function reet() {
    document.getElementById("payEl").textContent = "$0.00"

}


/*



       document.getElementById("li1").innerHTML =
       minutes + " minutes " + "/" + " 60 = " + fractionhour.toFixed(4) + " of an hour.";

       document.getElementById("li2").innerHTML =
       time.toFixed(2) + " hours, multiplied by $" + rate + " = $" + pay.toFixed(2);

       document.getElementById("li1").style.display = "list-item";
       document.getElementById("li2").style.display = "list-item";

       document.getElementById("li3").innerHTML = "";
       document.getElementById("li4").innerHTML = "";
       document.getElementById("li5").innerHTML = "";
       document.getElementById("li6").innerHTML = "";

    document.getElementById("li1").style.listStyleType = "disc";
    document.getElementById("li1").style.paddingLeft = "initial";

        document.getElementById("li3").style.display = "none";
    document.getElementById("li4").style.display = "none";
    document.getElementById("li5").style.display = "none";
    document.getElementById("li6").style.display = "none";
    } 

    else {
       document.getElementById("payEl").textContent = "$" + payover40hours.toFixed(2);

       document.getElementById("li1").innerHTML =
       minutes + " minutes " + "/" + " 60 = " + fractionhour.toFixed(4) + " of an hour.";

       document.getElementById("li2").innerHTML =
       time.toFixed(2) + " hours worked, minus 40 = " + overtime.toFixed(2) + " hours overtime.";

       document.getElementById("li3").innerHTML =
       "40 hours, multiplied by $" + rate + " = $" + straighttimepay.toFixed(2) + ".";

       document.getElementById("li4").innerHTML =
       "$" + rate + " multiplied by 1.5 = $" + overtimerate.toFixed(4) + " overtime pay rate.";

       document.getElementById("li5").innerHTML =
       overtime.toFixed(2) + " hours overtime, multiplied by $" +
       overtimerate.toFixed(4) + " = $" + overtimepayover40hours.toFixed(2) + ".";

       document.getElementById("li6").innerHTML =
       "$" + straighttimepay.toFixed(2) + " + $" + overtimepayover40hours.toFixed(2) +
       " = $" + payover40hours.toFixed(2) + " total pay.";

       document.getElementById("li1").style.listStyleType = "disc";
    document.getElementById("li1").style.paddingLeft = "initial";
    }
}


function reeet() {
    document.getElementById("payEl").textContent = "$0.00";
    document.getElementById("li1").innerHTML = "";
    document.getElementById("li2").innerHTML = "";
    document.getElementById("li3").innerHTML = "";
    document.getElementById("li4").innerHTML = "";
    document.getElementById("li5").innerHTML = "";
    document.getElementById("li6").innerHTML = "";
    document.getElementById("li1").style.display = "none";
    document.getElementById("li2").style.display = "none";
    document.getElementById("li3").style.display = "none";
    document.getElementById("li4").style.display = "none";
    document.getElementById("li5").style.display = "none";
    document.getElementById("li6").style.display = "none";

    document.getElementById("li1").style.listStyleType = "disc";
    document.getElementById("li1").style.paddingLeft = "initial";

}


function allovertime(){
    document.getElementById("payEl").textContent = "$" + overtimepay.toFixed(2);

    document.getElementById("li1").innerHTML = "<b>All Overtime</b>";
    document.getElementById("li1").style.listStyleType = "none";
    document.getElementById("li1").style.paddingLeft = "15px";


    document.getElementById("li2").innerHTML =
    minutes + " minutes " + "/" + " 60 = " + fractionhour.toFixed(4) + " of an hour.";

    document.getElementById("li3").innerHTML =
    time.toFixed(2) + " hours worked.";

    document.getElementById("li4").innerHTML =
    "$" + rate + " multiplied by 1.5 = $" + overtimerate.toFixed(4) + " overtime pay rate.";

    document.getElementById("li5").innerHTML =
    time.toFixed(2) + " hours, multiplied by $" + overtimerate.toFixed(4) + " = $" + overtimepay.toFixed(2); "";

    document.getElementById("li1").style.display = "list-item";
    document.getElementById("li2").style.display = "list-item";
    document.getElementById("li3").style.display = "list-item";
    document.getElementById("li4").style.display = "list-item";
    document.getElementById("li5").style.display = "list-item";

    document.getElementById("li6").style.display = "none";
    document.getElementById("li6").innerHTML = "";
}

*/
