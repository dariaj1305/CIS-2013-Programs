//Declare variables (floatAge, floatDays, intWeeks, floatMonths, intFortnights)
/*Get and force type floatAge
Calculate floatDays= floatAge * 365.25 and force type to float
Calculate floatMonths= floatAge * 12 and force type to float
Calculate intWeeks= floatDays / 7 and force type to integer
Calculate intFortnights=floatDays /14 and force type to integer
Output initial age entry and all other age conversions
*/

var floatAge, floatDays, floatMonths, intWeeks, intFortnights;

floatAge= parseFloat(prompt("What is your age in years? (ex.17.8?"));

floatDays= parseFloat(floatAge*365.25);

floatMonths= parseFloat(floatAge*12);

intWeeks= parseInt(floatDays/7);

intFortnights= parseInt(floatDays/14); //could also be floatWeeks

alert("Your age in years is " + floatAge + ", which equates to "

+ floatDays + " days, " + intWeeks + " weeks, " + intFortnights + " fortnights and " + floatMonths + " months. ");