/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/
/*
function countBs(str) {
  var count = 0;
  for (var letters = 0; letters < str.length; letters ++) {
    if (str.charAt(letters) == 'B') {
      count ++;
    }
  }
  return count;
}
*/

function countChar(str, char) {
  var count = 0;
  for (var letters = 0; letters < str.length; letters ++) {
    if (str.charAt(letters) == char) {
      count ++;
    }
  }
  return count;
}

function countBs(str) {
  return countChar(str, 'B');
}
