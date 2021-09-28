function Person(firstName, lastName) {
this.fName = firstName;
this.lName = lastName;

}

Person.prototype.sayHello = function(){ // oprymalizacja kodu poprzez przeniesienie metody sayHello z 
                                        // klasy Person do prototype - funkcja nie zapycha miejsca, bo 
                                        // nie tworzy się za każdym razem gdy tworzony jest obiekt
    return this.fName + " " + this.lName;
};


var person1 = new Person ("Jan", "Kowalski");
var person2 = new Person ("Tomasz", "Nowak");

person1.sayHello = function(){ //przeciążenie metody sayHello
    return this.fName.toUpperCase() + " " + this.lName.toUpperCase();    
};