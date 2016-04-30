/* Define a recursive function isEven. Zero is even, One is odd, for any other number (n)
its evenness is the same as n-2. The function should accept a number parameter and return a Boolean */

/*
my faulty attempt

function isEven() {
  if (n == 0) {
    return true;
  }
  else if (n == 1) {
    return false;
  }
  else {
    if ((n-2) % 2 = 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
*/

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
