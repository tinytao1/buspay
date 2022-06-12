function go() {
    if (time < 40) {
       document.getElementById("payEl").textContent = "$" + pay.toFixed(2);

       document.getElementById("calcEl1").innerHTML =
       minutes + " minutes " + "/" + " 60 = " + fractionhour.toFixed(4) + " of an hour.";

       document.getElementById("calcEl2").innerHTML =
       time.toFixed(2) + " hours, multiplied by $" + rate + " = $" + pay.toFixed(2);

       document.getElementById("calcEl3").innerHTML = "";
       document.getElementById("calcEl4").innerHTML = "";
       document.getElementById("calcEl5").innerHTML = "";
       document.getElementById("calcEl6").innerHTML = "";
    } 
    else {
       document.getElementById("payEl").textContent = "$" + payover40hours.toFixed(2);

       document.getElementById("calcEl1").innerHTML =
       minutes + " minutes " + "/" + " 60 = " + fractionhour.toFixed(4) + " of an hour.";

       document.getElementById("calcEl2").innerHTML =
       time.toFixed(2) + " hours worked, minus 40 = " + overtime.toFixed(2) + " hours overtime.";

       document.getElementById("calcEl3").innerHTML =
       "40 hours, multiplied by $" + rate + " = $" + straighttimepay.toFixed(2) + ".";

       document.getElementById("calcEl4").innerHTML =
       "$" + rate + " multiplied by 1.5 = $" + overtimerate.toFixed(4) + " overtime pay rate.";

       document.getElementById("calcEl5").innerHTML =
       overtime.toFixed(2) + " hours overtime, multiplied by $" +
       overtimerate.toFixed(4) + " = $" + overtimepayover40hours.toFixed(2) + ".";

       document.getElementById("calcEl6").innerHTML =
       "$" + straighttimepay.toFixed(2) + " + $" + overtimepayover40hours.toFixed(2) +
       " = $" + payover40hours.toFixed(2) + " total pay.";
    }
}


function reeet() {
    document.getElementById("payEl").textContent = "$0.00";
    document.getElementById("calcEl1").innerHTML = "";
    document.getElementById("calcEl2").innerHTML = "";
    document.getElementById("calcEl3").innerHTML = "";
    document.getElementById("calcEl4").innerHTML = "";
    document.getElementById("calcEl5").innerHTML = "";
    document.getElementById("calcEl6").innerHTML = "";
}


function allovertime(){
    document.getElementById("payEl").textContent = "$" + overtimepay.toFixed(2);

    document.getElementById("calcEl1").innerHTML = "<b>All Overtime:</b>";

    document.getElementById("calcEl4").innerHTML =
    "$" + rate + " multiplied by 1.5 = $" + overtimerate.toFixed(4) + " overtime pay rate.";

    document.getElementById("calcEl2").innerHTML =
    minutes + " minutes " + "/" + " 60 = " + fractionhour.toFixed(4) + " of an hour.";

    document.getElementById("calcEl3").innerHTML =
    time.toFixed(2) + " hours worked.";

    document.getElementById("calcEl5").innerHTML =
    time.toFixed(2) + " hours, multiplied by $" + overtimerate.toFixed(4) + " = $" + overtimepay.toFixed(2); "";

    document.getElementById("calcEl6").innerHTML = "";
}
