var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(num) {
    var exes = num.x
    var why = num.y
    var exesSquared = Math.pow(exes, 2)
    var whySquared = Math.pow(why, 2)
    var allSquared = exesSquared + whySquared
    var squareRoot = Math.sqrt(allSquared)
    return squareRoot;
  //}
  //for (var list in input[list].x) {
    //console.log(input[list].id ^ 2)
    //}
  //return num ^ 2;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);