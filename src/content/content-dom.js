import "./content-style.css";
import homePage from "./home/home.js";
import menu from "./menu/menu.js";
import about from "./about/about.js";
import contact from "./contact/contact.js";

const content = (() => {
    const contentDOM = document.createElement("div");
    contentDOM.classList.add("content");
    const replaceContent = (newContent) => {
        contentDOM.textContent = "";
        contentDOM.appendChild(newContent);
    };
    const changeButtons = (button) => {
        if(lastClickedButton) lastClickedButton.disabled = false;
        button.disabled = true;
        lastClickedButton = button;
    };
    let homeButton;
    let menuButton;
    let aboutButton;
    let contactButton;
    let lastClickedButton;
    const assignButtons = () => {
        homeButton = document.querySelector(".home.nav-button")
        menuButton = document.querySelector(".menu.nav-button")
        aboutButton = document.querySelector(".about.nav-button")
        contactButton = document.querySelector(".contact.nav-button")
        homeButton.onclick = () => {
            replaceContent(homePage.homeDOM, homeButton);
            changeButtons(homeButton);
        };
        menuButton.onclick = () => {
            replaceContent(menu.menuDOM, menuButton);
            changeButtons(menuButton);
        };
        aboutButton.onclick = () => {
            replaceContent(about.aboutDOM, aboutButton);
            changeButtons(aboutButton);
        };
        contactButton.onclick = () => {
            replaceContent(contact.contactDOM, contactButton);
            changeButtons(contactButton);
        };
        // initial load;
        replaceContent(homePage.homeDOM);
        changeButtons(homeButton);
    };

    return {contentDOM, assignButtons};
})();



export default content;