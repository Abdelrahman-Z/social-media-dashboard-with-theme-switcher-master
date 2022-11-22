let darkButton = document.querySelector(`.dark-mode .shape`)
darkButton.addEventListener(`click`, () => {
    document.querySelector(`.shape > div`).classList.toggle(`clicked`);
    document.querySelector(`nav.heading`).classList.toggle(`dark`);
    document.querySelector(`div.app`).classList.toggle(`dark`);
    document.querySelectorAll(`main.social .card`).forEach(card => {
        card.classList.toggle(`dark`);
    });
    document.querySelectorAll(`.cards .card`).forEach(card => {
        card.classList.toggle(`dark`);
    });
    document.querySelector(`.view .container h2`).classList.toggle(`dark`);
    document.querySelector(`.head-title`).classList.toggle(`dark`)
})