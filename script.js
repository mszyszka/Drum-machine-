//Po kliknięciu na elemnet li - x, chcę odpalić funkcję do której przekażę wartość
// elementu x jako argument. Ta funkcja stworzy plansze z ilościę padów równą x.

//1. Potrzebuję na każdy li zapiąć addEventListener - done
//2.Potrzebuje do funkcji odpalanej na click przekazać event - done
//3.Potrzębuję napisać kod który stworzy plansze z ilościę padów równą wartości liValue - done


//Toggle .listDisplay on .pads-ul element
function displayingPadsUl() {
    const ul = document.querySelector('.pads-ul');
    const li = document.querySelector('.pads-ul li');

    ul.classList.toggle('listDisplay');
    li.classList.toggle('listDisplay');

}

function createPadsElements(e){
            
    let target = e.target;
    let firstChild = target.firstChild;
    let numberOfpads = firstChild.data;
    
    let drumPadsContainer = document.getElementsByClassName('drum-pads-container')[0];

    //Create pad element and add to it .drum-pad
    let padElement = document.createElement('div');
    padElement.classList.add('drum-pad');

    //Close .pads-ul when user clicks on listItem
    document.querySelector('.pads-ul').classList.remove('listDisplay');

    //Check if .drum-pad-container already have additional class
    for(let i = 0; i < 12; i++){
        let containAdditionalClass = drumPadsContainer.classList.contains(`grid-for-${i}-pads`);
        if (containAdditionalClass == true) drumPadsContainer.classList.remove(`grid-for-${i}-pads`);

    }
    //Add proper CSS properties to .drum-pads-container, to create proper grid
    drumPadsContainer.classList.add(`grid-for-${numberOfpads}-pads`);

    //Remove childs of drumPadsElemnt when user clicks on listItem to show only pointed number of pads
    // instead of add extra pads to already existing.
    while (drumPadsContainer.hasChildNodes()) {
       drumPadsContainer.removeChild(drumPadsContainer.firstChild);
    }

    for(let x = 0; x < numberOfpads; x++) {
        //Add to .drum-pads-container padElement's
        drumPadsContainer.appendChild(padElement.cloneNode());
    }
}

function addClickEventToListItems(){
    const listItems = document.querySelectorAll('.padsLi');
    listItems.forEach( item => item.addEventListener('click', createPadsElements));
}

const padsBtn = document.querySelector('.pads-button');
//After click on .pads-button execute displayingPadsUl()
padsBtn.addEventListener('click', displayingPadsUl);
padsBtn.addEventListener('click', addClickEventToListItems);



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