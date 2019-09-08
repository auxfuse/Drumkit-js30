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

    //If propertyName is not equal to transform then return and do nothing.
    if(e.propertyName !== "transform") return;

    //otherwise, remove class of "playing" from key variable.
    this.classList.remove("playing");
}

//Creation of "keys" variable to hold and call all elements with the class of ".key".
const keys = document.querySelectorAll(".key");

//Loop through each key and listen for transition end and then evoke removeTransition function.
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

//Event listener on keydown of keyboard to evoke playSound function.
window.addEventListener("keydown", playSound);