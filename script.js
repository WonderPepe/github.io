// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and the button elements
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModalBtn');
    var span = document.getElementById('closeModalBtn');
    var rollingIconSpan = document.getElementById('rollingIcon');
    var randomWordSpan = document.getElementById('randomWord');
	var clickSound = document.getElementById('clickSound'); // Get the audio element

  // Function to get a random word
function getRandomWord() {
    var words = [
        'Tänään on kuppipäivä!',
        'Ei tänään. Mene suorinta tietä kotiin, suihkuun, nukkumaan ja lauantaina töihin.',
        'No kai sitä yhden vois ottaa.',
        'Ylös, ulos ja kupille!',
		'Fernentaatio kutsuu ja sinä vastaat.',
		'Tänään sauna on kuuma ja kalja kylmä.',
    ];
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}


  // Function to start the spinning beer bottle animation
    function startSpinningBeerBottleAnimation() {
        // Play the click sound
        clickSound.play();

        var beerBottleImage = document.getElementById('rollingIcon');
        var rotationAngle = 0;
        var animationInterval = setInterval(function () {
            beerBottleImage.style.transform = `rotate(${rotationAngle}deg)`;
            rotationAngle = (rotationAngle + 20) % 360;
        }, 50);

        // Stop the animation after 3 seconds
        setTimeout(function () {
            clearInterval(animationInterval);
            beerBottleImage.style.transform = '';
            randomWordSpan.textContent = getRandomWord();
        }, 2000);
    }

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        // Clear the content of randomWordSpan
        randomWordSpan.textContent = '';

        // Show the spinning beer bottle image
        rollingIconSpan.style.display = 'inline-block';

        // Start the spinning beer bottle animation
        startSpinningBeerBottleAnimation();
        modal.style.display = 'block';
    };

    // When the user clicks on the close button, close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
