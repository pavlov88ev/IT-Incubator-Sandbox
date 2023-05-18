/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
  let finalStr = "";
  for (i = str.length - 1; i >=0; i--) {
    finalStr += str[i];
  }
  return finalStr;
}