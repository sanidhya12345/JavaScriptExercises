//Write a JavaScript function which says whether a number is perfect.

function perfectNumber(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            sum+=i;
        }
    }
    if(sum/2==n){
        return true;
    }
    return false;
}
console.log(perfectNumber(25))