//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

var c=60
var f=45

changectof=(c)=>{
    return 9/5*c+32;
}
changeftoc=(f)=>{
    return 5/9*(f-32);
}
console.log(`${c} deg C changes to ${changectof(c)} deg F`);
console.log(`${f} deg F changes to ${changeftoc(f)} deg C`);