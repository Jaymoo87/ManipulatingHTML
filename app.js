document.addEventListener("DOMContentLoaded", function (){

//create button with "nice" text content.
let button = document.createElement('button');
btntext = document.createTextNode('Press Me Nicely');
//add "nice" button to HTML
button.appendChild(btntext);
document.body.appendChild(button);

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
        
        
})

});