// Logical Operators
// what do you expect each line to print?
console.log(true && false);
// False
console.log(true || false);
// True
console.log(!true);
// False
console.log(!(true && false));
// True
console.log(false || !false);
// True

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null);
// False
console.log(!``);
// Truth
console.log(!(1 && "false"));
// False
console.log(NaN || !"true");
// False

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 8
age > 10
? console.log("full menu")
: console.log("kids menu")

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0
? console.log("The number is zero.")

// Write your if statement here *
