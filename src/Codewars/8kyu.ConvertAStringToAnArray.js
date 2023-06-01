/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string){
  if (string === "") {
     return [];
  }
  const arr = [];
  let tempStr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      arr.push(tempStr);
      tempStr = "";
      i++;
    }
    tempStr += string[i];
  }
  arr.push(tempStr);
  return arr;
}