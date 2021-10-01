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
var multiply = function total_cost(floatMonthlyPayment,intLoanTerm);
{return floatMonthlyPayment * intLoanTerm;

};
var floatMonthlyPayment, intLoanTerm, floatTotalCost
var floatMonthlyPayment = parseFloat($("monthly_payment").value);
var intLoanTerm = parseInt($("loan_length").value);
var floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
$("total_cost").value = floatTotalCost;
window.onload = function total_cost(floatMonthlyPayment,intLoanTerm);
{return floatMonthlyPayment * intLoanTerm;

};
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = multiply;
    $("monthly_payment").focus();
}
