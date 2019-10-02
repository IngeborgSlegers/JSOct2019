//* Return

let hi = () => {
  return 'hello';
//   1.
}

let newName = hi();
//     2.      3.

console.log(newName);

//1 - The return keyword brings our data out of our function
//2 - We need a new variable to hold the value of the return
//3 - When called, the function becomes the value of the return


function captializeName(name) {
  let capName = '';
  for (let l in name){
    if (l == 0){
      capName += name[l].toUpperCase();
    } else {
      capName += name[l].toLowerCase();
    }
  }
   console.log(capName) // Autumn
   return capName
}

// console.log(capName) // Error, not defined

const myName = captializeName('autumn');

console.log(myName + ' how are you doing?'); // Autumn how are you doing?