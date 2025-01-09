import './contact-style.css';


const contact = (() => {
    const contactDOM = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = "Contact";
    contactDOM.appendChild(header);


    return {contactDOM};
})();


export default contact;