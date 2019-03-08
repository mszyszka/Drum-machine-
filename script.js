function sound(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const pad = document.querySelector(`.drum-pad[data-key='${e.keyCode}']`);
    console.log(pad);
    console.log(e.keyCode);

    if(!audio) return; 
    audio.currentTime = 0;
    audio.play();
    pad.classList.add('playing');
}

function removePlayingCSS(e){
    const pad = document.querySelector(`.drum-pad[data-key='${e.keyCode}']`);
    pad.classList.remove('playing');
    
}
window.addEventListener('keydown', sound);
window.addEventListener('keyup', removePlayingCSS);


