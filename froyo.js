// A visitor receives a prompt upon opening the website to enter a list of comma-separated
// froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
// When they view the browser console, they observe a table listing how many of each flavor they have
// ordered. In this case, they will be able to observe that they have ordered three vanilla, two
// coffee, and one strawberry froyo.

// INPUT: vanilla,vanilla,vanilla,strawberry,coffee,coffee
// OUTPUT: {vanilla: 3, strawberry: 1 , coffee: 2}

//PROMPT USER FOR INPUT:
let flavors = window.prompt("Enter your flavors below");
flavors: ["vanilla", "strawberry", "coffee"];
//SPLIT THE ARRAY
let flavorsArray = flavors.split(",");
console.log(flavorsArray);

//USE OBJECT TO STORE THE COUNTS
const flavorCounts = {};

//LOOP THROUGH ARRAY & SINGLE INCREMENT FOR EACH COUNT
flavorsArray.forEach(function (flavor) {
  if (flavor) {
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  }
});

//PRINT/DISPLAY
console.table(flavorCounts);

// const arr = ["Vanilla, Vanilla, Vanilla, Stawberry, Coffee, Coffee"];
//

// const iceCream = {
//   flavors: ["vanilla", "strawberry", "coffee"],
// };

// console.log(Object.keys(iceCream));
