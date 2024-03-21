// Write your code here
// Challenge 1: Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

// Challenge 2: Create a variable called random that will generate a random integer greater than 0.
let random = Math.ceil(Math.random() * 100);

// Challenge 3: Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
let num3 = 64;
let num4 = 6;
let mod = num3 % num4;

// Challenge 4: Create a variable called max that finds the highest number in a set; the value returned should be 20.
let max = Math.max(2, 5, 10, 15, 20);

// Exporting variables for testing
module.exports = { multiply, random, mod, max };
