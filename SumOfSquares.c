#include<stdio.h>
int SumOfSquares(int x,int y){
    return (x*x)+(y*y);
}
void DoubleLoopPrint(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            printf("o");
        }
        printf("\n");
    }
}
int main(){
    int a=5,b=2;
    char c;
    printf("Sum of the squares of %d and %d = %d\n",a,b,SumOfSquares(a,b));
    printf("Enter an Integer: ");
    scanf("%d%c",&a,&c);
    printf("Enter another Integer: ");
    scanf("%d%c",&b,&c);
    printf("Sum of the squares of %d and %d = %d ",a,b,SumOfSquares(a,b));
    //printf("Enter the size of the square matrix: ");
    DoubleLoopPrint(a);
    return 0;
}