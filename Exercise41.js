// Write a JavaScript function that returns array elements larger than a number.

function largerThanNumber(array,number){
    for(el of array){
        if(el>number){
            console.log(el);
        }
    }
}
const array=[1,2,3,4,5,6,7];
largerThanNumber(array,3)