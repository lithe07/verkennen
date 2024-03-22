let aantal_clicks = 0;

function buttonStart(){
    console.log('Game started');
    if (mijnBody.classList.contains("black")){
        mijnBody.classList.toggle("yellow");
        aantal_clicks++;
        console.log(aantal_clicks);
    }

    if (aantal_clicks > 0){
        pakButton.innerText = "Pak me dan";
        setInterval(moveButton, 1000);
    }


function moveButton() {
  let newPositionX = Math.random() * (window.innerWidth - pakButton.offsetWidth);
  let newPositionY = Math.random() * (window.innerHeight - pakButton.offsetHeight);
 
  pakButton.style.left = newPositionX + 'px';
  pakButton.style.top = newPositionY + 'px';
}
 

    counter.innerText='aantal_cliks ' + aantal_clicks;
    pakButton.style.position = 'absolute';
    pakButton.style.top = Math.floor(Math.random() *90+5)+ '%';
    pakButton.style.left = Math.floor(Math.random() *90+5)+ '%';
}




pakButton.addEventListener('click', buttonStart);


 
 
 
 