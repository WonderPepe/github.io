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
        var words = ['yes', 'no'];
        var randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    // Function to start the rolling icon animation
    function startRollingIconAnimation() {
        var icons = ['🔄', '⭕', '🔵', '🔴', '🔷', '🔶']; // Add more icons if needed
        var index = 0;
        var animationInterval = setInterval(function () {
            rollingIconSpan.textContent = icons[index];
            index = (index + 1) % icons.length;
        }, 200); // Change the interval as needed

        // Stop the animation after 3 seconds
        setTimeout(function () {
            clearInterval(animationInterval);
            rollingIconSpan.textContent = ''; // Clear the rolling icon
            randomWordSpan.textContent = getRandomWord();
        }, 3000);
    }

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        // Start the rolling icon animation
        startRollingIconAnimation();
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
