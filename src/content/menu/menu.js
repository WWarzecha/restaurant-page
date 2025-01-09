import './menu-style.css';
import menuImage from '../../img/menu-image.jpg'

const menu = (() => {
    const menuDOM = document.createElement('div');
    
    const header = document.createElement('h1');
    header.textContent = "Menu";

    menuDOM.appendChild(header);

    const headerDivider = document.createElement("div");
    headerDivider.classList.add("header-divider");
    menuDOM.appendChild(headerDivider);

    const img = document.createElement("img");
    img.classList.add("content-image");
    img.src = menuImage;
    img.alt = "Restaurant image";
    menuDOM.appendChild(img);

    const imageDivider = document.createElement("div");
    imageDivider.classList.add("image-divider");
    menuDOM.appendChild(imageDivider);


    const text = document.createElement("p");
    text.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolore facere sequi impedit consequatur eos maiores dignissimos, nobis ea quos quae praesentium consectetur. Blanditiis, vero saepe voluptatibus quaerat fugiat laudantium!";
    menuDOM.appendChild(text);

    return {menuDOM};
})();



export default menu;