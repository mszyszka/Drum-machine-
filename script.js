const padsBtn = document.querySelector('.padsButton');
padsBtn.addEventListener('click', function() {
    const ul = document.querySelector('.padsUl');
    ul.classList.toggle('listDisplay');
});
padsBtn.addEventListener('click', createPads);

//Po kliknięciu na elemnet li - x, chcę odpalić funkcję do której przekażę wartość
// elementu x jako argument. Ta funkcja stworzy plansze z ilościę padów równą x.

//1. Potrzebuję na każdy li zapiąć addEventListener - done
//2.Potrzebuje do funkcji odpalanej na click przekazać event - done
//3.Potrzębuję napisać kod który stworzy plansze z ilościę padów równą wartości liValue

function createPads(){
    const listItems = document.querySelectorAll('.padsLi');
    const listItemsLength = listItems.length;
    
    for (let i = 0; i <= listItemsLength; i++) {
        listItems.item(i).addEventListener('click', function(e){
            
            let target = e.target;
            let firstChild = target.firstChild;
            let numberOfpads = firstChild.data;
            
            let drumPadsContainer = document.getElementsByClassName('drum-pads-container')[0];

            //Create pad element and add to it .drum-pad
            let padElement = document.createElement('div');
            padElement.classList.add('drum-pad');

            //Close .padsUl when user clicks on listItem
            document.querySelector('.padsUl').classList.remove('listDisplay');

            //Remove childs of drumPadsElemnt when user clicks on listItem to show only pointed number of pads
            // instead of add extra pads to already existing.
            while (drumPadsContainer.hasChildNodes()) {
               drumPadsContainer.removeChild(drumPadsContainer.firstChild);
            }

            for(let x = 0; x < numberOfpads; x++) {
                //Add to .drum-pads-container padElement's
                drumPadsContainer.appendChild(padElement.cloneNode());
            }
            
        });
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