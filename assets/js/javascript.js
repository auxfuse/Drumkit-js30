window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //If no audio key is hit, stop function from running.
    if(!audio) return;

    //Ensure the audio has a zero tick timeout.
    audio.currentTime = 0;

    //Call function to play on `keydown` of event Listener.
    audio.play();

    key.classList.add("playing");
});



