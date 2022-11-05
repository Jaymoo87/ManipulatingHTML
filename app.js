document.addEventListener("DOMContentLoaded", function (){

//create button with "nice" text content.
let button = document.createElement('button');
btntext = document.createTextNode('Press Me Nicely');
//add "nice" button to HTML
button.appendChild(btntext);
document.body.appendChild(button);

//create and insert div into the HTML
let div = document.createElement('div')
div.id = "colordiv"
document.body.appendChild(div)

div.addEventListener('mouseover', function(){

    div.style.backgroundColor = randomColor();
});


div.addEventListener('mouseleave', function(){

    div.style.backgroundColor = 'black';
});

//activates an alert window with a "nice?" message.
    button.addEventListener('click', function () {

                window.alert("Oh.. WOW.. that felt very good")
    });



    //gets button from HTML
    let msgbtn = document.getElementById("msgbtn");
    
    //click event to the submit button
    msgbtn.addEventListener('click', function(e) {
        
        // gets the value of the input (#textbox) element. (**.value**)
        let msgtext = document.getElementById("textbox").value;
        // alert window with #textbox value
        window.alert(msgtext);
        
        
});
function randomColor() {
    const r = [Math.floor(Math.random() * 256)];
    const g = [Math.floor(Math.random() * 256)];
    const b = [Math.floor(Math.random() * 256)];
    
    const headColor = "rgb(" + r + " , " + g + " , " + b + ")"
    return headColor;
    };

});