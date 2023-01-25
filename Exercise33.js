//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function secondMaxSecondMin(array){
     array.sort();
     let ans=[];
     let secondMin=0;
     let secondMax=0;
     for(let i=0;i<array.length;i++){
        if(i==1){
            secondMin=array[i];
        }
        if(i==array.length-2){
            secondMax=array[i];
        }
     }
     ans.push(secondMin,secondMax);
     return ans;
}
const array=[1,3,4,5,6];
const ans=secondMaxSecondMin(array);
console.log(`Second Min is ${ans[0]}`)
console.log(`Second Max is ${ans[1]}`)