import './about-style.css';

const about = (() => {
    const aboutDOM = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'About us';
    aboutDOM.appendChild(header);


    return {aboutDOM};
})();

export default about;