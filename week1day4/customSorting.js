//var students = [
 // { id: 1, name: "bruce",    age: 40 },
//   { id: 2, name: "zoidberg", age: 22 },
//   { id: 3, name: "alex",     age: 22 },
//   { id: 4, name: "alex",     age: 30 }
// ];

// //var studentNames = students.name
// var resultNames = students.map(function(studentNameInput) {
//   var studentName = studentNameInput.name
//   return studentName;
// });
// var resultAges = students.map(function(studentAgeInput) {
//   var studentAge = studentAgeInput.age
//   return studentAge;
// });

// var sortedNames = resultNames.sort();
//  //sortedNames.sort(function(a, b) {
//   // return a - b
//    //});

// var sortedAges = resultAges
//   sortedAges.sort(function(a, b) {
//     return a - b
//   });

// console.log(sortedNames, sortedAges);
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var studentSort = function(a,b){

 if (a.name < b.name) {
   return -1;
 }
 if (a.name > b.name) {
   return 1;
 }
 return b.age - a.age;

}



console.log(students.sort(studentSort));