//Write a JavaScript function to compute the factors of a positive integer. 

function factors(n){
    for(let i=1;i<=n;i++){
        if(n%i==0){
            console.log(i);
        }
    }
}
factors(45);