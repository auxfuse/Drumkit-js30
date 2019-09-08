function playSound(e){

    //Local Variables for event Listener.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //If no audio key is hit, stop function from running.
    if(!audio) return;

    //Ensure the audio has a zero tick timeout.
    audio.currentTime = 0;

    //Call function to play on `keydown` of event Listener.
    audio.play();

    //When key is clicked, add class of playing to element to highlight to User of successful click.
    key.classList.add("playing");
};

function removeTransition(e) {

    if(e.propertyName !== "transform") return;

    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);


