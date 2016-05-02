#include <stdio.h>

int main(void)
{
  float radius = 0.0f;  // the radius of the table
  float diameter = 0.0f;  // the diameter of the table
  float circumference = 0.0f; // the circumference of the table
  float area = 0.0f;  // the area of the table
  float Pi = 3.14159265f;

  printf("Input the diameter of the table:");
  scanf("%f", &diameter); // Read the diameter from the keyboard

  radius = diameter/2.0f; // calculate the radius
  circumference = 2.0f*Pi*radius; // calculate the circumference
  area = Pi*radius*radius;  // calculate the area

  printf("\nThe circumference is %.2f", circumference);
  printf("\nThe area is %.2f\n", area);
  return 0;
}
