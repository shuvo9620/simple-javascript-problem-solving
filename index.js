//First Problem solution
/*
In this mindGame function i implemented simple arithmetic operations as like addition, multiplication, subtraction and dividation.
*/

function mindGame(number) {
  if (typeof number !== 'number' || number < 0) {
    return 'please enter a valid number';
  }
  return (number * 3 + 10) / 2 - 5;
}


//Second Problem solution
/*
In this evenOdd function i implemented modulo operator to identify if the number of characters in the input string is even or odd.
*/

function evenOdd(myString) {
  if (typeof myString !== 'string') {
    return 'please enter a string';
  }


  if (myString.length % 2 === 0) {
    return 'even';
  }
  else {
    return 'odd';
  }
}


//Third problem solution
/*
In this isLGSeven function i use difference to input value and 7. if the value is  less than 7, output will be the difference. otherwise the output will be the double of the input. 
*/

function isLGSeven(number) {
  if (typeof number !== 'number') {
    return 'please enter a valid number';
  }

  let difference = number - 7;
  if (difference < 7) {
    return difference;
  } else {
    return 2 * number;
  }
}

//Fourth problem solution
/*
In this findingBadData function i use initialize a variable badDataCount at 0. then i use a for loop to iterate over the numbers array. The function checks if it is less than 0 the badDataCount is incremented. Finally, the function returns the badDataCount, which represents the number of negative numbers in the array. 
*/

function findingBadData(numbers) {
  if (typeof numbers !== 'object') {
    return 'please enter a valid array';
  }

  let badDataCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      badDataCount++;
    }
  }
  return badDataCount;
}

//Fifth Problem solution
/*
In this gemsToDiamond function i take three parameter gems1, gems2, and gems3.then multiply and addition with those parameters and declared variables.Then checks if the total is greater than 2000, minus 2000 from totalGems. the result will be the output of diamonds.
*/

function gemsToDiamond(gems1, gems2, gems3) {
  if (typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number') {
    return 'please enter a valid number';
  }
  let firstFriendGems = 21;
  let secondFriendGems = 32;
  let thirdFriendGems = 43;
  let totalGems = gems1 * firstFriendGems + gems2 * secondFriendGems + gems3 * thirdFriendGems;
  if (totalGems > 1000 * 2) {
    return totalGems - 2000;
  }
  return totalGems;
}