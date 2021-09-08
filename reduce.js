  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);
// acc = accumulator
// curr = current value
console.log(sum); //10

let sumSteps = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current item:", curr,
    "Total:", acc + curr,
  );
  return acc + curr;
}, 0);

console.log(sumSteps);

// Accumulator: 0 Current item: 1 Total: 1
// Accumulator: 1 Current item: 2 Total: 3
// Accumulator: 3 Current item: 3 Total: 6
// Accumulator: 6 Current item: 4 Total: 10
// 10

// if 0 is added as the initial value, gives the following:
// Accumulator: 0 Current item: 0 Total: 0
// Accumulator: 0 Current item: 1 Total: 1
// Accumulator: 1 Current item: 2 Total: 3
// Accumulator: 3 Current item: 3 Total: 6
// Accumulator: 6 Current item: 4 Total: 10
// 10

// specify the initial value of the accumulator:
let sumFinal = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sumFinal); //10


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
// total all the experience the team has as a whole
let totalYrsExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalYrsExp); // 16

// Grouping by a property, and totaling it too
let expByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  // if the key isn't already there, then set the key to current member's years 
  // (this will be the first time that profession is added)
  // otherwise, add the current member's years to existing value
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
// second set of curly braces above is the initial value - an empty object

console.log(expByProfession); //{ Developer: 12, Designer: 4 }