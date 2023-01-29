//Write a JavaScript program to construct the following pattern, using a nested for loop.

/*

*  
* *  
* * *  
* * * *  
* * * * *  

*/

function create_Pattern(){
    string="";
    for(let i=0;i<5;i++){
        for(let j=0;j<i+1;j++){
            string+=' * ';
        }
        string+='\n';
    }
    return string;
}
console.log(create_Pattern())