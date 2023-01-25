//Write a JavaScript code to extract unique characters from a string.

let s="thequickbrownfoxjumpsoverthelazydog"
const ans=[];
for(ch of s){
    if(ans.indexOf(ch)==-1){
        ans.push(ch)
    }
}
let a=""
for(ch of ans){
    a+=ch;
}
console.log(a);