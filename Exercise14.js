// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

var n1=13;
var n2=243;
var n3=4333;

if((n1%10===n2%10)&& (n2%10===n3%10) &&(n3%10===n1%10)){
    console.log("All are same");
}
else{
    console.log("All are not same")
}