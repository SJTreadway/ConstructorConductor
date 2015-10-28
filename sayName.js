//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age){
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var mike = new Person('Mike', 54);
var jason = new Person('Jason', 37);
var nick = new Person('Nick', 65);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
	return this.name;
};

mike.sayName();