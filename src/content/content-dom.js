import "./content-style.css";
import homePage from "./home/home.js";

const content = (() => {
    const contentDOM = document.createElement("div");
    contentDOM.classList.add("content");
    const replaceContent = (newContent) => {
        contentDOM.textContent = "";
        contentDOM.appendChild(newContent);
    }
    // Write logic for switching sites, maybe with events
    replaceContent(homePage.homeDOM);
    return {contentDOM};
})();



export default content;