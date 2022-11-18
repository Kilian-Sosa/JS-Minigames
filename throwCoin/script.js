let choices= ['headsImg', 'tailsImg'];
const delay = async (ms = 200) =>
  new Promise(resolve => setTimeout(resolve, ms))

async function throwCoin(){
    document.getElementById('coinsImg').style.display = 'none';
    document.getElementById('headsImg').style.display = 'none';
    document.getElementById('tailsImg').style.display = 'none';
    document.getElementById('result').textContent = "";

    for(let i = 0; i < 6; i++)
        for (const choice of choices) {
            document.getElementById(choice).style.display = 'block';
            await delay(200);
            document.getElementById(choice).style.display = 'none';
        }
    
    getResult();
}

function getResult(){
    if(Math.round(Math.random()) == 0){
        document.getElementById('headsImg').style.display = 'block';
        document.getElementById('result').textContent = "Heads!";
    }else{
        document.getElementById('tailsImg').style.display = 'block';
        document.getElementById('result').textContent = "Tails!";
    }
}