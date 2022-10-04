{
    const welcome = () => {
        console.log("Witam wszystkich w mojej kolejnej pracy. Dzięki za wszystkie komentarze. PS. Na samym dole mała łamigłówka. Dodatkowo zmodyfikowałem całego JS :)");
    }

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

    const wrongButton = () => {
        console.log("Niestety :(");
    }

    const goodButton = () => {
        console.log("Dobrze kombinujesz :)");
    }

    const hideSection = (section) => {
        section.classList.toggle("hide");
    }

    const activeButton = (button) => {
        button.classList.toggle("button--Active");
    }

    const riddleButtons = () => {
        const riddleButton1 = document.querySelector(".js-riddleButton1");
        const riddleButton2 = document.querySelector(".js-riddleButton2");
        const riddleButton3 = document.querySelector(".js-riddleButton3");
        const riddleButton4 = document.querySelector(".js-riddleButton4");
        const riddleButton5 = document.querySelector(".js-riddleButton5");
        const section1 = document.querySelector(".js-section1");
        const section2 = document.querySelector(".js-section2");
        const section3 = document.querySelector(".js-section3");
        const section4 = document.querySelector(".js-section4");
        const section5 = document.querySelector(".js-section5");
        const award = document.querySelector(".js-award");

        riddleButton1.addEventListener("click", () => {
            hideSection(section1);
            activeButton(riddleButton1);
            award.classList.toggle("riddle1--hide");
            goodButton();
        });

        riddleButton2.addEventListener("click", () => {
            hideSection(section2);
            activeButton(riddleButton2);
            award.classList.toggle("riddle2--hide");
            wrongButton();
        });

        riddleButton3.addEventListener("click", () => {
            hideSection(section3);
            activeButton(riddleButton3);
            award.classList.toggle("riddle3--hide");
            wrongButton();
        });

        riddleButton4.addEventListener("click", () => {
            hideSection(section4);
            activeButton(riddleButton4);
            award.classList.toggle("riddle4--hide");
            wrongButton();
        });

        riddleButton5.addEventListener("click", () => {
            hideSection(section5);
            activeButton(riddleButton5);
            award.classList.toggle("riddle5--hide");
            goodButton();
        });
    }

    const init = () => {
        const buttonImage = document.querySelector(".js-buttonImage");
        const buttonColor = document.querySelector(".js-buttonColor");
        buttonImage.addEventListener("click", hideImage);
        buttonColor.addEventListener("click", changeTheme);
        riddleButtons();
        welcome();
    }

    init();
}