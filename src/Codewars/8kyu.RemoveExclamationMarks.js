/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  let s2 = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      s2 += s[i];
    }
  }
  return s2;
}