import './menu-style.css';

const menu = (() => {
    const menuDOM = document.createElement('div');
    
    const header = document.createElement('h1');
    header.textContent = "Menu";

    menuDOM.appendChild(header);


    return {menuDOM};
})();



export default menu;