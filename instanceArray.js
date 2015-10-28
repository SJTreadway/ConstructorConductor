/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var user2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var user3 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
users.push(user1, user2, user3);

console.log('Tyler\'s information is username: ' + user1.name + ', email: ' + user1.email + ', pw: ' + user1.pw);
//Console.log all of Tylers information

  //code here

console.log('Lenny\'s information is username: ' + user3.name + ', email: ' + user3.email + ', pw: ' + user3.pw);
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
  var user4 = new User('Steven', 'treadway08@gmail.com', '@ngularn0de');
  users.push(user4);

function looper(arr){
  var arr2 = [];
  for(var i = 0; i < arr.length; i++){
    arr2.push(arr[i].name);
  }
  return arr2;
}

console.log('All my users names are ' + looper(users));
//Now loop through your users Array and console.log every users name. 

  //code here
