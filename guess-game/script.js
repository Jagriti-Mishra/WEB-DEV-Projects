window.onload = function(){
let max = Number(prompt('Enter the random number'));

let random = Math.floor(Math.random()*max)+1;
let guess = prompt(`Enter the guessing number from the range 1- ${max}`);

while(true){
    if(guess === 'quit'){
        console.log('Quitting the game');
        break;
    }
    if(guess === random){
        console.log(`Congrats!!Your guess is right i.e #${random}`);
        break;
    }else if(guess < random){
        guess = prompt('your guess is lower .pls try again!');
    }else if(guess > random){
        guess = prompt('your guess is higher .pls try again!');
    }
    else if(guess != random){
        guess=prompt("Wrong guess. Please try again.");
    }
}
};