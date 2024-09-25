let body = $("body");
let colors = ["white","aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

$(document).ready(function () {
    $('html, body').animate({
        scrollTop: -200 // Change this value to scroll to a specific position
    }, 300);

});


setInterval(() => {

    let circle = $('<div></div>');
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
var lock = false;

$('button').click(function () {

    
    if(isUp) {
        
        // Animate the scroll to 500px down over 1000ms (1 second)
        $('html, body').animate({
            scrollTop: 900 // Change this value to scroll to a specific position
        }, 600);

        $('button').animate({
            top: '180px'
        }, 600);
        isUp = false;
    } else {
        
        $('html, body').animate({
            scrollTop: -900 
        }, 600);

        $('button').animate({
            top: '-150px'
        }, 600);
        isUp = true;
    }
});
