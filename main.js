function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; //Detiene la función
    audio.play();
    audio.currentTime=0; //Va al principio del audio
    key.classList.add('playing');
}

function removeTransition(){
    this.classList.remove('playing');
}

const keys= document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown', playSound);

