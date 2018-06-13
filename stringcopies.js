//Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

function stringCopies (str, number)
{
  if (number < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(stringCopies("abc", 5));
console.log(stringCopies("abc", 0));
console.log(stringCopies("abc", -2));
