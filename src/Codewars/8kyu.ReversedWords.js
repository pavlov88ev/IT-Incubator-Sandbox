/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.
*/

function reverseWords(str){
  let tempStr = "";
  const arrStr = [];
  let newStr = "";
  if (str === "") {
    return "";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      tempStr += str[i];
    } else {
      arrStr.push(tempStr);
      tempStr = "";
    }
    if (i === str.length - 1) {
      arrStr.push(tempStr);
    }
  }
  for (let i = arrStr.length - 1; i > 0; i--) {
    newStr += arrStr[i] + " ";
  }
  return newStr + arrStr[0];
}