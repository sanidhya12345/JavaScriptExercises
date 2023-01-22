//Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1. 

var string="hello";
if(string.length<=1){
    console.log("enter the string having length greater than 1");
}
else{
    var firstchar=string.charAt(0);
    var lastchar=string.charAt(string.length-1);
    var newString="";
    for(let e of string){
        if(e===firstchar){
            newString+=lastchar;
        }
        else if(e===lastchar){
            newString+=firstchar;
        }
        else{
            newString+=e;
        }
    }
    console.log(newString);
}