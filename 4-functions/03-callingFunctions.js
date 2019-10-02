//* Calling Functions

function hi() {
  console.log('Hello');
  return "HEEEYYYYYY";
}
// hi(); //invoking/calling my function
console.log('second console.log', hi());



/*
Challenge:
Create a function that, when invoked, lists out the numbers 1-10
*/

function list() {
  for (let i = 1; i <=10; i++) {
    console.log(i);
  }
}

list();

/*
Challenge:
Given the array, create a function that lists out the values individually. 
*/

let arr = ['This', 'is', 'really', 'cool'];

function separate() {
  for (words of arr) {
    console.log(words);
  }
}

separate()