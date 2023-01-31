//Write a JavaScript function to count the occurrence of a substring in a string.

function countSubstring(string,substring){
    var array=string.split(' ');
    let count=0;
    for(ele of array){
        if(ele.toLowerCase()==substring){
            count++;
        }
    }
    return count;
}

console.log(countSubstring("The quick brown fox jumps over the lazy dog","the"))