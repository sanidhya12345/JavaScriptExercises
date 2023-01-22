//Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case

var string="he";

answer=(string)=>{
    return string.length<3 ? string.toUpperCase() : string.substring(0,3).toLowerCase();
}
console.log(answer(string))