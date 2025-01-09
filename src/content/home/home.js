import './home-style.css'

const home = (() => {
    const homeDOM = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Welcome";
    homeDOM.appendChild(header);

    const text = document.createElement("p");
    text.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolore facere sequi impedit consequatur eos maiores dignissimos, nobis ea quos quae praesentium consectetur. Blanditiis, vero saepe voluptatibus quaerat fugiat laudantium!";
    homeDOM.appendChild(text);

    return {homeDOM};
})();




export default home