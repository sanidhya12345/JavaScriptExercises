//Write a JavaScript function to  get the number of occurrences of each letter in specified string.

function countOccurrences(string){
    var array=new Set();
    for(let i=0;i<string.length;i++){
        var count=0;
        for(let j=0;j<string.length;j++){
            if(string.charAt(i)===string.charAt(j)){
                count++;
            }
        }
        array.add(`Occurrence of ${string.charAt(i)} is ${count}`)
    }
    return array;
}
var string="helloworld";
console.log(countOccurrences(string))