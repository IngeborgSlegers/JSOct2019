/**************************
FOR IN LOOPS
**************************/
//* Great for iterating over values in an object

let student = {
  name: "Peter",
  awesome: true,
  degree: "JavaScript",
  week: 1
}

for (element in student) {
  console.log('element', element);
  console.log('student[element]', student[element]);
}

let dogArray = ['collie', 'pitbull', 'newfie', 'dachshund', 'shiba inu'];
for (dog in dogArray) {
  console.log(dog);
}

/*
Challenge:
Write a for in loop that capitalizes the first letter of a student's name
*/

let studentName = 'pAuL';
let newName = '';

for (i in studentName) {
  if(i == 0) {
    newName += studentName[i].toUpperCase();
    console.log(studentName[i], newName);
  } else {
    newName += studentName[i].toLowerCase();
    console.log(studentName[i], newName)
  }
  
  console.log(i, studentName[i]);
}
console.log(newName);

for (let i = 0; i < studentName.length; i++) {
  if(i == 0) {
    newName = newName + studentName[i].toUpperCase();
    console.log(studentName[i], newName);
  } else {
    newName += studentName[i].toLowerCase();
    console.log(studentName[i], newName)
  }
}