/* 
Create a function makeRectangle that will print an m by n rectangle of * to the screen

For example, makeRectangle(3,5) should print a 3 by 5 rectangle of *, as shown below:

 * * *
 * * *
 * * *
 * * *
 * * *

Try to complete this task without using for loops!
*/

function makeRectangle(m, n) {
  let rectangleArray = [];
  for (let i = 0; i < n; i++) {
    rectangleArray.push(Array(m).fill("*").join(" "));
  }
  return rectangleArray.join("\n");
}

console.log(makeRectangle(14, 4));
console.log(makeRectangle(4, 4));
console.log(makeRectangle(10, 4));
console.log(makeRectangle(4, 6));
console.log(makeRectangle(14, 4));

// invoke the function below to test it
