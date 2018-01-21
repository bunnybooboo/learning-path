#include <stdio.h>

int main() {
  int a=23, b=3;
  int addition;
  int subtraction;
  int multiplication;
  int division;
  int modulus;
  float float_division;
  addition = a + b;
  subtraction = a - b;
  multiplication = a * b;
  division = a / b;
  modulus = a % b;
  float_division = 23.0 / 3.0;
  printf("Addition total = %d\n", addition);
  printf("Subtraction total = %d\n", subtraction);
  printf("Multiplication total = %d\n", multiplication);
  printf("Division total = %d\n", division);
  printf("Modulus total = %d\n", modulus);
  printf("Float Division total = %f\n", float_division);
  return 0;
}
