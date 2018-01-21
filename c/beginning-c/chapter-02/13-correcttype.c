#include <stdio.h>
int main(void)
{
  const float Revenue_Per_150 = 4.5f;
  short JanSold = 23500;  // stock sold in January
  short FebSold = 19300;  // stock sold in February
  short MarSold = 21600;  // stock sold in March
  float RevQuarter = 0.0f;  // stock sold for the quarter
  // this next variable will cause an error in the output
  short QuarterSold = JanSold + FebSold + MarSold;  // Calculate quarterly total

  // Output monthly sales and total for the quarter
  printf("Stock sold in\n Jan: %d\n Feb: %d\n Mar: %d\n", JanSold, FebSold, MarSold);
  printf("Total stock sold in first quarter: %d\n", QuarterSold);

  // Calculate the total revenue for the quarter and output it
  RevQuarter = QuarterSold/150*Revenue_Per_150;
  printf("Sales revenue this quarter is:$%.2f\n", RevQuarter);
  return 0;
}
