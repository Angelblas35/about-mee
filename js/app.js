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