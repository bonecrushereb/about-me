// // JS file for Feb 9 class demo

// var userName = prompt('What is your name?');
// alert('Welcome ' + userName + ', can you guess some stuff about me correctly?');
// console.log('The user said their name is ' + userName);
//
// var ready = prompt('Are you ready to play the game? Don\'t forget to answer with a \'Y\' or \'N\' ');
// if(ready.toUpperCase() === 'Y' || ready.toUpperCase() === 'YES'){
//   alert('Great lets continue!');
// }else if (ready.toUpperCase() === 'N' || ready.toUpperCase() === 'NO') {
//   alert('that\'s to bad.');
// }else {
//   alert('You typed in a bad response');
// }
// console.log('The user said ' + ready);
//
// var born = prompt('Do you think I was born in San Diego, California?');
// if(born.toUpperCase() === 'Y' || born.toUpperCase() === 'YES'){
//   alert('That answer is incorrect. I was actually born in Denver, Colorado. I did however move to San Diego, California');
// }else if(born.toUpperCase() === 'N' || born.toUpperCase() === 'NO'){
//   alert('Wow you know me well!');
// }else {
//   alert('You typed in a bad response!');
// }
// console.log('The user guessed where I was born' + born );
//
// var degree = prompt('Do I have a BS degree?');
// if(degree.toUpperCase() === 'Y' || degree.toUpperCase() === 'YES'){
//   alert('That is correct, I recieved my degree from the Art Institute of San Diego, California');
// }else if(degree.toUpperCase() === 'N' || degree.toUpperCase() === 'NO'){
//   alert('Sorry that answer is wrong');
// }else{
//   alert('You typed in a bad response!')
// }
// console.log('The user gussed ' + degree + ' about my degree');
//
// var work = prompt('Did I work at naughtyDog?');
// if(work.toUpperCase() === 'Y' || work.toUpperCase() === 'YES'){
//   alert('That is incorrect, sorry');
// }else if(work.toUpperCase() === 'N' || work.toUpperCase() === 'NO'){
//   alert('That is correct, I worked on Evequest for 2 years!');
// }else{
//   alert('You typed in a bad response');
// }
//
// var goal = prompt('Is my end goal to become a succesful developer');
// if(goal.toUpperCase() === 'Y' || goal.toUpperCase() === 'YES'){
//   alert('That is correct, doesn\'t everyone!');
// }else if (goal.toUpperCase() === 'N' || goal.toUpperCase() === 'NO') {
//   alert('That is incorrect!');
// }else{
//   alert('You typed in a bad response');
// }
//
// while(age != 26){
//   var age = prompt('How old do you think I am?');
//   if(age > 26){
//     alert('You are to high!!!');
//   }else if(age < 26){
//     alert('You are to low!!');
//   }
// }
// alert('You are correct!')
// console.log('The user typed ' + age + 'for my age');
//
// var pets = ['Finn','Amara'];
// var petAnswer = prompt('Can you name one of Ben\'s pets?');
// for (var i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
//   if(petAnswer === pets[i]){
//     alert('YES');
//   }
// }
// alert('You had 2 guesses and failed!');

var ctr = 4;
console.log('Hello madude ' + (ctr > 0 ))
while(favNum != 20 && ctr > 0 ){
  var favNum = prompt('What is my favorite number? you have ' + ctr + ' guesses left');
  if(favNum > 20){
    alert('You are to high  !!!');
  }else if(favNum < 20) {
    alert('You are to low!!');
  }else if(isNaN(favNum)) {
    alert('Please type a number only');
  }
  --ctr;
  if (ctr === 0){
    alert('OPPS! you are out of guesses, better luck next time!');
    break;
  }else{
    alert('You are correct!!')
  }
}
