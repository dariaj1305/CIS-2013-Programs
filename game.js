var intMax, intMin, intRandom, intGuess, intCount;

// intMax and intMin are the highest and lowest numbers in the range which players must guess between
// Numbers outside of this range will be invalid


intMin = parseInt(prompt("Pick the lower number in the range that is at least 0."));
while (intMin < 0 || isNaN(intMin))
    {
        intMin = parseInt(prompt("This guess is invalid. Please try again"));
    }

// Alerts players to guess a valid lower number of a range which is no less than 0


intMax = parseInt(prompt("Pick the upper number in the range that is at least " + (intMin+2)));
while (intMax < (intMin +2) || isNaN(intMax))
       {
            intMax = parseInt(prompt("This guess is invalid. Please try again."));
        }
// This prompt tells players to choose the upper number of a range which is no less than
// 2 + the minimum number
// if the number is not in this range, a prompt will pop up to say it's invalid


intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);

// Creates a random number for the players to guess that round
// Math.random() chooses a number between 0 and 1
// (intMax-intMin+1) gives the range of random numbers
// +intMin provides the minimum for the random number


// set the loop counter

intCount = 1;


intGuess = parseInt(prompt("Enter a number between " + intMin + " and " + intMax));
while (intGuess < intMin || intGuess > intMax || isNaN(intGuess))
{
    intGuess = parseInt(prompt("This guess is invalid. Please try again."));
}

// Between minimum and maximum, not a number, not between
// Allows players to guess a number for the game
// Ensures that the number is valid and between the Max and Min


while (intGuess != intRandom)
{
    if (intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Your guess " + intGuess + " is too low. Try again."));
        while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
        {
            intGuess = parseInt(prompt("Please pick a number between " + intMin + " and " + intMax));
        }
    }
    else {
        intGuess = parseInt(prompt("Your guess " + intGuess + " is too high. Try again."));
        while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
        {
            intGuess = parseInt(prompt("Pick a number between " + intMin + " and " + intMax));
        }
    }
    intCount++;
}

// Loop section that tells players whether the number is higher or lower
// than the generated number until player chooses the right number
// When number doesn't match, is guess less than random number
// validate new guesses
// loop alerts user when guesses are too high or too low. Also makes sure guesses are in the correct range.


alert("Congrats! You guessed the correct number (" + intRandom +")\n" +
		" in only " + intCount + " attempts. You've received " + intCount + " points.");
    // Provides final output upon users final successful guessing
