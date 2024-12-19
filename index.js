// Preload audio sources
const srcArr = [
    'sounds/kick-bass.mp3',
    'sounds/crash.mp3',
    'sounds/snare.mp3',
    'sounds/tom-1.mp3',
    'sounds/tom-2.mp3',
    'sounds/tom-3.mp3',
    'sounds/tom-4.mp3'
];


function playSound(input) {
    switch (input) {
        case "w":
            var audio = new Audio(srcArr[0]);
            audio.play();
            break;
        case "a":
             var audio = new Audio(srcArr[1]);  
            audio.play();
            break;
        case "s":
            var audio = new Audio(srcArr[2]);
            audio.play();
            break;
            
        case "d":
                var audio = new Audio(srcArr[3]);
            audio.play();
            break;
        case "j":
            var audio = new Audio(srcArr[4]);
            audio.play();
            break;
        case "k":
            var audio = new Audio(srcArr[5]);
            audio.play();
            break;
        case "l":
            var audio = new Audio(srcArr[6]);
            audio.play();
            break;
    }
}

// Add event listeners to each button
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

 var buttoninnerHTML = this.innerHTML;

       playSound(buttoninnerHTML);

       buttonAnimation(buttoninnerHTML);
          
});
}
document.addEventListener("keypress", function(event) {

      playSound(event.key);
     buttonAnimation(event.key);
});


    function buttonAnimation(currentkey){

        var btn=document.querySelector("."+currentkey);

        btn.classList.add("pressed");

        setTimeout( function(){
                 btn.classList.remove("pressed");
            
        }, 100 )


    }