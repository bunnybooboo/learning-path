/* the main function */
int main(void)
{
    /* this is the beginning of a 'block' */
    
    int i = 6; /* this is the first variable of this 'block', 'i' */
    {
    /* this is a new 'block', and because it's a different block it has its own scope  */
    /* this is also a variable called 'i', but in a different 'block',
         because it's in a different block than the old 'i', it doesn't effect the old one!  */
    int i = 5;
    printf("%d\n", i); /* prints a 5 to the screen  */
    }
    /* now we're back into the old block  */
    
    printf("%d\n", i); /* prints a 6 to the screen  */

    return 0;
}

