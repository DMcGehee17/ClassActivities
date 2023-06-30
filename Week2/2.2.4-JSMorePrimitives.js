// create five variables and assign them values
let name = "Dylan"
let variableTwo = 4
let variableThree = true
let variableFour = undefined
let variableFive = null
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name, variableTwo, variableThree, variableFour, variableFive)
// create a variable that references a template literal
// inside the template literal, use two of the above variables
`"Hello ${name}," I am "${variableTwo}".`

// reassign the value of the variable that references "null"
variableFive = "Good"
// print the value and its type
console.log(variableFour, typeof "Good");
// print a variable that causes a ReferenceError
console.log(f);
let f;

// alter the previous line to no longer cause a ReferenceError
