let arr1=[1,3,4,2];
let arr2=[2,4,5,6,4,9];
let ans=[];
for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
        ans.push(arr1[i]);
    }
}
for(let i=0;i<arr2.length;i++){
    if(!arr1.includes(arr2[i])){
        ans.push(arr2[i]);
    }
}
console.log(ans);