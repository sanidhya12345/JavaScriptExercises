//Write a JavaScript program to find the armstrong numbers of 3 digits

function armstrong_number(number){
    var copy=number;
    var sum=0;
    while(number!=0){
        var n=number%10;
        sum+=(n*n*n);
        number=parseInt(number/10);
    }
    return sum==copy;
}
console.log(armstrong_number(371));