import './contact-style.css';
import contactImage from '../../img/contact-image.jpg';

const contact = (() => {
    const contactDOM = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = "Contact";
    contactDOM.appendChild(header);

    const headerDivider = document.createElement("div");
    headerDivider.classList.add("header-divider");
    contactDOM.appendChild(headerDivider);

    const img = document.createElement("img");
    img.classList.add("content-image");
    img.src = contactImage;
    img.alt = "Restaurant image";
    contactDOM.appendChild(img);

    const imageDivider = document.createElement("div");
    imageDivider.classList.add("image-divider");
    contactDOM.appendChild(imageDivider);


    const text = document.createElement("p");
    text.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolore facere sequi impedit consequatur eos maiores dignissimos, nobis ea quos quae praesentium consectetur. Blanditiis, vero saepe voluptatibus quaerat fugiat laudantium!";
    contactDOM.appendChild(text);

    return {contactDOM};
})();


export default contact;