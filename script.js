// script.js

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModalBtn');
    var span = document.getElementById('closeModalBtn');
    var rollingIconSpan = document.getElementById('rollingIcon');
    var randomWordSpan = document.getElementById('randomWord');
    var clickSound = document.getElementById('clickSound');
    var feedbackModal = document.getElementById('feedbackModal');
    var feedbackBtn = document.getElementById('feedbackBtn');
    var closeFeedbackModalBtn = document.getElementById('closeFeedbackModalBtn');
    var yesBtn = document.getElementById('yesBtn');
    var noBtn = document.getElementById('noBtn');
    var languageSwitch = document.getElementById('languageSwitch');
    var currentLanguage = 'fi';
    var italianFlag = document.getElementById('italianFlag');
    var noCapacityModal = document.getElementById('noCapacityModal');
    var russianFlag = document.getElementById('russianFlag');
    var slavaUkrainiModal = document.getElementById('slavaUkrainiModal');
    var closeSlavaUkrainiModalBtn = document.getElementById('closeSlavaUkrainiModalBtn');
    var closeNoCapacityModalBtn = document.getElementById('closeNoCapacityModalBtn');

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

    function startSpinningBeerBottleAnimation() {
        clickSound.play();

        var beerBottleImage = document.getElementById('rollingIcon');
        var rotationAngle = 0;
        var animationInterval = setInterval(function () {
            beerBottleImage.style.transform = `rotate(${rotationAngle}deg)`;
            rotationAngle = (rotationAngle + 20) % 360;
        }, 50);

        setTimeout(function () {
            clearInterval(animationInterval);
            beerBottleImage.style.transform = '';
            randomWordSpan.textContent = getRandomWord();
        }, 2000);
    }

    btn.onclick = function () {
        randomWordSpan.textContent = '';
        rollingIconSpan.style.display = 'inline-block';
        startSpinningBeerBottleAnimation();
        modal.style.display = 'block';
    };

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        // Close the "Slava Ukraini" modal if the user clicks outside of it
        if (event.target === slavaUkrainiModal) {
            slavaUkrainiModal.style.display = 'none';
        }

        // Close the "No Capacity" modal if the user clicks outside of it
        else if (event.target === noCapacityModal) {
            noCapacityModal.style.display = 'none';
        }

        // Close the main modal if the user clicks outside of it
        else if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    feedbackBtn.onclick = function () {
        feedbackModal.style.display = 'block';
    };

    closeFeedbackModalBtn.onclick = function () {
        feedbackModal.style.display = 'none';
    };

    yesBtn.onclick = function () {
        showFeedbackMessage(currentLanguage === 'fi' ? 'Komjaa!' : 'Thanks for your feedback!');
    };

    noBtn.onclick = function () {
        showFeedbackMessage(currentLanguage === 'fi' ? 'Aha no sit se on just niin.' : 'Sorry to hear that.');
    };

    function showFeedbackMessage(message) {
        alert(message);
        feedbackModal.style.display = 'none';
    }

    languageSwitch.onclick = function () {
        currentLanguage = currentLanguage === 'fi' ? 'en' : 'fi';

        btn.textContent = currentLanguage === 'fi' ? 'Koit onnees!' : 'Try your luck!';
        feedbackBtn.textContent = currentLanguage === 'fi' ? 'Anny palautet' : 'Give feedback';
    };

    russianFlag.onclick = function () {
        // Display the "Slava Ukraini" modal
        slavaUkrainiModal.style.display = 'block';
    };

    // Add close event for the "Slava Ukraini" modal
    closeSlavaUkrainiModalBtn.onclick = function () {
        slavaUkrainiModal.style.display = 'none';
    };

    italianFlag.onclick = function () {
        // Display the "No Capacity" modal
        noCapacityModal.style.display = 'block';
    };

    // Add close event for the "No Capacity" modal
    closeNoCapacityModalBtn.onclick = function () {
        noCapacityModal.style.display = 'none';
    };
});
