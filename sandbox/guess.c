# include <stdio.h>
# include <stdlib.h>

int main(){
	extern int answer = &rand(1-101);
	puts(answer);
	return 0;	
}
