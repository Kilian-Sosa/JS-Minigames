let humanChoice;
let machineChoices= ['rockImg', 'paperImg', 'scissorsImg'];


const delay = async (ms = 150) =>
  new Promise(resolve => setTimeout(resolve, ms))

async function play(){
    if(!document.getElementById('rockChoice').checked && !document.getElementById('paperChoice').checked && !document.getElementById('scissorsChoice').checked){
        document.getElementById('result').textContent = "Debes elegir antes de pulsar el botón!";
        return;
    }
    
    if(document.getElementById('rockChoice').checked) humanChoice = "rock";
    else if(document.getElementById('paperChoice').checked) humanChoice = "paper";
    else humanChoice = "scissors";

    for (const choice of machineChoices) 
        document.getElementById(choice).style.display = 'none';
    document.getElementById('result').textContent = "";
    
    for(let i = 0; i < 20; i++)
        for (const choice of machineChoices) {
            document.getElementById(choice).style.display = 'block';
            await delay(150);
            document.getElementById(choice).style.display = 'none';
        }
    
    getResult();
}

function getResult(){
    let random = Math.round(Math.random() * 2);
    if(random == 0){
        document.getElementById('rockImg').style.display = 'block';

        if(humanChoice == "rock") document.getElementById('result').textContent = "Draw";
        else if(humanChoice == "paper") document.getElementById('result').textContent = "You won!";
        else document.getElementById('result').textContent = "You lose...";
    }else if(random == 1){
        document.getElementById('paperImg').style.display = 'block';

        if(humanChoice == "rock") document.getElementById('result').textContent = "You lose...";
        else if(humanChoice == "paper") document.getElementById('result').textContent = "Draw";
        else document.getElementById('result').textContent = "You won!";
    }else{
        document.getElementById('scissorsImg').style.display = 'block';

        if(humanChoice == "rock") document.getElementById('result').textContent = "You won!";
        else if(humanChoice == "paper") document.getElementById('result').textContent = "You lose...";
        else document.getElementById('result').textContent = "Draw";
    }
}

function reset(){
    location.reload();
}