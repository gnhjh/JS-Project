import { Utils } from "./utils.js";
// import './arrayDemo.js'
import "./arrayDemo.js";
class Obj {
}
class Person extends Obj {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        console.log(`Hi Im ${this.firstName}`);
    }
}
//Student = Person
class Student extends Person {
    studentId;
    constructor(firstName, lastName, studentId) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
class VIPStudent extends Student {
}
//דוגמא נוספת:
class Greeter {
    greeting;
    constructor(greeting) {
        this.greeting = greeting;
    }
    //instance methods:
    greet() {
        console.log(`Hello, ${this.greeting}`);
    }
}
class MyGreeter extends Greeter {
    //more props + update the constructor
    //add methods
    greet2() {
        console.log(`Shalom, ${this.greeting}`);
    }
    //change methods
    greet() {
        console.log(`Hello, ${this.greeting}!!!`);
    }
}
class Animal {
    name;
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    move(distanceInMeters = 5) {
        console.log("SSS....");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
class BussinessCard {
    name;
    timeStamp = new Date();
    constructor(name) {
        this.name = name;
    }
    get date() {
        return Utils.dateString(this.timeStamp) + "!!!";
    }
    showDate() {
        return Utils.dateString(this.timeStamp) + "!!!";
    }
}
let b = new BussinessCard("Mc");
console.log(b.date);
console.log(b.showDate());
class Cow {
    name;
    constructor(name) {
        this.name = name;
    }
    get cowName() {
        return this.name + "!";
    }
}
let c = new Cow("Tilda");
console.log(c.cowName);
class SPerson {
    firstName;
    lastName;
    id;
    //private helpers:
    genID() {
        return Utils.random(0, 99999999999);
    }
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = this.genID();
    }
}
class MCow {
    turnHead(deg) { }
    turnHeadRight() {
        this.turnHead(-90);
    }
    makeSound() { }
}
class Card {
    suit;
    rank;
    constructor(suit, rank) {
        this.rank = rank;
        this.suit = suit;
    }
}
let c1 = new Card("Jack", "Spades");
console.log(c1.rank);
console.log(c1.suit);
