/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

function narcissistic(value) {
  // Code me to return true or false
  const str = String(value);
  let summ = 0;
  let product = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      product *= str[i];  //возводим каждую цифру в степень, равную кол-ву цифр в числе
    }
    summ += product;  // складываем все цифры числа, возведенные в степень
    product = 1;
  }
  if (summ === value) {   //проверяем равенство исходного числа с числом, полученным после сложения всех цифр возведенных в степень
    return true;
  } else {
    return false;
  }
}
