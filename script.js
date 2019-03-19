const padsBtn = document.querySelector('.padsButton');
padsBtn.addEventListener('click', function() {
    const ul = document.querySelector('.padsUl');
    ul.classList.toggle('listDisplay');
});
padsBtn.addEventListener('click', createPads);

//Po kliknięciu na elemnet li - x, chcę odpalić funkcję do której przekażę wartość
// elementu x jako argument. Ta funkcja stworzy plansze z ilościę padów równą x.

//1. Potrzebuję na każdy li zapiąć addEventListener

function createPads(){
    const listItems = document.querySelectorAll('.padsLi');
    const listItemsLength = listItems.length;
    
    for (let i = 0; i <= listItemsLength; i++) {
        listItems.item(i).addEventListener('click', function(e){
            
            console.log(e.target.childNodes.text);
        })
    }
}



function sound(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const pad = document.querySelector(`.drum-pad[data-key='${e.keyCode}']`);

    if(!audio) return; 
    audio.currentTime = 0;
    audio.play();
    pad.classList.add('playing');
}

function removePlayingCSS(e){
    const pad = document.querySelector(`.drum-pad[data-key='${e.keyCode}']`);
   
   if(!pad) return;
    pad.classList.remove('playing');
    
}

window.addEventListener('keydown', sound);
window.addEventListener('keyup', removePlayingCSS);