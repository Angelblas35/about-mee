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