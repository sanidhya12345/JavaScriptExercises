// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen

function printOddEven(){
    for(let i=0;i<=15;i++){
        if(i%2==0){
            console.log(`${i} is even`);
        }
        else{
            console.log(`${i} is odd`);
        }
    }
}
printOddEven()