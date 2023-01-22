//Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

var string='hello';
var character='f';
var find=string.substring(2,5);
if(find.indexOf(character)!=-1){
    console.log("Present");
}
else{
    console.log("Not present");
}
