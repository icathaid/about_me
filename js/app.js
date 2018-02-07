//alert ('things');
var numRight = 0
var answer1 = prompt('Do I own a car?').toLowerCase().trim();
    console.log(answer1);
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
    console.log(answer2);
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
    console.log(answer3);
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
    console.log(answer4);
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
    console.log(answer5);
    if (answer5 === 'no'){
        alert(':|');
        numRight +=1;
    } else if (answer5 === 'yes'){
        alert('Were you there for my introduction??');
    } else {
        alert('BZZZZZT!!!!  Please answer yes or no.');
    }
    console.log('Number Correct: ' + numRight);
alert('You got ' + numRight + ' correct!');
