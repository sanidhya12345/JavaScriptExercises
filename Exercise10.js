//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

var string="hello";
var pos=3;
if(string.length<pos){
    console.log("The length of string is less than the position you want to delete");
}
else{
    var ch=string.charAt(pos);
    var newString=string.replace(ch,"");
    console.log(newString);
}