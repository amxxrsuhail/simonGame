// declarations
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

$(".btn").click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

// functions
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(80).fadeIn(80);

    

}

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    var pressedButton =  $(`.${currentColour}`)
    $("btn").click(function () {
        pressedButton.addClass("pressed");
    })
    setTimeout(removeFunction, 100)
    function removeFunction() {
        pressedButton.classList.remove("pressed");
    }
}





