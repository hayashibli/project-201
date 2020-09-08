'use strict';
var score=0;
var username = prompt('What is your name?');
//console.log('The answer is:', username);
alert('Welcome to the my webpage ' + username);

var myname = prompt('Is my name is salwa?').toLowerCase();
//console.log('The answer is:', myname);
if (myname === 'yes') {
  alert('Sorry this is a wrong answer');
}
else if (myname === 'no') {
  alert('Excellent ' + username + ' that\'s corect');
  // eslint-disable-next-line no-unused-vars
  score ++;
  console.log(score);
}

var university = prompt('Did i study in Jordan?').toLowerCase();
//console.log('The answer is:', university);
if (university === 'no') {
  alert('Sorry this is a wrong answer');
}
else if (university === 'yes') {
  alert('Excellent ' + username + ' that\'s corect');
  score ++;
  console.log(score);
}
var major = prompt('Is my major in the medical field').toLowerCase();
//console.log('The answer is:', major);
if (major === 'no') {
  alert('Sorry this is a wrong answer');
}
else {
  alert('Excellent ' + username + ' that\'s corect');
  score ++;
  console.log(score);
}

var goal = prompt('Is my goal to be an athlete?').toLowerCase();
//console.log('The answer is:', goal);
if (goal === 'yes') {
  alert('Sorry this is a wrong answer');
}
else if (goal === 'no') {
  alert('Excellent ' + username + ' that\'s corect');
  score ++;
  console.log(score);
}

var webpage = prompt('Do you like my webpage?').toLowerCase();
//console.log(webpage);
if (webpage === 'yes') {
  alert('Thanks alot ' + username + ' ,hope you enjoyed it :)');
  score ++;
  console.log(score);
}
else if (webpage === 'no') {
  alert('I respect your opinion ' + username +' :)' );
}

for (var i=0;i<4;i++) {
  var num = prompt('Guess a number '+ username);
  //console.log('The answer is:', num);
  if(num>25){
    console.log(num);
    alert('number is too high!');
  }
  else if(num<25){
    console.log(num);
    alert('number is too low!');
  } else{
    alert('This is the correct answer');
    score ++;
    console.log(score);
    break;} }


for (var x=0;x<6;x++){
  var Q7 = prompt('What types of movies do i like ?').toLowerCase();
  //console.log('The answer is:', Q7);
  var movies = ['sciencefiction','romance','comedy'];
  if(Q7 === movies[0]){
    alert('Bravo '+ username +' this is one of the options');
    score ++;
    console.log(score);
    alert('I like sciencefiction, romance and comedy');
    break;}
  else if(Q7 === movies[1]){
    alert('Bravo '+ username +' this is one of the options');
    score ++;
    console.log(score);
    alert('I like sciencefiction, romance and comedy'); break;}
  else if(Q7 === movies[2]){
    alert('Bravo '+ username +' this is one of the options');
    score ++;
    console.log(score);
    alert('I like sciencefiction, romance and comedy'); break;}
  else{ alert('No your answer is wrong '+username);}}
alert('This is your score : '+score+' out of 7'+' '+ ', '+ username );

