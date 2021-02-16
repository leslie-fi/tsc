let apples = 5;
let hasName: boolean = true;
let notMuchBro: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
console.log(now.toISOString())

// array
let colors: string[] = ['red', 'green', 'yellow', 'blue']
let myNumbers: number[] = [1,2,3,4,5]
let truths: boolean[] = [true, false]
//classes
class Car {

}
let car: Car = new Car();

// obj literal
let point: {x: number; y: number} = {
   x: 10, y: 2
  }

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// WHEN to use annotations
// 1) fn() that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: {x: number, y: number} = JSON.parse(json); 
console.log(coords)
// 2) when declare variable on 1 line and initialize later
let words = ['red', 'green', 'yellow']
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
// 3) Variable whose type cannot be inferred correctly
let numbs = [-10, -1, 12];
let numbsAboveZero: boolean | number = false;
for(let i = 0; i < numbs.length; i++) {
  if (numbs[i] > 0) {
    numbsAboveZero = numbs[i]
  }
}