// A visitor receives a prompt upon opening the website to enter a list of comma-separated 
// froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
// When they view the browser console, they observe a table listing how many of each flavor they have 
// ordered. In this case, they will be able to observe that they have ordered three vanilla, two 
// coffee, and one strawberry froyo.



// INPUT: vanilla,vanilla,vanilla,strawberry,coffee,coffee
// OUTPUT: {vanilla:3, strawberry: 1 , coffee: 2}

let flavors = window.prompt("Enter your flavors below")

console.log(flavors)

