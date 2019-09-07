window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //If no audio key is hit, stop function from running.
    if(!audio) return;
});