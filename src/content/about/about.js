import './about-style.css';
import aboutImage from '../../img/about-image.jpg'


const about = (() => {
    const aboutDOM = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'About us';
    aboutDOM.appendChild(header);

    const headerDivider = document.createElement("div");
    headerDivider.classList.add("header-divider");
    aboutDOM.appendChild(headerDivider);

    const img = document.createElement("img");
    img.classList.add("content-image");
    img.src = aboutImage;
    img.alt = "Restaurant image";
    aboutDOM.appendChild(img);

    const imageDivider = document.createElement("div");
    imageDivider.classList.add("image-divider");
    aboutDOM.appendChild(imageDivider);


    const text = document.createElement("p");
    text.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolore facere sequi impedit consequatur eos maiores dignissimos, nobis ea quos quae praesentium consectetur. Blanditiis, vero saepe voluptatibus quaerat fugiat laudantium!";
    aboutDOM.appendChild(text);

    return {aboutDOM};
})();

export default about;