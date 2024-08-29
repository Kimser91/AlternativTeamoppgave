let hungerInterval;
let toiletInterval;
let playInterval;
let restlessnesInterval;
let hunger = 0;
let playTime = 0;
let toiletNeed = 0;
let restlessnes = 0;


function setHunger() 
{
 hunger ++;
 displayView();
}

function setToilet() 
{
 toiletNeed ++;
 displayView();
}

function setPlayTime() 
{
 playTime ++;
 displayView();
}

function setOutsideTime() 
{
 restlessnes ++;
 displayView();
}