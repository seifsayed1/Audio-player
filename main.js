let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let play = document.getElementById("play");
let ctrl = document.getElementById("ctrl");

audio.onloadedmetadata = function() {
    progress.max = audio.duration;
    progress.value = audio.currentTime; 
}

ctrl.onclick = function() {
    if (play.classList.contains("fa-pause")) {
        audio.pause();
        play.classList.remove("fa-pause");  
        play.classList.add("fa-play");
    } else {
        audio.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
}

setInterval(() => {
    progress.value = audio.currentTime;   
},500)

progress.onclick = function() {
    audio.currentTime = progress.value;
    audio.play();
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
}