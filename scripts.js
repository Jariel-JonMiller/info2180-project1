/* Add your JavaScript to this file */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let form = document.body.querySelector('btn');

    form.addEventListener('submit', function() {
        let msg = document.body.querySelector('.message');
        let emt_email = document.querySelector('#email').value;
        
        var btn = document.querySelector('button');
        var form = submitButton.closest('form');
        var message = document.querySelector('.message');

        if (emt_email == NULL) {
            let msgtxt = "Please enter a valid email address!";
            message.textContent = msgtxt;
            alert(msgtxt);
        }
        else{
            let msgtxt = `Thank you! Your email address $(email) has been added to our mailing list.`
            message.textContent = msgtxt;
            alert(msgtxt);
            }

    })

    //var form = but[a].parentNode;
    /*function handleForm(event) {event.preventDefault();}
    form.addEventListener('submit', handleForm);*/

});