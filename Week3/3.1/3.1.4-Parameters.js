// Named Parameters
// write a function that takes two named parameters:
function dylanFunction(param1, param2) {
// print each named parameter,
console.log(param1, param2);
}
// then return the parameters added together
return param1 + param2;
// invoke the function and pass in two numbers
let sumOf = dylanFunction(5, 4);
console.log(sumof);
// invoke the function and pass in more than two numbers
let sumOfMoreTwoNumbers = dylanFunction(5, 4, 20, 10)
console.log(sumOfMoreTwoNumbers);
// invoke the function and pass in only one number
let oneNum = dylanFunction(10);
console.log(oneNum);
// change the function to set default values for the parameters
function dylanFunction(param1 = 10, param2 = 4)
console.log(param1, param2);
return param1 + param2;
// again, invoke the function and pass in only one number
// Rest Operator
// add a rest operator to the function's parameters
function dylanFunction(param1, ...param2) {
console.log(param1);
console.log(param2);
return param1 + param2;
}

// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
let infiniteNums = dylanFunction(1, 2, 3, 4, 5, 6, 7, 8)
console.log(infiniteNums);
