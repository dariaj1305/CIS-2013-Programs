var $ = function (id)
{
    return document.getElementById(id);
}

/* start
   declare floatMonthlyPayment, intLoanTerm, 	floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm with loan term in months
   calculate floatTotalCost = floatMonthlyPayment *      	intLoanTerm
   output floatTotalCost
end
*/

var Calculate = function()
{
var floatMonthlyPayment, intLoanTerm, floatTotalCost;
var floatMonthlyPayment = parseFloat($("monthly_payment").value);
var intLoanTerm = parseInt($("loan_length").value);
var floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
}
$("total_cost").value)=floatTotalCost;

window.onload = function()
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = Calculate;
    $("monthly_payment").focus();
}
