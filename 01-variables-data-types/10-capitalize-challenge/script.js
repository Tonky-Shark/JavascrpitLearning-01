// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

//Make the first letter an uppercase in javascrpit

let downCase = myString.slice(1, 9);
let upCase = myString.charAt(0);
let myNewString = upCase.toUpperCase() + downCase;

console.log(myNewString);
