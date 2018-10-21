// Creating a RomanNumeralGenerator function

// Declaring regular numbers and Roman numbers in constant because their relationships never change.
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumber = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

let remainderNumberToChangeToRoman;
romanNumbersArray = [];
const RomanNumeralGenerator = input => {
  while (input > 0) {
    divisorsIndexArrayWhichCanDivideInput = [];
    for (var i = 0; i < numbers.length; i++) {
      // getting the quotient
      quotient = input / numbers[i];
      //   console.log(quotient)
      if (quotient >= 1) {
        // getting index numbers of numbers array which can divide input numbers
        divisorsIndexArrayWhichCanDivideInput.push(i);
      }
    }
    // getting the best divisor index number or the biggest divisor number among divisors array
    bestDivisorIndexNo = divisorsIndexArrayWhichCanDivideInput[0];
    // converting best divisor value from numbers array to roman number's value and putting in roman number array
    romanNumbersArray.push(romanNumber[bestDivisorIndexNo]);
    // Finding the remainders which are not yet converted from number to roman number yet
    remainderNumberToChangeToRoman = input - numbers[bestDivisorIndexNo];
    // assigning remainder number to change to roman number as an input
    input = remainderNumberToChangeToRoman;
  }
  return romanNumbersArray.join("");
};