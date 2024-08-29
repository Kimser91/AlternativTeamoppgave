// autostart functions:
interval()
updateView()


function updateView() 
{
    document.getElementById('app').innerHTML = /*HTML*/ 
    `
    <div class="container">
    <div id="displayd" class="display">
      
    </div>
        
        <div class="baseline">

            <div class="divOuter" onclick="resetTimer(this.innerHTML)"> Pee </div>
            <div class="divOuter" onclick="resetTimer(this.innerHTML)"> Cuddle </div>
        </div>

        <div class="baseline">
            <div class="divOuter" onclick="resetTimer(this.innerHTML)"> Play </div>
            <div class="divOuter" onclick="resetTimer(this.innerHTML)"> Feed </div>
        </div>

    </div>
    `;
   
}


function displayView() 
{
    document.getElementById('displayd').innerHTML = /*html*/ 
    `
            Hunger: ${hunger}<br> 
            Play:   ${playTime}<br> 
            Pee:    ${toiletNeed}<br> 
            Cuddle:   ${restlessnes}    
    `
    gameOver();
}