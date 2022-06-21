



function onloadSelectEffectiveDateForPayRateButtons() {
    // document.getElementById("e2021").checked = true; -- This doesn't 
}



function e2021RatesInsertIntoButtons() {
    let step1=document.getElementById("step1");
    step1.innerHTML = "$18.87";
    step1.value = 18.87
    let step2=document.getElementById("step2");
    step2.innerHTML = "$19.94";
    step2.value = 19.94;
    let step3=document.getElementById("step3");
    step3.innerHTML = "$21.29";
    step3.value = 21.29
    let step4=document.getElementById("step4");
    step4.innerHTML = "$22.91";
    step4.value = 22.91;    
    let step5=document.getElementById("step5");
    step5.innerHTML = "$24.80";
    step5.value = 24.80
    let step6=document.getElementById("step6");
    step6.innerHTML = "$26.95";
    step6.value = 26.95;
}

function e2022RatesInsertIntoButtons() {
    let step1=document.getElementById("step1");
    let step2=document.getElementById("step2");
    let step3=document.getElementById("step3");
    let step4=document.getElementById("step4");
    let step5=document.getElementById("step5");
    let step6=document.getElementById("step6");
    step1.innerHTML = "$19.45";
    step1.value = 19.45;
    step2.innerHTML = "$20.56";
    step2.value = 20.56;
    step3.innerHTML = "$21.95";
    step3.value = 21.95;
    step4.innerHTML = "$23.62";
    step4.value = 23.62;
    step5.innerHTML = "$25.57";
    step5.value = 25.57;
    step6.innerHTML = "$27.79";
    step6.value = 27.79;
}

function e2023RatesInsertIntoButtons() {
    let step1=document.getElementById("step1");
    let step2=document.getElementById("step2");
    let step3=document.getElementById("step3");
    let step4=document.getElementById("step4");
    let step5=document.getElementById("step5");
    let step6=document.getElementById("step6");
    step1.innerHTML = "$20.03";
    step1.value = 20.03;
    step2.innerHTML = "$21.18";
    step2.value = 21.18;
    step3.innerHTML = "$22.61";
    step3.value = 22.61;
    step4.innerHTML = "$24.33";
    step4.value = 24.33;
    step5.innerHTML = "$26.33";
    step5.value = 26.33;
    step6.innerHTML = "$28.62";
    step6.value = 28.62;
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
