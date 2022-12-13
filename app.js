const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

document.getElementById("btn").onclick = function(){
    let guess = document.getElementById("guess").value;
    guesses++;

    if(guess == answer){
        document.getElementById("message").innerHTML = (`${answer} Is the number it took you ${guesses} guesses`);
    }
    else if(guess < answer){
        document.getElementById("msg").innerHTML = ("Wrong");
        
    }
    else{
        document.getElementById("msg").innerHTML = ( "Wrong");
        
    }
}