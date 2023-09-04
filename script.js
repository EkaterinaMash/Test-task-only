const buttonsContainer = document.querySelector('.buttons-container');
const backgroundImage = document.querySelector('.background-image');

function setButtonsContainerWidth() {
    buttonsContainer.style.width = `${backgroundImage.offsetWidth}px`;
}

setButtonsContainerWidth();

window.onresize = function () {
    setButtonsContainerWidth();
}

buttonsContainer.onclick = function (event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.toggle('show-description');
    } else {
        if (buttonsContainer.querySelector('.show-description') !== null) {
            const showedDescriptions = buttonsContainer.querySelectorAll('.show-description');
            for (let description of showedDescriptions) {
                description.classList.remove('show-description');
            }
        }
    }
}

