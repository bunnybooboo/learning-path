// Write a program that prompts for input of the length and width of a room in
// feet and inches, and then calculates and outputs the floor area in square yards with two
// decimal places after the decimal point.

#include <stdio.h>

int main(void) {
  float length = 0;
  float lengthInches = 0;
  float width = 0;
  float widthInches;
  float feet = 0;
  float inches = 0;
  float area = 0;

  const float inches_per_foot = 12;
  const float feet_per_yard = 3;

  printf("Please enter the LENGTH of the room in whole feet:\n");
  scanf("%f", &feet);
  printf("Please enter the LENGTH of the room in the remaining inches:\n");
  scanf("%f", &lengthInches);

  feet = inches/inches_per_foot;
  yards = feet/feet_per_yard;
  feet = feet % feet_per_yard;
  inches = inches % inches_per_foot;

  printf("Please enter the WIDTH of the room in whole feet:\n");
  scanf("%f", &feet);
  printf("Please enter the WIDTH of the room in the remaining inches:\n");
  scanf("%f", &inches);

  feet = inches/inches_per_foot;
  yards = feet/feet_per_yard;
  feet = feet % feet_per_yard;
  inches = inches % inches_per_foot;

  area = length * width;

  printf("The calculated area is: \n%.2f square yards\n", area);
  return 0;


}

// yes this is a work in progress!
