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
    }

    const assignButtons = () => {
        document.querySelector(".home.nav-button").onclick = () => replaceContent(homePage.homeDOM);
        document.querySelector(".menu.nav-button").onclick = () => replaceContent(menu.menuDOM);
        document.querySelector(".about.nav-button").onclick = () => replaceContent(about.aboutDOM);
        document.querySelector(".contact.nav-button").onclick = () => replaceContent(contact.contactDOM);
    }
    // initial load
    replaceContent(homePage.homeDOM);
    
    return {contentDOM, assignButtons};
})();



export default content;