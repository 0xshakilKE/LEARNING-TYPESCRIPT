//Strings in Typescript -Are Words, sentences and names
var myWord = "Shakil Omondi";
console.log(myWord);
//Re-assigning Values
myWord = "St.Mary's Yala";
// myWord = 5 //A number is not assignable to a string
// myWord = true //Boolean can't be assigned to a string
//Number - Refers to a container that holds only numbers
var myAge = 6;
myAge = 25; //Re-assigned a number
console.log(myAge);
//Numbers operation
//Addition 
var storedCookies = 4;
var summedCookies = storedCookies + 4;
console.log("The total cookies are ".concat(summedCookies));
//Booleans- Are either the truthy or falsy values
var isHappy = true;
var emotionState = isHappy ? "The kid is believed to be happy" : "The kid is not even smiling";
console.log(emotionState);
//Boolean Operators
//They include the &&-AND, ||-OR, !-NOT
var isSunny = true;
var hasCandy = false;
var happyAnd = isSunny && hasCandy; //Both values should be true //So result is false
var happyOr = isSunny || hasCandy; //Just either of the elements should be true //So result is true
var notSunny = !isSunny; //Will convert the truthy value to a falsy value
console.log(happyAnd);
console.log(happyOr);
console.log(notSunny);
//Arrays in TS
//Number Arrays
var schoolCodes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
schoolCodes.push(6);
console.log(schoolCodes);
//Stringed Arrays
var schoolNames = ["Bwanda", "Yala Boys", "Kisii University"];
schoolNames.pop(); //Push and Pop work on the last index of an array
console.log(schoolNames);
schoolNames.shift(); //Shift and Unshift works on the first index of an array
console.log(schoolNames);
schoolNames.unshift("Maliera Boys");
console.log(schoolNames);
//Tuples- An array that contains elements assigned various variables. Thus an array that can contain a number, string and a boolean value
var candidateDetails = ["Shakil Omondi", 19, true];
var ifAdmitted = candidateDetails[2] ? "The student is admitted" : "The student is not admitted";
var candidateName = candidateDetails[0];
var candidateNumber = candidateDetails[1];
console.log(ifAdmitted);
console.log(candidateName);
console.log(candidateNumber);
//Objects in TS-Contains various elements that are of different types
var dog = {
    name: "Brundi",
    age: 9,
    isSleepy: true
};
var feedingTime = dog.isSleepy ? "We can't feed the dog now" : "We'll feed the dog when he wakes up";
console.log(feedingTime);
console.log("The name of the dog is ".concat(dog.name));
console.log(dog.age);
//Any in Typescript-A container without a label in that u can insert any value
var unvaluedData = "BookMarks";
unvaluedData = 76;
unvaluedData = true; //Logged the Boolean Value
console.log(unvaluedData);
//Unknown in TS
var mysteryBox = 7;
if (typeof mysteryBox === "string") {
    console.log("The content is a ".concat(mysteryBox));
}
else {
    console.log("The content inside there is not labelled");
}
//A Void is used when nothing is inside the container
function sayHi() {
    console.log("Hi! Shakil");
}
var result = sayHi();
console.log(result);
//Typescript inferences-(elements assigned values are automatically detected by Typescript) and Explicit annotation is the assigned specific variable to an element
var score = 100; //TS knows this is a number
// score = "Manchester United"//TS recognises the string and gives out the squiggly line
//Explicit Annotation- You assIGN A VALUE PERSONALLY
var fruit = "Mango";
// fruit = 4 //TS recognises the number
//Functions and Type Definitions-Majorly used by parameters to determine what goes in and what comes out
function makeGreetings(name) {
    return "Hello " + name + "!Hope you doing great lad";
}
console.log(makeGreetings("Shakil Omondi"));
function summation(x, y) {
    if (x + y > 8) {
        console.log("The values are great than 8");
    }
    else {
        console.log("I know we have the right value");
    }
}
console.log(summation(1, 9));
function addCookies(a, b) {
    return a * b;
}
console.log(addCookies(4, 4));
//Optional and Default Paremeters
//Deploy the use of a question mark to state that a slot could be left empty
//Keyword Question Mark(?)
function makeIceCream(flavor, topping) {
    if (topping) {
        return flavor + "icecream with" + topping + "enjoy";
    }
    else {
        return flavor + "Ice cream plain";
    }
}
console.log(makeIceCream("Chocolate", "Sprinkles"));
console.log(makeIceCream("Vanilla"));
//Example of using Optional Paremeter
function candidateRegistration(name, number) {
    if (number) {
        return "".concat(name, " has a registration number of ").concat(number);
    }
    else {
        return "".concat(name, " has no valid registration number");
    }
}
console.log(candidateRegistration("Malik", 6));
console.log(candidateRegistration("Mitchellyne"));
//Default Parameters
function makeCone(flavor, sprinkles) {
    if (sprinkles === void 0) { sprinkles = true; }
    if (sprinkles) {
        return "".concat(flavor, " cone with added sprinkles enjoy");
    }
    else {
        return "".concat(flavor, " cone with no added sprinkles...Sorry but enjoy");
    }
}
console.log(makeCone("Vanilla"));
console.log(makeCone("mint", false));
//Own default parameters
function ticketed(name, amount) {
    if (amount === void 0) { amount = 0; }
    if (amount) {
        return "The ".concat(name, " has paid ").concat(amount);
    }
    else {
        return "The ".concat(name, " has not been paid for so he should not depart");
    }
}
console.log(ticketed("Rosemary", 1500));
console.log(ticketed("Caroline Achieng"));
var child1 = {
    name: "Sara Witkins",
    age: 7,
    favoriteColor: "Pink",
};
console.log(child1.name);
var child2 = {
    name: "Liam Scott",
    age: 5,
    favoriteColor: "Grey",
};
console.log(child2.name);
var companyA = {
    name: "Geisha",
    location: ["Kiambu", 46],
    road: "Eastern Bypass",
};
console.log(companyA.location[1]);
function makeTreat(item) {
    if (typeof item === "string") {
        return "Yummy ".concat(item, " flavored icecream");
    }
    else {
        return item * 2;
    }
}
console.log(makeTreat("Chocolate"));
console.log(makeTreat(9));
//Own function overload
function registerStudent(item) {
    if (typeof item === "string") {
        return "The candidate to be registered is ".concat(item);
    }
    else {
        return item ? "The candidate is registered" : "The candidate is not registered";
    }
}
console.log(registerStudent("Shakil"));
console.log(registerStudent(false));
//Arrow Functions
var sayGreet = function (name) { return "Kindly, could you tell me what's your ".concat(name); };
console.log(sayGreet("Malcolm X"));
var summedEntries = function (a, b) { return a + b; };
console.log(summedEntries(4, 7));
var multipliedEntries = function (a, b) { return a * b; };
console.log(multipliedEntries(9, 8));
//Object Oriented Programming-Comprises Majorly of Classes, Constructors and Properties
var teddy = {
    name: "Mr.Fluffy",
    color: "Brown",
    isHappy: true,
    talk: function () {
        console.log("Hi! I'm ".concat(this.name, ", Kindly hug Me"));
    },
    dance: function () {
        console.log('Wiggle, Wiggle for me my dawg');
    }
};
console.log(teddy.talk());
//OOP-Using Class
var Car = /** @class */ (function () {
    function Car() {
        this.color = '';
        this.speed = 0;
    }
    Car.prototype.honk = function () {
        console.log("Beep, Beep and I'm not repeating");
    };
    Car.prototype.goFast = function () {
        console.log("I'mma gonna pass you at ".concat(this.speed, " km/h"));
    };
    return Car;
}());
var redCar = new Car();
redCar.color = "red";
redCar.speed = 120;
console.log(redCar.honk());
//Another Class
var Puppy = /** @class */ (function () {
    function Puppy() {
        this.name = "";
        this.age = 0;
        this.isHappy = false;
    }
    Puppy.prototype.bark = function () {
        console.log("".concat(this.name, " says Wooof Wooof"));
    };
    Puppy.prototype.wagTail = function () {
        if (this.isHappy) {
            console.log("".concat(this.name, "is wagging his tail happily"));
        }
        else {
            console.log("".concat(this.name, " isn't wagging, I think he is sad"));
        }
    };
    return Puppy;
}());
var max = new Puppy();
max.name = "Maxwell Mkali";
max.age = 2;
max.bark();
max.wagTail();
