//Write a JavaScript function which returns the n rows by n columns identity matrix

function identityMatrix(n){
    let array=[];
    for(let i=0;i<n;i++){
        let arr=Array();
        for(let j=0;j<n;j++){
            if(i==j){
                arr.push(1);
            }
            else{
                arr.push(0);
            }
        }
        array.push(arr);
    }
    return array;
}
console.log(identityMatrix(3));