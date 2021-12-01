var $ = function (id)
{
    return document.getElementById(id);
}

var vowels = function ()
{
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toUpperCase();
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
		var intVowels = 0;

		for (intCount=0; intCount < stringEntry.length; intCount++)
        {
            if(stringEntry.charAt(intCount)==="A" || stringEntry.charAt(intCount)==="E" || stringEntry.charAt(intCount)==="I" || stringEntry.charAt(intCount)==="O" || stringEntry.charAt(intCount)==="U")
            {
                intVowels++;
            }
        }

		$("output").value = "There are " + intVowels + " vowels in the above phrase.";
	}
}

var consonants = function ()
{
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toLowerCase();

	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
		var intConsonants = 0;

		for (intCount =0; intCount < stringEntry.length; intCount++)
        {
            switch (stringEntry.charAt(intCount))
            {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                case " ":
                    break;
                default:
                    intConsonants++;
                    break;
            }
        }


		$("output").value = "There are " + intConsonants + " consonants in the above phrase.";
	}
}

var reverse = function ()
{
	var stringEntry = $("phrase").value;
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{

		var stringReversed = "";

        for (intCount=stringEntry.length-1; intCount>=0; intCount--)
        {
            stringReversed = stringReversed + stringEntry.charAt(intCount);
        }



		$("output").value = "The reverse of the above phrase is:\n" + stringReversed;
	}
}

var clear = function ()
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function ()
{

    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels;
    $("consonants").onclick = consonants;
    $("reverse").onclick = reverse;
    $("clear").onclick = clear;
}
