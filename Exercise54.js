//Write a JavaScript program to compute the exponent of a number. 

let exponent =(number,power)=>{
    if(power==0){
        return 1;
    }
    return number*exponent(number,power-1);
}
console.log(exponent(2,3))
