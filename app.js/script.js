// Global variables
let i = 0;

let text = 'Predict the future by creating it!';

let speed = 50;

/**
 * 
 */

function quotewriter() {
    if ( i < text.length) {
        document.getElementById('quote').innerHTML += text.charAt(i);
        i++;

        setTimeout(quotewriter, speed);
    }
}

window.onload = function() {
    setTimeout(quotewriter, 2000);
    // let formInput = document.querySelector('.form-input input');
    // formInput.display
}