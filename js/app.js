'use strict'

alert('Welcome! Do you want to play a game? Of course you do.')

var username = prompt('What is your name?');
console.log('the user answered ' + username)

alert('Glad you stopped by, ' + username)

var answerOne = prompt('Do I like Halloween?').toLowerCase()

if (answerOne === 'yes' || answerOne === 'y' || answerOne === 'yup') {
    // Tell them
    alert('You know it');
    // console.log the result
console.log('The user answered correctly')

} else {answerOne=== 'no' || answerOne === 'n' || answerOne === 'nope';
    // Tell them
    alert('BOOOO! That is not right!'); 
    // console.log the result
  console.log('The user answered incorrectly');
}

var answerTwo = prompt('Do I has all the bacons?').toLowerCase()

if (answerTwo === 'yes' || answerTwo === 'y' || answerTwo === 'yup') {

    alert('Shhhhh tell know one');

    console.log('The user answered correctly');

} else {answerTwo === 'no' || answerTwo === 'n' || answerTwo === 'nope';

alert('You underestimate me FOOL!');

console.log('The user answered incorrectly');
}

var answerThree = prompt('Do I like cake?').toLowerCase()

if (answerThree === 'yes' || answerThree === 'y' || answerThree === 'yup') {

    alert('Ew gross');
    console.log('The user answered incorrectly');

} else {answerThree === 'no' || answerThree === 'n' || answerThree === 'nope';

alert('Brownies are better');
console.log('the user answered correctly');
}

var answerFour = prompt('Do I love Boston Terriers?').toLowerCase()

if (answerFour === 'yes' || answerFour === 'y' || answerFour === 'yup') {

    alert('Darn tootin! That is why I have two!');
    console.log('the user answered correctly');
} else {answerFour === 'no' || answerFour === 'n' || answerFour === 'nope';

alert('How dare you insult my two fur babies!');
console.log('the user answered incorrectly') 
}


var answerFive = prompt('Is my favorite show All My Childeren?').toLowerCase()

if (answerFive === 'yes' || answerFive === 'y' || answerFive === "yup") {

    alert('DOH!');
    console.log('the user answered incorrectly');
} else {answerFive === 'no' || answerFive === 'n' || answerFive === 'nope';

alert('WOOHOO!');
console.log('the user answered correctly')
}