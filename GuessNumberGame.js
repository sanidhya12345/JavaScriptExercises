const readline=require('readline-sync');
let randomNumber=parseInt(Math.floor(Math.random(1,10)*10))
let guessNumber=Number(readline.question());
if(randomNumber===guessNumber){
    console.log("You guessed it right");
}
else{
    console.log("Try Again");
}