
var floatAge, floatDays, floatMonths, intWeeks, intFortnights;

floatAge=prompt("What is your age in years? (ex.17.8?");
floatAge=parseFloat(floatAge);

floatDays= parseFloat(floatAge*365.25);

floatMonths= parseFloat(floatAge*12);

intWeeks= parseInt(floatDays/7);

intFortnights= parseInt(floatDays/14); //could also be floatWeeks

alert("Your age in years is " + floatAge + ", which equates to "

+ floatDays + " days, " + intWeeks + " weeks, " + intFortnights + " fortnights and " + floatMonths + " months. ");