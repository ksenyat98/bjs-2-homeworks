"use strict"
function solveEquation(a, b, c) {
  let d = (b**2-4*a*c);
  let arr = [d];
  if (arr<0) {
    console.log ([' ']);
  }
    else if (arr=0) {
      let answer = (-b/(2*a));
      console.log ([answer]);
    }
      else if (arr>0) {
        let firstAnswer = ((-b + Math.sqrt(d) )/(2*a));
        let secondAnswer = ((-b - Math.sqrt(d) )/(2*a));
        console.log ([firstAnswer + secondAnswer]);

      }

  return arr;
}

console.log (solveEquation (-4, 0, -7));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}