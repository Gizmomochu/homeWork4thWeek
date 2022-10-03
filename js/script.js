const welcome = () => {
    console.log("Witam wszystkich w mojej kolejnej pracy. Dzięki za wszystkie komentarze. PS. Na samym dole mała łamigłówka. :)");
}

let riddleButton1 = document.querySelector(".js-riddleButton1");
let riddleButton2 = document.querySelector(".js-riddleButton2");
let riddleButton3 = document.querySelector(".js-riddleButton3");
let riddleButton4 = document.querySelector(".js-riddleButton4");
let riddleButton5 = document.querySelector(".js-riddleButton5");
let riddleButton6 = document.querySelector(".js-riddleButton6");
let section1 = document.querySelector(".js-section1");
let section2 = document.querySelector(".js-section2");
let section3 = document.querySelector(".js-section3");
let section4 = document.querySelector(".js-section4");
let section5 = document.querySelector(".js-section5");
let award = document.querySelector(".js-award");



const changeTheme = () => {
    const body = document.querySelector(".body");
    const buttonColor = document.querySelector(".js-buttonColor");

    body.classList.toggle("dark");
    buttonColor.innerText = body.classList.contains("dark") ? "Jasny motyw" : "Ciemny motyw";
}

const hideImage = () => {
    const buttonImage = document.querySelector(".js-buttonImage");
    const imageChris = document.querySelector(".js-imageChris");

    imageChris.classList.toggle("hide");
    buttonImage.innerText = imageChris.classList.contains("hide") ? "Pokaż" : "Ukryj";
}

/*ukrywanie i pokazywanie rozdziałów oraz ukryta wiadomość*/
riddleButton1.addEventListener("click", () => {
    section1.classList.toggle("hide");
    riddleButton1.classList.toggle("button--Active");
    award.classList.toggle("riddle1--hide");
    console.log("Dobrze kombinujesz :)");
});

riddleButton2.addEventListener("click", () => {
    section2.classList.toggle("hide");
    riddleButton2.classList.toggle("button--Active");
    award.classList.toggle("riddle2--hide");
    console.log("Niestety :(");
});

riddleButton3.addEventListener("click", () => {
    section3.classList.toggle("hide");
    riddleButton3.classList.toggle("button--Active");
    award.classList.toggle("riddle3--hide");
    console.log("Niestety :(");
});

riddleButton4.addEventListener("click", () => {
    section4.classList.toggle("hide");
    riddleButton4.classList.toggle("button--Active");
    award.classList.toggle("riddle4--hide");
    console.log("Niestety :(");
});

riddleButton5.addEventListener("click", () => {
    section5.classList.toggle("hide");
    riddleButton5.classList.toggle("button--Active");
    award.classList.toggle("riddle5--hide");
    console.log("Dobrze kombinujesz :)");
});

const init = () => {
    const buttonImage = document.querySelector(".js-buttonImage");
    const buttonColor = document.querySelector(".js-buttonColor");
    buttonImage.addEventListener("click", hideImage);
    buttonColor.addEventListener("click", changeTheme);
    welcome();
}

init();