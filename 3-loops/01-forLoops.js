/**************************
FOR LOOPS
**************************/

// For loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition, is reached.

const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

/* There are many different kinds of loops but they all do roughly the same thing:
  *For statement
  *Do while statement
  *While statement
  *Labeled statement
  *Break statement
  *Continue statement
  *For in statement
  *For of statement
*/
// (initialization ; stopping condition; iteration statement)
for ( let i = 0; i < 10; i++ ) {
//1.      2.      3.      4.  
  console.log(i);
}

/*
* 1) The 'for' keyword
* 2) A variable initialization and declaration. 
* 3) The condition that needs to be met in order to end the loop.
* 4) This is where the number is going to update. This one is saying each time this loop runs, update i by one.
*/

//Challenge: using a for loop, count to 20, by 2's
for ( let i = 0; i <=20; i += 2 ) {
  console.log(i);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1's
for (let t = 10; t >= 0; t--) {
  console.log(t)
}

//Challenge: using a for loop, count from 0, going down by 2's to -24
for (let i = 0; i > -25; i -= 2) {
  console.log(i)
}

// Challenge: using a for loop, go through a name and display each letter individually
let name = 'Ingeborg';

for (let i = 0; i < name.length; i++) {
  console.log(name, i, name[i]);
  console.log(name.charAt(i));
  // console.log(name[i])
}

/*
Challenge: 
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/

let sum = 0;

for ( let i = 1; i <= 50; i++ ){
  console.log('sum:',sum, 'i:', i, 'sum += i:', sum = sum + i);
  console.log(sum += i)
}
console.log(sum);