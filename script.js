// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and the button elements
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModalBtn');
    var span = document.getElementById('closeModalBtn');
    var rollingIconSpan = document.getElementById('rollingIcon');
    var randomWordSpan = document.getElementById('randomWord');

    // Function to get a random word ("yes" or "no")
    function getRandomWord() {
        var words = ['Tänään on kuppipäivä!', 'Ei tänään. Mene suorinta tietä kotiin, suihkuun, nukkumaan ja lauantaina töihin'];
        var randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    // Function to start the spinning beer bottle animation
    function startSpinningBeerBottleAnimation() {
        var beerBottleImage = document.getElementById('rollingIcon');
        var rotationAngle = 0;
        var animationInterval = setInterval(function () {
            beerBottleImage.style.transform = `rotate(${rotationAngle}deg)`;
            rotationAngle = (rotationAngle + 10) % 360;
        }, 50); // Change the interval as needed

        // Stop the animation after 3 seconds
        setTimeout(function () {
            clearInterval(animationInterval);
            beerBottleImage.style.transform = ''; // Clear the rotation
            randomWordSpan.textContent = getRandomWord();
        }, 3000);
    }

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        // Clear the content of randomWordSpan
        randomWordSpan.textContent = '';

        // Start the spinning beer bottle animation
        startSpinningBeerBottleAnimation();
        modal.style.display = 'block';
    }

    // When the user clicks on the close button, close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});
