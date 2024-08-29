
function resetTimer(button) 
{
    
    if (button.includes('Feed')) 
        {
            hunger = 0;
            console.log(hunger)
            
        }
    else if (button.includes('Pee') ) 
        {
            toiletNeed = 0;
            console.log(toiletNeed)
           
        } 
    else if (button.includes('Cuddle') )
        {
            restlessnes = 0;
            console.log(restlessnes)
            
        }
    else if (button.includes('Play') )
        {
            playTime = 0;
            console.log(playTime)
           
        }
        console.log(button)
}

function interval() 
{
    hungerInterval = setInterval(setHunger, 500);
    toiletInterval = setInterval(setToilet, 300);
    playInterval = setInterval(setPlayTime, 700);
    restlessnesInterval = setInterval(setOutsideTime, 200);

}

function gameOver()
{
    if (hunger >= 100 || restlessnes >= 100 || toiletNeed >= 100 || playTime >= 100) 
        {
            clearInterval(hungerInterval)
            clearInterval(toiletInterval)
            clearInterval(restlessnesInterval)
            clearInterval(playInterval)

            document.getElementById('app').innerHTML = /*html*/ 
            `
           <div class="gameOver"> Gaame Over!!</div> <br>
            <button onclick="location.reload()">Restart Game</button>
            `
        }
    

    
}