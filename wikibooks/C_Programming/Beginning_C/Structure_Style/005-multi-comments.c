#include <stdio.h>

int main(void)
{
    /************************************************************************************
     * Function: int main(void)
     * Input   : none
     * Output  : Returns 0 on success
     * Procedure: Prints "Hello, World!" and a new line to standard output then exits.
     ************************************************************************************/
    int i=0;                //Temporary variable used for 'for' loop.

    printf("Hello, World!");

    /* FOR LOOP (int i)
       Prints a new line to standard output, and exits */
    for (i=0; i<1; i++)
    {
        printf("\n");
        break;               //Exits 'for' loop.
    }

    return 0;
}
