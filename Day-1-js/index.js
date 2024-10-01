var number = 10; //integer
console.log(number);
var name = 'faysal' //string
var bool = true //boolean

// The var keyword was used in all JavaScript code from 1995 to 2015.

//The let and const keywords were added to JavaScript in 2015.

//The var keyword should only be used in code written for older browsers.

let arr = [1,2,3]; //array
const obj = {     //object
    name:'faysal',
    age:12
}

let a=11;
let b = 5;
let c = '11'
let sum = a+b;
console.log(sum);
let Exponentiation = a**2;

 (a===b)?console.log('equal'):console.log("not equal");
//Adding Strings and Numbers
 console.log(a+c); // ans = 1011
 console.log(a==c); //ans = true  only value check
 console.log(a===c); //ans = false also check type
 
 const age = 30;
 if(age>20) {
     console.log('Young man');
     
 }
 const mark = 45
 if(mark<=100&&mark>=80) {
     console.log('A+');
     
 }
 else if(mark>=70) {
     console.log('A');
     
 }
 else if(mark>=60) {
     console.log('A-');
     
 }
 else if(mark>=50) {
     console.log('B');
     
 }
 else if(mark>=40) {
     console.log('B-');
     
 }
 else if(mark>=33) {
     console.log('C');
     
 }
 else if(mark>100) {
     console.log('Invalid mark');
     
 }
 else {
     console.log('F');
     
 }
 
 let x = 0;
 let text = ''
 switch (x) {
   case 0:
     text = "Off";
     break;
   case 1:
     text = "On";
     break;
   default:
     text = "No value found";
 }
 console.log(text);
 
 if (1 > 0 && 2 > 1) {
     console.log("Both conditions are true");
   } 
 
let sum1 = 0
for(let i=1;i<=10;i++) {
    if(i===3){
        break;
    }
    sum +=i;
    
}
console.log(sum);

let result = 1;
let i = 1
while(i<=10){
    result *=i;
}
console.log(result);

//function 
function sum3(a,b){
    return a+b;
}
console.log(sum3(5,7));

//anonymous function
(function() {
    console.log('Code runs!')
})();

// array and array method
let arr1 = ['A', 'B', 'C', 'D', 'E', 'F']
arr1.pop() //arr1 = ['A', 'B', 'C', 'D', 'E']
//return: ['F'] 
arr1.shift() //arr1=  ['B', 'C', 'D', 'E', 'F']
//return: ['A']
arr1.unshift('S','W')
//arr1 = ['S','W','B', 'C', 'D', 'E', 'F']
arr1.push("G") 
//array = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

//object method
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const person2 = {firstName: "Anne",lastName: "Smith"};

  Object.assign(person1,person2)

  //Object.entries() returns an array of the key/value pairs in an object
  let text1 = Object.entries(person1)
  // output : firstName,Anne,lastName,Smith,age,50,eyeColor,blue

  //Object.values() is similar to Object.entries(), but returns a single dimension array of the object values

  let text2 = Object.values(person1)

  //output : John,Doe,50,blue

  //The JavaScript for in statement loops through the properties of an Object
  const person = {fname:"John", lname:"Doe", age:25};

let text3 = "";
for (let x in person) {
  text3 += person[x];
}

//The JavaScript for in statement can also loop over the properties of an Array

//The JavaScript for of statement loops through the values of an iterable object
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//array of object 
const array2 = [
    {
        name:'faysal',
        age:12
    },
    {
        name:'bappy',
        age:20
    },
]