//Strings in Typescript -Are Words, sentences and names
let myWord : string = "Shakil Omondi"
console.log(myWord)

//Re-assigning Values
myWord = "St.Mary's Yala"
// myWord = 5 //A number is not assignable to a string
// myWord = true //Boolean can't be assigned to a string


//Number - Refers to a container that holds only numbers

let myAge : number = 6
myAge = 25 //Re-assigned a number

console.log(myAge)

//Numbers operation
//Addition 

let storedCookies : number = 4
let summedCookies = storedCookies + 4
console.log(`The total cookies are ${summedCookies}`)

//Booleans- Are either the truthy or falsy values
let isHappy : boolean = true
let emotionState = isHappy ? "The kid is believed to be happy" : "The kid is not even smiling"
console.log(emotionState)

//Boolean Operators
//They include the &&-AND, ||-OR, !-NOT

let isSunny : boolean = true
let hasCandy : boolean = false

let happyAnd : boolean = isSunny && hasCandy //Both values should be true //So result is false
let happyOr : boolean = isSunny || hasCandy //Just either of the elements should be true //So result is true
let notSunny : boolean =!isSunny //Will convert the truthy value to a falsy value


console.log(happyAnd)
console.log(happyOr)
console.log(notSunny)

//Arrays in TS
//Number Arrays
let schoolCodes : number[]=[1, 2,3,4,5,6,7,8,9]
schoolCodes.push(6)
console.log(schoolCodes)
//Stringed Arrays
let schoolNames : string[] =["Bwanda", "Yala Boys", "Kisii University"]
schoolNames.pop() //Push and Pop work on the last index of an array
console.log(schoolNames)
schoolNames.shift() //Shift and Unshift works on the first index of an array
console.log(schoolNames)
schoolNames.unshift("Maliera Boys")
console.log(schoolNames)

//Tuples- An array that contains elements assigned various variables. Thus an array that can contain a number, string and a boolean value

let candidateDetails : [string, number, boolean] =["Shakil Omondi", 19 , true]
let ifAdmitted = candidateDetails[2] ? "The student is admitted" : "The student is not admitted"
let candidateName = candidateDetails[0]
let candidateNumber = candidateDetails[1]

console.log(ifAdmitted)
console.log(candidateName)
console.log(candidateNumber)

//Objects in TS-Contains various elements that are of different types

let dog :{
    name : string,
    age : number,
    isSleepy : boolean
}={
    name : "Brundi",
    age : 9,
    isSleepy : true
}

let feedingTime = dog.isSleepy ? "We can't feed the dog now" : "We'll feed the dog when he wakes up"
console.log(feedingTime)
console.log(`The name of the dog is ${dog.name}`)
console.log(dog.age)

//Any in Typescript-A container without a label in that u can insert any value
let unvaluedData : any = "BookMarks"
unvaluedData = 76
unvaluedData = true //Logged the Boolean Value

console.log(unvaluedData)

//Unknown in TS
let mysteryBox : unknown = 7

if(typeof mysteryBox === "string"){
    console.log(`The content is a ${mysteryBox}`)
} else{
    console.log(`The content inside there is not labelled`)
}

//A Void is used when nothing is inside the container
function sayHi(): void{
    console.log("Hi! Shakil")
}
let result : void = sayHi()
console.log(result)

//Typescript inferences-(elements assigned values are automatically detected by Typescript) and Explicit annotation is the assigned specific variable to an element

let score = 100 //TS knows this is a number
// score = "Manchester United"//TS recognises the string and gives out the squiggly line

//Explicit Annotation- You assIGN A VALUE PERSONALLY

let fruit : string = "Mango"
// fruit = 4 //TS recognises the number


//Functions and Type Definitions-Majorly used by parameters to determine what goes in and what comes out

function makeGreetings(name:string):string{
    return "Hello " + name + "!Hope you doing great lad"
}
console.log(makeGreetings("Shakil Omondi"))

function summation( x : number , y: number):any{
    if( x + y > 8){
        console.log("The values are great than 8")
    }else{
        console.log("I know we have the right value")
    }
}
console.log(summation(1,9))

function addCookies(a: number , b: number): number{
    return a * b
}

console.log(addCookies(4,4))

//Optional and Default Paremeters
//Deploy the use of a question mark to state that a slot could be left empty
//Keyword Question Mark(?)
function makeIceCream (flavor: string, topping? : string){
    if(topping){
        return flavor + "icecream with" + topping + "enjoy"
    }
    else{
        return flavor + "Ice cream plain"
    }
}

console.log(makeIceCream("Chocolate", "Sprinkles"))
console.log(makeIceCream("Vanilla"))

//Example of using Optional Paremeter
function candidateRegistration( name: string, number?: number){
    if (number){
        return `${name} has a registration number of ${number}`
    } else{
        return `${name} has no valid registration number`
    }
}

console.log(candidateRegistration("Malik", 6))
console.log(candidateRegistration("Mitchellyne"))

//Default Parameters
function makeCone(flavor : string, sprinkles: boolean = true){
    if(sprinkles){
        return `${flavor} cone with added sprinkles enjoy`
    } else{
        return `${flavor} cone with no added sprinkles...Sorry but enjoy`
    }
}

console.log(makeCone("Vanilla"))
console.log(makeCone("mint", false))

//Own default parameters

function ticketed(name : string, amount : number = 0){
    if(amount){
        return `The ${name} has paid ${amount}`
    } else{
        return `The ${name} has not been paid for so he should not depart`
    }
}

console.log(ticketed("Rosemary", 1500))
console.log(ticketed("Caroline Achieng"))


//Interfaces-Act as a reference psheet for the described items

interface kid{
    name: string,
    age: number,
    favoriteColor:string
}

let child1: kid={
    name : "Sara Witkins",
    age: 7,
    favoriteColor: "Pink",
}
console.log(child1.name)
let child2: kid={
    name : "Liam Scott",
    age: 5,
    favoriteColor: "Grey",
}
console.log(child2.name)

//Own INTERFACE

interface companyDetails{
    name: string,
    location : [string, number],
    road : string,
}

let companyA: companyDetails={ //Be Weary of the equal sign and interface at the begining
    name :"Geisha",
    location: ["Kiambu", 46],
    road: "Eastern Bypass",
}

console.log(companyA.location[1])


//Function Overloads
function makeTreat(item: string): string;
function makeTreat(item: number): number;
function makeTreat(item: number | string): number | string
{
if(typeof item === "string"){
    return `Yummy ${item} flavored icecream`
}else{
   return item * 2
}
}

console.log(makeTreat("Chocolate"))
console.log(makeTreat(9))

//Own function overload

function registerStudent(item : string | boolean) : string| boolean{
    if (typeof item === "string"){
        return `The candidate to be registered is ${item}`
    } else{
        return item ? `The candidate is registered` : `The candidate is not registered`
    }
}
 console.log(registerStudent("Shakil"))
 console.log(registerStudent(false))


//Arrow Functions
let sayGreet =(name : string): string => `Kindly, could you tell me what's your ${name}`
console.log(sayGreet("Malcolm X"))

const summedEntries =(a : number , b: number) :any =>  a + b
console.log(summedEntries(4, 7))