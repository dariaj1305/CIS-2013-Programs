/* Start
Declare variables boolPrinting, boolRedLight, boolRecognised, messages 1-6, stringOutput
boolPrinting is true if it is NOT printing
boolRedLight is true if the red light IS flashing
boolRecognised is true if the printer is NOT recognized by the computer
If (boolPrinting === true)
   if (boolRedLight === true)
      if (boolRecognised === true)
         stringOutput = messages 2,3,4
      else
         stringOutput = message 4, 5
   else
      if (boolRecognised === true)
         stringOutput = messages 1,2&3
      else
         stringOutput = message 5
else
   if (boolRedLight === true)
      if (boolRecognised === true)
         stringOutput = messages 3 & 4
      else
         stringOutput = message4
   else
      if (boolRecognised === true)
         stringOutput = message3
      else
         stringOutput = message 6
Post stringOutput to the DOM
End
*/

var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";


    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    var boolPrinting = $("not_printing").selected;
    var boolRedLight = $("yes_redlight").selected;
    var boolRecognised = $("not_recognised").selected;


    if(boolPrinting === true && boolRedLight === true && boolRecognised === true)
    {
      stringOutput = stringMessage2 + "\n" + stringMessage3 + "\n" + stringMessage4;
    }
        else if (boolPrinting === true && boolRedLight === true && boolRecognised === false)
        {
      stringOutput = stringMessage4 + "\n" + stringMessage5;
        }
             else if (boolPrinting === true && boolRedLight === false && boolRecognised === true)
            {
        stringOutput = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3;
            }
                 else if (boolPrinting === true && boolRedLight === false && boolRecognised === false)
                {
            stringOutput = stringMessage5 ;
                }
                     else if (boolPrinting === false && boolRedLight === true && boolRecognised === true)
                    {
                stringOutput = stringMessage3 + "\n" + stringMessage4;
                    }
                         else if (boolPrinting === false && boolRedLight === true && boolRecognised === false)
                        {
                    stringOutput = stringMessage4;
                        }
                             else if (boolPrinting === false && boolRedLight === false && boolRecognised === true)
                            {
                        stringOutput = stringMessage3;
                            }
                                 else if (boolPrinting === false && boolRedLight === false && boolRecognised === false)
                                {
                            stringOutput = stringMessage6;
                                }

$("output").value = stringOutput;

};

window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
}
