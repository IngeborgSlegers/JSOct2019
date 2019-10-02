//* Arrow Functions
coffee();

function coffee() {
  console.log('Coffee is good');
}

let coffee = () => {
  console.log('I love coffee');
}


cats(1, 12);

let cats = (kitten, puppy) => {
  console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)
}


//* concise and block body

//* concise body does not need parentheses, unless you have more than one parameter

//concise body
let apples = x => console.log(`There are ${x} apples.`);
apples(10);
//* More than one parameter will require parenthese
//* Return (if one-line chunky arrow function) is implied

//block body
let apples = (x) => { 
  console.log(`There are ${x} apples.`) 
};
apples(20);


//*Sidenote: LINEBREAKS ARE BAD

let func = () => console.log('hi'); //ok

let func = ()
  => console.log('hi'); // bad llama