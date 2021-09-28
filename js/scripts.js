function Person(firstName, lastName) {
this.fName = firstName;
this.lName = lastName;

}

Person.prototype.sayHello = function(){
    return this.fName + " " + this.lName;
};


var person1 = new Person ("Jan", "Kowalski");
var person2 = new Person ("Tomasz", "Nowak");

person1.sayHello = function(){
    return this.fName.toUpperCase() + " " + this.lName.toUpperCase();    
};