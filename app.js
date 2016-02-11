// JS file for Feb 9 class demo

var userName = prompt('What is your name?');
alert('Welcome ' + userName + ', can you guess some stuff about me correctly?');
console.log('The user said their name is ' + userName);

var ready = prompt('Are you ready to play the game? Don\'t forget to answer with a \'Y\' or \'N\' ');
if(ready.toUpperCase() === 'Y' || ready.toUpperCase() === 'YES'){
  alert('Great lets continue!');
}else if (ready.toUpperCase() === 'N' || ready.toUpperCase() === 'NO') {
  alert('that\'s to bad.');
}else {
  alert('You typed in a bad response');
}
console.log('The user said ' + ready);

var born = prompt('Do you think I was born in San Diego, California?');
if(born.toUpperCase() === 'Y' || born.toUpperCase() === 'YES'){
  alert('That answer is incorrect. I was actually born in Denver, Colorado. I did however move to San Diego, California');
}else if(born.toUpperCase() === 'N' || born.toUpperCase() === 'NO'){
  alert('Wow you know me well!');
}else {
  alert('You typed in a bad response!');
}
console.log('The user guessed where I was born' + born );

var degree = prompt('Do I have a BS degree?');
if(degree.toUpperCase() === 'Y' || degree.toUpperCase() === 'YES'){
  alert('That is correct, I recieved my degree from the Art Institute of San Diego, California');
}else if(degree.toUpperCase() === 'N' || degree.toUpperCase() === 'NO'){
  alert('Sorry that answer is wrong');
}else{
  alert('You typed in a bad response!')
}
console.log('The user gussed ' + degree + ' about my degree');

var work = prompt('Did I work at naughtyDog?');
if(work.toUpperCase() === 'Y' || work.toUpperCase() === 'YES'){
  alert('That is incorrect, sorry');
}else if(work.toUpperCase() === 'N' || work.toUpperCase() ===  'NO'){
  alert('That is correct, I worked on Evequest for 2 years!');
}else{
  alert('You typed in a bad response');
}

var goal = prompt('Is my end goal to become a succesful developer')
if(goal.toUpperCase() === 'Y' || goal.toUpperCase() === 'YES'){
  alert('That is correct, doesn\'t everyone!');
}else if (goal.toUpperCase() === 'N' || goal.toUpperCase() === 'NO') {
  alert('That is incorrect!');
}else{
  alert('You typed in a bad response');
}
