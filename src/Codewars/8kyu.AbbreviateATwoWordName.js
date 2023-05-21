/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
  let letter1 = name[0].toUpperCase();
  let letter2 = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      letter2 = name[i+1].toUpperCase();
    }
  }
  return letter1 + "." + letter2;
}