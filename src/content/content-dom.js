import "./content-style.css";

const content = (() => {
    const contentDOM = document.createElement("div");
    contentDOM.classList.add("content");
    const replaceContent = (newContent) => {
        contentDOM.textContent = "";
        contentDOM.appendChild(newContent);
    }
    return {contentDOM};
})();



export default content;