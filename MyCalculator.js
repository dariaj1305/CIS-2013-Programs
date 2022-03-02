
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


        calculate_click();
    }

if(intMenuChoice == 2)
        {
            floatFirstNum = parseFloat(prompt("Enter your first number"));
            for (; isNaN(floatFirstNum); )
            {   
                floatFirstNum = parseFloat(prompt("Error. Please enter your first number"));
             } 
            floatSecondNum= parseFloat(prompt("Please enter your second number"));
            for(; isNaN(floatSecondNum); )
            {
                floatSecondNum= parseFloat(prompt("Error. Enter your second number"));

            }

        result= floatFirstNum - floatSecondNum;
        $("resultBox").value =result.toFixed(2);
        calculate_click ();
     }
        

        result= floatFirstNum - floatSecondNum;
        $("resultBox").value =result.toFixed(2);
        calculate_click ();
     

    if(intMenuChoice == 3)
    {
        floatFirstNum = parseFloat(prompt("Enter your first number"));
        for (;isNaN(floatFirstNum); )
        { 
            floatFirstNum = parseFloat(prompt("Error. Please enter your first number"));

        }
        floatSecondNum = parseFloat(prompt("Please enter your second number"));
        for (; isNaN(floatSecondNum); )
        {
            floatSecondNum = parseFloat(prompt("Error. Please enter your seocnd number"));
        }

        result = floatFirstNum * floatSecondNum;
        $("resultBox").value = result.toFixed(2);
        calculate_click();
    } 

    if (intMenuChoice ==4)
    {
        floatFirstNum = parseFloat(prompt("Please enter your first number"));
        for (;isNaN(floatFirstNum); )
        {
            floatFirstNum = parseFloat(prompt("Error. Please enter your first number"));
        } 

        floatSecondNum = parseFloat(prompt("Please enter your second number"));
        for (; isNaN(floatSecondNum); )
        {
            floatSecondNum = parseFloat(prompt("Error. Please enter your seocnd number"));
        }
        
        result = floatFirstNum / floatSecondNum;
        $("resultBox").value = result.toFixed(2);
        calculate_click ();
    } 

    if(intMenuChoice ==5)
    {
        floatExponent = parseFloat(prompt("Enter your exponent"));
        for ( ; isNaN(floatExponent) ; )
        {
            floatExponent = parseFloat(prompt("Error. Enter your exponent"));
        
        } 

        floatBase = parseFloat(prompt("Please enter your base"));
        for (; isNaN(floatBase); )
        {
            floatBase = parseFloat(prompt("Error. Please enter your base"));
             
        } 

        result = floatBase ** floatExponent;
        $("resultBox").value = result.toFixed(2);
        calculate_click();
        
    }

    if (intMenuChoice ==6)
    {
        var i;
        var sum =0;
        var numMean = 0;

        for(i = 0; numMean!="***" ; i++)
        {
            numMean = prompt("Enter a series of number. Enter *** to end");
            for( ; isNaN(numMean) && numMean!="***" ; )
            {
                numMean = prompt("Error. Please enter a series of numbers. Enter *** to end");

            }
            if(numMean == "***") 
            {
                break;
            }
        } 

        sum+= parseFloat(numMean);
        result = sum/(i+1);
    }
    $("resultBox").value = result.toFixed(2);
    calculate_click();

if (intMenuchoice ==7) {
    alert ("Thanks for playing");

}

window.onload = function()
{
    $("resultBox").value = "";

};

    
        
