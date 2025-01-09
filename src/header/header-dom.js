import './header-style.css';
import logoAsset from '../img/top-logo.svg';

const createButton = (text, parent) => {
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.classList.add(text.toLowerCase());
    button.classList.add("nav-button");
    parent.appendChild(button);
    return button;
}

const RPHeader = (() => {
    let headerDOM = document.createElement("header");

    let logo = document.createElement("img");
    logo.src = logoAsset;
    logo.alt = "The Odin Project Logo";
    headerDOM.appendChild(logo);

    let nav = document.createElement("nav");
    headerDOM.appendChild(nav);
    const navButtons = {home: "Home", menu: "Menu", about: "About", contact: "Contact"}
    Object.entries(navButtons).forEach(entry => {
        const [key, value] = entry;
        navButtons[key] = createButton(value, nav);        
    });

    return {headerDOM, navButtons};
})();

export default RPHeader;