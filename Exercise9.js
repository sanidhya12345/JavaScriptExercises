// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string. 

var string="thon";
var substring=string.substring(0,2);
if(substring==="Py"){
    console.log(string);
}
else{
    console.log("Py"+string);
}