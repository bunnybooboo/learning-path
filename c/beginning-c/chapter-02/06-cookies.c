#include <stdio.h>
int main(void)
{
  int cookies = 45; // number of cookies in the jar
  int children = 7; //number of children
  int cookies_per_child = 0;  //number of cookies per child
  int cookies_left_over = 0;  // number of coookies left over

  // Calculate how many cookies each child gets when they are divided up
  cookies_per_child = cookies/children; // Number of cookies per child
  printf("You have %d children and %d cookies\n", children, cookies);
  printf("Give each child %d cookies.\n", cookies_per_child);

  // Calculate how many cookies are left over
  cookies_left_over = cookies%children;
  printf("There are %d cookies left over.\n", cookies_left_over);
  return 0;
}
