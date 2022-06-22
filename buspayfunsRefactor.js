



let rate;
let step1_2021 = 18.87;


function selectRateButtonEvent(step1, ) {
    rate = step1;                                           // set the rate variable value.
    document.getElementById("rateInputEl").value = step1;   // insert rate into display input rate.
    style_selectedRateButton("step1ButtonEl");        // style the rate button element.
    //style_unselectedRateButton("step6el")       // undo styling for unselected buttons.
}

function style_selectedRateButton(elementId) {
    document.getElementById(elementId).style.border = "2px solid blue";
    document.getElementById(elementId).style.borderRadius = "5px";
    document.getElementById(elementId).style.backgroundColor = "rgb(255, 219, 153)"; //moccasin
}
function style_unselectedRateButton(elementId) {
    document.getElementById(elementId).style.border = "";
    document.getElementById(elementId).style.borderRadius = "";
    document.getElementById(elementId).style.backgroundColor = "";
}

function theResetButtonActions(){
    ratesInsertIntoButtons(
    18.87, 19.94, 21.29, 22.91, 24.80, 26.95);
    style_unselectedRateButton("step1ButtonEl");

}

function onloadratesInsertIntoButtons() {
    ratesInsertIntoButtons(
    18.87, 19.94, 21.29, 22.91, 24.80, 26.95);
}

function ratesInsertIntoButtons(
    rate1, rate2, rate3, rate4, rate5, rate6) {
    document.getElementById("step1ButtonEl").value = "$" + rate1.toFixed(2);
    document.getElementById("step2El").value = "$" + rate2.toFixed(2);
    document.getElementById("step3El").value = "$" + rate3.toFixed(2);
    document.getElementById("step4El").value = "$" + rate4.toFixed(2);
    document.getElementById("step5El").value = "$" + rate5.toFixed(2);
    document.getElementById("step6El").value = "$" + rate6.toFixed(2);
}











/*
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
