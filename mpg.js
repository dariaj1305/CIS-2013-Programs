var floatMiles= prompt("Enter miles driven");
floatMiles=parseFloat(floatMiles);
var floatGallons= prompt("Enter gallons of gas used");
floatGallons=parseFloat(floatGallons);
var floatMPG= (floatMiles/floatGallons);
alert("Miles per gallon= " + floatMPG);
