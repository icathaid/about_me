"use strict";
var numRight = 0
var answer1 = prompt('Do I own a car?').toLowerCase().trim();
    console.log('user answered ' + answer1);
    if (answer1 === 'no'){
        alert('Sure don\'t, I\'m an avid cyclist and haven\'t owned a car in over 5 years.');
        numRight +=1;
    } else if (answer1 ==='yes'){
        alert('Nope, I haven\'t owned a car for some time now.');
    } else {
        alert('BZZZZZT!!!!  Please answer yes or no.');
    }
    console.log('Number Correct: ' + numRight);

var answer2 = prompt('Is JavaScript my first programming language?').toLowerCase().trim();
    console.log('user answered ' + answer2);
    if (answer2 === 'no'){
        alert('No, when I was a kid my dad taught me how to program in BASIC on our Commodore 64.');
        numRight +=1;
    } else if (answer2 === 'yes'){
        alert('It\'s not, but it\'s the first one in a very long time.');
    } else {
        alert('BZZZZZT!!!!  Please answer yes or no.');
    }
    console.log('Number Correct: ' + numRight);

var answer3 = prompt('Have I ever jumped out of an airplane?').toLowerCase().trim();
    console.log('user answered ' + answer3);
    if (answer3 === 'no'){
        alert('No, but I did get airborne in a tank once.');
        numRight +=1;
    } else if (answer3 === 'yes'){
        alert('No, but I\'ve always wanted to.');
    } else {
        alert('BZZZZZT!!!!  Please answer yes or no.');
    }
    console.log('Number Correct: ' + numRight);

var answer4 = prompt('Have I ever swam with dolphins?').toLowerCase().trim();
    console.log('user answered ' + answer4);
    if (answer4 === 'yes'){
        alert('Yes, but not on purpose.  I capsized a kayak in the Gulf of Mexico and a pod of dolphins showed up while I was floating back to shore.');
        numRight +=1;
    } else if (answer4 === 'no'){
        alert('I have, and it was amazing.');
    } else {
        alert('BZZZZZT!!!!  Please answer yes or no.');
    }
    console.log('Number Correct: ' + numRight);

var answer5 = prompt('Am I comfortable talking about myself?').toLowerCase().trim();
    console.log('user answered ' + answer5);
    if (answer5 === 'no'){
        alert(':|');
        numRight +=1;
    } else if (answer5 === 'yes'){
        alert('Were you there for my introduction??');
    } else {
        alert('BZZZZZT!!!!  Please answer yes or no.');
    }
    console.log('Number Correct: ' + numRight);
console.log('user got ' + numRight + ' correct out of the first 5 y/n');

var correct = 0;
var numBikes = 3;
var numTries = 1;

while (numTries <5) {
  var answer = prompt('How many bikes have I owned? (as an adult)').toLowerCase().trim();
  answer = parseInt(answer);
  console.log('User answered:' + answer);
  if (answer > numBikes) {
    alert('Your answer was too high, guess again!');
    numTries +=1;
  } else if (answer < numBikes) {
    alert('Your answer was too low, guess again!');
    numTries +=1;
  } else if (answer === numBikes) {
    alert('You are correct!  You got it in ' + numTries + ' tries.');
    numTries +=5;
    correct +=1;
    numRight +=1;
    console.log('Number Correct: ' + numRight);
  } else {
    alert("We won't count that one, but please enter a numeric digit, e.g. '2' instead of 'two'.");
  }
}
if (numTries === 5 && correct < 1){
  alert("Sorry, you're all out of guesses!");
}
"use strict";
var bikeBrands = ['trek', 'kona', 'cannondale'];
var guesses = 6;
var correctBrands = 0
while (guesses >= 1 && correctBrands === 0) {
  var input = prompt('What brands of bikes have I owned?').toLowerCase().trim();
  var i = 0;
  while (i < bikeBrands.length) {
    if (input === bikeBrands[i] ) {
      alert('Correct!  I\'ve had a Trek and a Cannondale, and now I have a Kona');
      //guesses -=6;
      correctBrands +=1;
      numRight +=1;
      break;
    } else {
      i +=1;
    } if (i >= bikeBrands.length) {
        guesses -=1;
        alert('incorrect, you have ' + guesses + ' guesses left.');
    }
  }
  if (guesses <1) {
      alert('Sorry, you\'re all out of guesses.  I\'ve had a Trek, Cannondale, and a Kona');
  }
}
console.log('Number Correct: ' + numRight);
alert('Congratulations!  You got ' + numRight + ' correct out of 7 questions!');



