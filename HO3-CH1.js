
var floatAge=prompt("What is your age in years? (ex.17.8?)");
floatAge=parseFloat(floatAge);

var floatDays= parseFloat(floatAge*365.25);

var floatMonths= parseFloat(floatAge*12);

var intWeeks= parseInt(floatDays/7);

var intFortnights= parseInt(floatDays/14); //could also be floatWeeks

alert("Your age in years is " + floatAge + ", which equates to " + floatDays + " days, " + intWeeks + " weeks, " + intFortnights + " fortnights and " + floatMonths + " months. ");