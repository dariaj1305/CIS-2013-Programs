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
const Multiply = function myFunction("monthly_payment","loan_length") => {
  return "monthly_payment" * "loan_length";
};
var floatMonthlyPayment, intLoanTerm, floatTotalCost
var floatMonthlyPayment = parseFloat($("monthly_payment").value);
var intLoanTerm = parseInt($("loan_length").value);
var floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
var floatTotalCost= $("total_cost").value;

window.onload = function ()
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = Multiply;
    $("monthly_payment").focus();
}
