//* Ternary
//* Ternary is a shorthand version of an if else if statement.

let w = 6;

if (w > 0) {
  console.log('yes');
} else {
  console.log('no');
}

(w > 0) ? console.log('yes') : console.log('no');

if ( w == 0) {
  console.log("Hello");
} else if (w < 0) {
  console.log('hi');
} else {
  console.log('Goodbye');
}

(w == 0) ? console.log('hello') : (w < 0) ? console.log('hi') : console.log('goodbye');

/* 
? Challenge: Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}

*/

(age >= 25) ? 
  console.log("Yay! You can rent a car!") : 
    (age >= 21) ? 
      console.log("Yay! You can drink!") : 
        (age >= 18) ? 
          console.log("Yay! You can vote!") : 
            console.log("Sorry, you're too young to do anything fun.");