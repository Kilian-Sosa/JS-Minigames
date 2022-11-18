function guessRandom(numMin = 1, numMax = 100) {
    let random = Math.floor(Math.random() * numMax - numMin + 1) + numMin;
    let tries;
    
    for(tries = 0; tries < 6; tries++){
        answer = prompt("Write a number between " + numMin + " and " + numMax);
        num = parseInt(answer) || 0;

        if(num >= numMin && num <= numMax){
            if(num < random && tries < 6)
                alert("Try with a higher number than <" + num  + ">. Tries: " + (tries + 1));
            else if(num > random && tries < 6)
                alert("Try with a lower number than <" + num  + ">. Tries: " + (tries + 1));
            else break;
        } else 
            if(answer != null){
                alert("You need to write a number between " + numMin + " / " + numMax);
                tries--;
            }else return;    
        
    }
    
    num == random ? alert("Congrats! You guessed the number <" + random  + "> in " + tries + " tries."):
                    alert("Oh, looks like you run out of guesses. The number was: <" + random + ">, good luck next time!");   
}

function guessSpecificRandom(){
    document.getElementById("error").textContent = "";
    let min = parseFloat(document.getElementById("minNumber").value) || 0;
    let max = parseFloat(document.getElementById("maxNumber").value) || 0;

    if(min == 0 && max == 0)
        return document.getElementById("error").textContent = "You need to choose both numbers in order to use this function";
    if(min >= max)
        return document.getElementById("error").textContent = "The min number needs to be lower than the max";
    
    guessRandom(min, max);
}