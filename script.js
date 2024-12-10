// first create a variable for the counter
let counter = 0;

document.addEventListener('DOMContentLoaded', function(){
// here we bring out all the ids
    const value = document.querySelector("#value"); // this is the id of the 0
    const btns = document.querySelectorAll(".btn"); // here we use queryselectorall to select the class 

    btns.forEach(function(btn){ //  here we gave the variable btns a foreach function 
        // which dictates when we click on a button
        btn.addEventListener( 'click', function(e){ // next add an event listener
            const style = e.currentTarget.classList;
            if ( style.contains("Decrease")) {
                counter--;
            } else if ( style.contains("Increase")) {
                counter++;
            } else {
               counter = 0;
            }
            if ( counter > 0) { 
                value.style.color = 'gold';
            } else if ( counter < 0) {
                value.style.color = 'red';
            } else {
                value.style.color = 'green';
            }
            value.textContent = counter;
        });

    });

});






 