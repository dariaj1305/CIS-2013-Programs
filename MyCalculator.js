
var $ = function(id) {
    return document.getElementById(id);
};
    function calculate_click ()
    {
        var intMenuChoice;
        var floatFirstNum;
        var floatSecondNum;
        var result;
        var floatExponent;
        var floatBase;

       var intMenuChoice = parseInt(prompt("Please enter a number 1 to 7 Menu:\n1 Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit"));
    }

for (intMenuChoice <1 || intMenuChoice >7 || isNaN(intMenuChoice)
{
    intMenuChoice =parseInt(prompt("Error. Enter a number between 1 and 7 Menu:\n1 Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit"));
}
if (intMenuChoice ==1)
{
        floatFirstNum = parseFloat(prompt("Enter your first number"));

        for ( ; isNaN(floatFirstNum) ; )
        {
            floatFirstNum = parseFloat(prompt("Error. Enter your First Number"));
        }

        floatSecondNum = parseFloat(prompt("Please enter your second number."));

        for ( ; isNaN(floatSecondNum) ; )
        {
            floatSecondNum = parseFloat(prompt("Error. Please enter your second number"));
        }

        result = floatFirstNum + floatSecondNum;

        $("resultBox").value = result.toFixed(2);

        alert("The mean is: " +runningTotal(countNum));

        calculate_click();
    }
    
        