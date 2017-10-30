var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

/*
Browser Support:
    Google Chrome +
    Mozilla Firefox +
    Opera +/-
    Safari +/-
    MSIE -
*/


//JS for audio play/pause button
window.onload = function() {
    var play = document.getElementsByClassName("j-play")[0],
        pause = document.getElementsByClassName("j-pause")[0],
        audio = document.getElementsByClassName("j-audio")[0];
  
    play.addEventListener("click", function(e){
        audio.play();
        play.style.display = "none";
        pause.style.display = "block";
    });
    
    pause.addEventListener("click", function(e){
        audio.pause();
        pause.style.display = "none";
        play.style.display = "block";
    });

  
    //JS for MSIE
    var ieVersion = (function() { if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) { return parseFloat( RegExp.$1 ); } else { return false; } })();
  
    if (ieVersion) {
        console.log('Internet Explorer not supported');
        document.getElementsByClassName("l-wrapper")[0].innerHTML = '<div class="b-ie">Internet Explorer not supported</div>';
    }
}