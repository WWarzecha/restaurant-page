import './home-style.css';
import homeImage from '../../img/home-image.jpg';

const home = (() => {
    const homeDOM = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Welcome";
    header.classList.add("home-header");
    homeDOM.appendChild(header);
    
    const headerDivider = document.createElement("div");
    headerDivider.classList.add("header-divider");
    homeDOM.appendChild(headerDivider);

    const img = document.createElement("img");
    img.classList.add("content-image");
    img.src = homeImage;
    img.alt = "Restaurant image";
    homeDOM.appendChild(img);

    const imageDivider = document.createElement("div");
    imageDivider.classList.add("image-divider");
    homeDOM.appendChild(imageDivider);


    const text = document.createElement("p");
    text.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolore facere sequi impedit consequatur eos maiores dignissimos, nobis ea quos quae praesentium consectetur. Blanditiis, vero saepe voluptatibus quaerat fugiat laudantium!";
    homeDOM.appendChild(text);

    return {homeDOM};
})();




export default home;