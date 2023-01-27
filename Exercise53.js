//Write a JavaScript program to compute the sum of an array of integers.

let sum=function(array,index,s){
    if(index==array.length){
        console.log(s);
        return;
    }
    s+=array[index];
    sum(array,index+1,s);
}
const array=[1,2,3,4,5,6];
sum(array,0,0);