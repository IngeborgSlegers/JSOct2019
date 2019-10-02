/**************************
FOR OF LOOPS
**************************/

let student = {
  name: "peter",
  awesome: true,
  degree: "javaScript",
  week: 1
}

for (item of student) {
  console.log(item); //does not work because objects are not iterable
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat of catArray) {
  console.log(cat, 'says meow');
}