//Write a JavaScript function to chop a string into chunks of a given length.

string=(str,length)=>{
    var array=[]
    for(let i=0;i<str.length;i++){
        array.push(str.substring(i,i+length))
    }
    return array;
}
str="hello"
console.log(string(str,2))