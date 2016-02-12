// // JS file for Feb 9 class demo

// Declaring function variables for the HTML
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var answer5 = document.getElementById('answer5');
var answer6 = document.getElementById('answer6');
var answer7 = document.getElementById('answer7');

function jsUserName() {
  var userName = prompt('What is your name?');
  alert('Welcome ' + userName + ', can you guess some stuff about me correctly?');
  console.log('The user said their name is ' + userName);
  //return userName;
}

cTally = 0;

function jsReady() {
  var ready = prompt('Are you ready to play the game? Don\'t forget to answer with a \'Y\' or \'N\' ');
  if (ready.toUpperCase() === 'Y' || ready.toUpperCase() === 'YES') {
    alert('Great lets continue!');
  } else if (ready.toUpperCase() === 'N' || ready.toUpperCase() === 'NO') {
    alert('that\'s to bad.');
  } else {
    alert('You typed in a bad response');
  }
  console.log('The user said ' + ready);
}

function jsBorn() {
  var born = prompt('Do you think I was born in San Diego, California?');
  if (born.toUpperCase() === 'Y' || born.toUpperCase() === 'YES') {
    // alert('That answer is incorrect. I was actually born in Denver, Colorado. I did however move to San Diego, California');
    answer1.textContent = 'That answer is incorrect. I was actually born in Denver, Colorado. I did however move to San Diego, California';
  } else if (born.toUpperCase() === 'N' || born.toUpperCase() === 'NO') {
    //alert('Wow you know me well!');
    answer1.textContent = 'Wow you know me well!';
    cTally += 1;
    console.log('cTally:' + cTally);
  } else {
    alert('You typed in a bad response!');
  }
  console.log('The user guessed where I was born' + born);
}

function jsDegree() {
  var degree = prompt('Do I have a BS degree?');
  if (degree.toUpperCase() === 'Y' || degree.toUpperCase() === 'YES') {
    // alert('That is correct, I recieved my degree from the Art Institute of San Diego, California');
    answer2.textContent = 'That is correct, I recieved my degree from the Art Institute of San Diego, California';
    cTally += 1;
    console.log('cTally:' + cTally);
  } else if (degree.toUpperCase() === 'N' || degree.toUpperCase() === 'NO') {
    // alert('Sorry that answer is wrong');
    answer2.textContent = 'Sorry that answer is wrong';
  } else {
    alert('You typed in a bad response!')
  }
  console.log('The user gussed ' + degree + ' about my degree');
}

function jsWork() {
  var work = prompt('Did I work at naughtyDog?');
  if (work.toUpperCase() === 'Y' || work.toUpperCase() === 'YES') {
    // alert('That is incorrect, sorry');
    answer3.textContent = 'That is incorrect, sorry';
  } else if (work.toUpperCase() === 'N' || work.toUpperCase() === 'NO') {
    // alert('That is correct, I worked on Evequest for 2 years!');
    answer3.textContent = 'That is correct, I worked on Evequest for 2 years!';
    cTally += 1;
    console.log('cTally:' + cTally);
  } else {
    alert('You typed in a bad response');
  }
}

function jsGoal() {
  var goal = prompt('Is my end goal to become a succesful developer');
  if (goal.toUpperCase() === 'Y' || goal.toUpperCase() === 'YES') {
    // alert('That is correct, doesn\'t everyone!');
    answer4.textContent = 'That is correct, doesn\'t everyone!';
    cTally += 1;
  } else if (goal.toUpperCase() === 'N' || goal.toUpperCase() === 'NO') {
    // alert('That is incorrect!');
    answer4.textContent = 'That is incorrect!';
  } else {
    alert('You typed in a bad response');
  }
}

function jsAge() {
  while (age != 26) {
    var age = prompt('How old do you think I am?');
    if (age > 26) {
      alert('You are too high!!!');
    } else if (age < 26) {
      alert('You are too low!!');
    }
  }
  // alert('You are correct!')
  answer5.textContent = 'You are correct!';
  cTally += 1
  console.log('cTally:' + cTally);
  console.log('The user typed ' + age + 'for my age');
}

function jsPets() {
  var pets = ['Finn', 'Amara'];
  var petAnswer = prompt('Can you name one of Ben\'s pets?');
  for (var i = 0; i < pets.length; i++) {
    console.log(pets[i]);
    console.log('cTally:' + cTally);
    if (petAnswer === pets[i]) {
      // alert('YES');
      answer6.textContent = 'YES';
      cTally += 1;
    } else {
      alert('You had 1 guess and failed!');
      break;
    }
  }
}

function jsCtr() {
  var ctr = 4;
  // console.log('Hello madude ' + (ctr > 0 ))
  while (favNum != 20 && ctr > 0) {
    var favNum = prompt('What is my favorite number? you have ' + ctr + ' guesses left');
    if (favNum > 20) {
      alert('You are to high  !!!');
    } else if (favNum < 20) {
      alert('You are to low!!');
    } else if (isNaN(favNum)) {
      alert('Please type a number only');
    }
    --ctr;
    if (ctr === 0) {
      alert('OPPS! you are out of guesses, better luck next time!');
      break;
    } else {
      // alert('You are correct!!')
      answer7.textContent = 'You are correct!!';
      cTally += 1;
      console.log('cTally:' + cTally);
    }
  }
}

function jsLived() {
  var lived = prompt('Can you guess where I\'ve lived?');
  var states = ['Colorado', 'Ohio', 'New Mexico', 'California', 'Washington'];
  // var correctGuesses = [];
  var isCorrect = false;



  for (i = 0; i < states.length; i++) {
    if (lived === states[i]) {
      // correctGuesses.push(lived);
      isCorrect = true;
      // alert(correctGuesses[i] + ' are Correct!');
      answer7.textContent = 'You are correct!!';
      // console.log('The user entered ' + correctGuesses);
    }
  }

  if (isCorrect == false) {
    alert('you were wrong!');
  } else {
    // alert('hurray you got it right!');
    cTally += 1;
    console.log('cTally:' + cTally);
  }


  if (cTally <= 8) {
    alert('good job you got ' + cTally + ' correct');
  }
}

jsBorn();
jsDegree();
jsWork();
jsGoal();
jsAge();
jsPets();
jsLived();
