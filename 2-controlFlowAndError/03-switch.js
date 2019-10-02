/* *********************
 ? SWITCH
********************* */

switch (key) {
  case value:
    
    break;

  default:
    break;
}


let friend = 'Bob';

switch (friend) {
  case "Autumn": 
    console.log("Hey Autumn, when are we going rock wall climbing?");
    break;
  case "Danielle":
    console.log("Hey Danielle, how is Finn?");
    break;
  case "Josh":
    console.log("Hey Josh, let's go to Target!");
    break;
  // default:
  //   console.log(`I'm sorry, ${friend}, but do I know you?`);
}


/*
? Challenge:
? Write a dessert menu;
? If the dessert is pie, console.log 'Pie, pie, me oh my!'
? If the dessert if cake, console.log 'Cake is great!'
? If the dessert is ice cream, console.log 'I scream for ice cream!'
? Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = 'ice cream';

switch(dessert) {
  case 'pie':
    console.log("Pie, Pie, Me oh my!");
    break;
  case 'cake':
    console.log("cake is great!");
    break;
  case 'ice cream':
    console.log("I scream for ice cream!");
    break;
  default:
    console.log('Not on the menu');
}

let yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didn\'t work');
}

// ? Self Practice:
// ? Try to rewrite the age challenge from earlier with a switch