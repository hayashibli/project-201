'use strict';
var score=0;
var username = prompt('What is your name?');
console.log('The answer is:', username);
alert('Welcome to the my webpage ' + username);

// var myname = prompt('Is my name is salwa?').toLowerCase();
// //console.log('The answer is:', myname);
// if (myname === 'yes') {
//   alert('Sorry this is a wrong answer');
// }
// else if (myname === 'no') {
//   alert('Excellent ' + username + ' that\'s corect');
//   // eslint-disable-next-line no-unused-vars
//   score ++;
//   console.log(score);
// }

function myname(){
  var name = prompt('Is my name is salwa?');
  console.log('The answer is:'+ name);

  if (name === 'yes') {
    alert('Sorry this is a wrong answer');
  }
  else if (name === 'no') {
    alert('Excellent ' + username + ' that\'s corect');
  // eslint-disable-next-line no-unused-vars
  score ++;
  console.log(score);
  }
}

myname();

// var university = prompt('Did i study in Jordan?').toLowerCase();
// //console.log('The answer is:', university);
// if (university === 'no') {
//   alert('Sorry this is a wrong answer');
// }
// else if (university === 'yes') {
//   alert('Excellent ' + username + ' that\'s corect');
//   score ++;
//   console.log(score);
// }

function university(){
  var uni = prompt('Did i study in Jordan?').toLowerCase();
  console.log('The answer is:'+ uni);
  if (uni === 'no') {
      alert('Sorry this is a wrong answer');
    }
    else if (uni === 'yes') {
      alert('Excellent ' + username + ' that\'s corect');
      score ++;
      console.log(score);
    }
}
university();

// var major = prompt('Is my major in the medical field').toLowerCase();
// //console.log('The answer is:', major);
// if (major === 'no') {
//   alert('Sorry this is a wrong answer');
// }
// else {
//   alert('Excellent ' + username + ' that\'s corect');
//   score ++;
//   console.log(score);
// }

function major(){
  var med = prompt('Is my major in the medical field').toLowerCase();
  console.log('The answer is:'+ med);
  if (med === 'no') {
      alert('Sorry this is a wrong answer');
    }
    else {
      alert('Excellent ' + username + ' that\'s corect');
      score ++;
      console.log(score);
    }
}
major();

// var goal = prompt('Is my goal to be an athlete?').toLowerCase();
// //console.log('The answer is:', goal);
// if (goal === 'yes') {
//   alert('Sorry this is a wrong answer');
// }
// else if (goal === 'no') {
//   alert('Excellent ' + username + ' that\'s corect');
//   score ++;
//   console.log(score);
// }


function goal(){
  var gl = prompt('Is my goal to be an athlete?').toLowerCase();
  console.log('The answer is:'+ gl);
  if (gl === 'yes') {
      alert('Sorry this is a wrong answer');
    }
    else if (gl === 'no') {
      alert('Excellent ' + username + ' that\'s corect');
      score ++;
      console.log(score);
    }
}
goal();

// var webpage = prompt('Do you like my webpage?').toLowerCase();
// //console.log(webpage);
// if (webpage === 'yes') {
//   alert('Thanks alot ' + username + ' ,hope you enjoyed it :)');
//   score ++;
//   console.log(score);
// }
// else if (webpage === 'no') {
//   alert('I respect your opinion ' + username +' :)' );
// }

function webpage(){
 var web = prompt('Do you like my webpage?').toLowerCase();
  console.log('The answer is:'+ web );
  if (web === 'yes') {
      alert('Thanks alot ' + username + ' ,hope you enjoyed it :)');
      score ++;
      console.log(score);
    }
    else if (web === 'no') {
      alert('I respect your opinion ' + username +' :)' );
    }
}
webpage();

// for (var i=0;i<4;i++) {
//   var num = prompt('Guess a number '+ username);
//   //console.log('The answer is:', num);
//   if(num>25){
//     console.log(num);
//     alert('number is too high!');
//   }
//   else if(num<25){
//     console.log(num);
//     alert('number is too low!');
//   } else{
//     alert('This is the correct answer');
//     score ++;
//     console.log(score);
//     break;} }

function question6(){
  for (var i=0;i<4;i++) {
      var num = prompt('Guess a number '+ username);
      console.log('The answer is:', num);
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
        break;
      }
  }
}
question6();

// for (var x=0;x<6;x++){
//   var Q7 = prompt('What types of movies do i like ?').toLowerCase();
//   //console.log('The answer is:', Q7);
//   var movies = ['sciencefiction','romance','comedy'];
//   if(Q7 === movies[0]){
//     alert('Bravo '+ username +' this is one of the options');
//     score ++;
//     console.log(score);
//     alert('I like sciencefiction, romance and comedy');
//     break;}
//   else if(Q7 === movies[1]){
//     alert('Bravo '+ username +' this is one of the options');
//     score ++;
//     console.log(score);
//     alert('I like sciencefiction, romance and comedy'); break;}
//   else if(Q7 === movies[2]){
//     alert('Bravo '+ username +' this is one of the options');
//     score ++;
//     console.log(score);
//     alert('I like sciencefiction, romance and comedy'); break;}
//   else{ alert('No your answer is wrong '+username);}}

function question7(){
  for (var x=0;x<6;x++){
  var Q7 = prompt('What types of movies do i like ?').toLowerCase();
  console.log('The answer is:', Q7);
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
}
question7();


alert('This is your score : '+score+' out of 7'+' '+ ', '+ username );
