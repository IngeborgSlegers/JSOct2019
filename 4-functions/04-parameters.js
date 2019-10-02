//* Parameters

function hi(name) {
//           1.
  console.log(`Hi ${name}!`); //string interpolation
//                   2.
}

hi('John');
//   3.
hi('Danielle');
hi('Kiana');
hi('Eli');

//1 - The parameter(s) we need to take into the function
//2 - Using string interpolation, we can refer to the parameter we passed
//3 - We define what the parameter's value will be.


function pet(animal) {
  console.log(`My pet's name is ${animal}!`);
}

pet('Georgie');
pet('Luna');
pet('Finn');

/*
Challenge:
Write a function that takes two parameters:
One parameter is for a first name,
The other parameter is for a last name;
Have them come together in a variable inside the function.
console.log 'Hello, my name is <YOUR NAME>';
Call your function 
*/

function introduction(fName, lName) {
  let fullName = fName + ' ' + lName;
  console.log(`Hello, my name is ${fullName}`);
}

introduction('Alan', 'Turing');
introduction('Inigo', 'Montoya');