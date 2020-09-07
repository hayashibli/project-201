'use strict';

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
}

var university = prompt('Did i study in Jordan?').toLowerCase();
//console.log('The answer is:', university);
if (university === 'no') {
  alert('Sorry this is a wrong answer');
}
else if (university === 'yes') {
  alert('Excellent ' + username + ' that\'s corect');
}
var major = prompt('Is my major in the medical field').toLowerCase();
//console.log('The answer is:', major);
if (major === 'no') {
  alert('Sorry this is a wrong answer');
}
else {
  alert('Excellent ' + username + ' that\'s corect');
}

var goal = prompt('Is my goal to be an athlete?').toLowerCase();
//console.log('The answer is:', goal);
if (goal === 'yes') {
  alert('Sorry this is a wrong answer');
}
else if (goal === 'no') {
  alert('Excellent ' + username + ' that\'s corect');
}

var webpage = prompt('Do you like my webpage?').toLowerCase();
//console.log(webpage);
if (webpage === 'yes') {
  alert('Thanks alot ' + username + ' ,hope you enjoyed it :)');
}
else if (webpage === 'no') {
  alert('I respect your opinion ' + username +' :)' );
}
