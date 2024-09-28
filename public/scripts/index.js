let body = $("body");
let colors = ["white","aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

$(document).ready(function () {
    $('html, body').animate({
        scrollTop: -200 // Change this value to scroll to a specific position
    }, 300);
    startCurrentTime();
});


//play button functionality
var playButton = $(".play-button");
let play = false;
var timerId = null;
var hour = 0;
var minute = 0;
var seconds = 0;
var timerLabel = $(".timer-label");

//function to create an interval and returns the id of the interval
function startInterval() {
    seconds++;
    if(seconds == 60) {
        minute++;
        if(minute == 60) {
            hour++;
        }
        minute %= 60;
    }
    seconds %= 60;
    timerLabel.text(`${hour}:${minute}:${seconds}`);

    let id = setInterval(()=> {
        seconds++;
        if(seconds == 60) {
            minute++;
            if(minute == 60) {
                hour++;
            }
            minute %= 60;
        }
        seconds %= 60;
        timerLabel.text(`${hour}:${minute}:${seconds}`);
    }, 1000);

    return id;
}

var restartButton = $(".restart-button");
restartButton.click(() => {
    minute = 0,hour = 0,seconds = 0;
    timerLabel.text("0:0:0");
    playButton.text("play");
    play = false;
    clearInterval(timerId);
});

playButton.click((event) => {
    if(!play) {
        timerId = startInterval();
        playButton.text("pause");
        play = true;
    } else {
        clearInterval(timerId);
        playButton.text("play");
        play = false;
    }
});


var timeLabel = $("#current-time");

    function startCurrentTime() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
    let year = currentDate.getFullYear();


    let formattedDate = `${day}-${month}-${year}`;
    let dateLabel = $("#date"); 
    dateLabel.text(formattedDate);

    setInterval(() => {
        let currentTime = new Date();
        var hour = currentTime.getHours();
        if(hour > 12) {
            hour -= 12;
        }
        var minute = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        timeLabel.text(`${hour}:${minute}:${seconds}`);
    },1000);
}


setInterval(() => {

    let circle = $('<div></div>'); //creating an element
    circle.addClass("circle");
    circle.css("top", "-200px");
    circle.css("left", Math.floor(Math.random()* 100)+"%");
    circle.css("background", colors[Math.floor(Math.random() * colors.length)]);

    body.append(circle);

    circle.animate({
        top: '200vh',
        opacity: 0.7
    }, 8000);

    setTimeout(() => {
        circle.remove();    
    }, 10000);

},500);

var isUp = true;

$('.clock').click(function () {

    if(isUp) {
        
        // Animate the scroll to 500px down over 1000ms (1 second)
        $('html, body').animate({
            scrollTop: 900 // Change this value to scroll to a specific position
        }, 600);

        $('.clock').animate({
            top: '180px'
        }, 600);
        isUp = false;
        $(".clock").text("Timer");
    } else {
       
        $('html, body').animate({
            scrollTop: -900 
        }, 600);

        $('.clock').animate({
            top: '-150px'
        }, 600);
        isUp = true;
        $(".clock").text("clock");
    }
});


