import './header-style.css'
const createButton = (text, parent) => {
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    parent.appendChild(button);
}

const RPHeader = (() => {
    let headerDOM = document.createElement("header");

    let nav = document.createElement("nav");
    headerDOM.appendChild(nav);

    createButton("Home", nav);
    createButton("Menu", nav);
    createButton("About", nav);
    createButton("Contact", nav);


    return {headerDOM};
})();

export default RPHeader;