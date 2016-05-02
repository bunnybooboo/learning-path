// Write a program that prompts the user to enter a distance in inches and
// then outputs that distance in yards, feet, and inches. (For those unfamiliar with imperial
// units, there are 12 inches in a foot and 3 feet in a yard.)

#include <stdio.h>

int main(void) {
  int inches = 0;
  int feet = 0;
  int yards = 0;

  const int inches_per_foot = 12;  // number of feet in inches
  const int feet_per_yard = 3;  // number of feet in a yard


  // prompt the user to enter a distance in inches
  printf("Hi! Please enter a distance in inches:\n");
  scanf("%d", &inches);

  // calculate
  feet = inches/inches_per_foot;
  yards = feet/feet_per_yard;
  feet = feet % feet_per_yard;
  inches = inches % inches_per_foot;

  // output distance in yards feet and inches
  printf("That distance converts to: %d yards, %d feet, and %d inches", yards, feet, inches);

  return 0;

}
