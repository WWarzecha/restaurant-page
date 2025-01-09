import './header-style.css'
import logoAsset from '../img/top-logo.svg'

const createButton = (text, parent) => {
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.classList.add("nav-button");
    parent.appendChild(button);
}

const RPHeader = (() => {
    let headerDOM = document.createElement("header");

    let logo = document.createElement("img");
    logo.src = logoAsset;
    headerDOM.appendChild(logo);

    let nav = document.createElement("nav");
    headerDOM.appendChild(nav);

    createButton("Home", nav);
    createButton("Menu", nav);
    createButton("About", nav);
    createButton("Contact", nav);


    return {headerDOM};
})();

export default RPHeader;