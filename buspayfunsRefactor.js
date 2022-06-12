function go() {

    if (time < 40) {

       document.getElementById("payEl").innerHTML = "$" + pay.toFixed(2);



   }
}

function reet() {
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
