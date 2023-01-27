// Write a JavaScript program to get the integers in range (x, y).

function printInteger(array,start,end){
    if(start>end){
        console.log(array[start])
        return;
    }
    console.log(array[start]);
    printInteger(array,start+1,end-1);
}
const array=[1,2,3,4,5,6,7,8,9];
printInteger(array,1,5);