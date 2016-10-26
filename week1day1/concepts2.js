/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */
var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = joinList(conceptList);

function joinList(subjects) {
  var combineList = "";
  for (var i = 0; i < subjects.length; i++) {
    if (i > 0 ) {
  combineList += ", "
  }
  combineList += subjects[i]
}
return combineList;
}

console.log("Today I learned about " + concepts + ".");


