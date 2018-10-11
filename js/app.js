'use strict'

alert('Welcome! Do you want to play a game? Of course you do.')

var username = prompt('What is your name?');
console.log('the user answered ' + username)

alert('Glad you stopped by, ' + username)
//Question One
function q1() {
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
}
q1();

//Question 2
function q2(){
  
  var answerTwo = prompt('Do I has all the bacons?').toLowerCase()
  
  if (answerTwo === 'yes' || answerTwo === 'y' || answerTwo === 'yup') {
    
    alert('Shhhhh tell know one');
    
    console.log('The user answered correctly');

  } else {answerTwo === 'no' || answerTwo === 'n' || answerTwo === 'nope';
  
  alert('You underestimate me FOOL!');
  
  console.log('The user answered incorrectly');
}
}
q3();

//Question 3
function q3(){
  
  var answerThree = prompt('Do I like cake?').toLowerCase()
  
  if (answerThree === 'yes' || answerThree === 'y' || answerThree === 'yup') {
    
    alert('Ew gross');
    console.log('The user answered incorrectly');
    
  } else {answerThree === 'no' || answerThree === 'n' || answerThree === 'nope';
  
  alert('Brownies are better');
  console.log('the user answered correctly');
}
}
q3();
 //Question 4
 function q4(){
   
   var answerFour = prompt('Do I love Boston Terriers?').toLowerCase()
   
   if (answerFour === 'yes' || answerFour === 'y' || answerFour === 'yup') {
  
  alert('Darn tootin! That is why I have two!');
  console.log('the user answered correctly');
} else {answerFour === 'no' || answerFour === 'n' || answerFour === 'nope';

alert('How dare you insult my two fur babies!');
console.log('the user answered incorrectly');
}
}
q4();
 
//Question 5
function q5(){
  
  var answerFive = prompt('Is my favorite show All My Childeren?').toLowerCase()
  
  if (answerFive === 'yes' || answerFive === 'y' || answerFive === 'yup') {
    
  alert('DOH!');
  console.log('the user answered incorrectly');
} else {answerFive === 'no' || answerFive === 'n' || answerFive === 'nope';

alert('WOOHOO!');
console.log('the user answered correctly')
}
}
q5();

//Question 6
function q6(){
  
  for (var i = 0; i < 4; i++){
    var answerSix = prompt('How many cities have I lived in?').toLowerCase()
    
    if (answerSix > 5) {
      alert('Too high try again');
    }else if (answerSix < 5) {
    alert('Too low try again');
  }else (answerSix === 5)
  break
}
}
q6();

//Quesiton 7
function q7(){
  
  alert('Perfect! That is correct!');
  console.log('the user answered correctly')
  
  var citys = ['Milwaukee', 'Kansas City', 'Pittsburgh', 'Fort Lauderdale', 'Seattle'];
  console.log(citys[0])
  console.log(citys[1])
  console.log(citys[2])
  console.log(citys[3])
  console.log(citys[4])
  
  var guesses = 6;
  var correctAnswer = true;
  
  while (guesses > 0 && correctAnswer) {
    var answerSeven = prompt('Name a city I have lived in.')
    
    for (var j = 0; j < citys.length; j++){
      if (answerSeven.toLowerCase() === citys[i].toLowerCase()) {
        alert('thats  right');
        correctAnswer= false
      }
    }
    guesses--;
  if(guesses < 0 && correctAnswer){
    alert('wrong answer. try again');
  }
}

alert(' I have lived in Milwaukee, Kansas City, Pittsburgh, Fort Lauderdale and Seattle');

alert('Congratulations you made it through my quizz');
}
q7();

// how many answers did the user get right and how many questions were there



