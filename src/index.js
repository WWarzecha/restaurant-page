import '../node_modules/modern-normalize/modern-normalize.css';
import './styles.css';
import header from './header/header-dom.js';
import content from './content/content-dom.js';


(() => {
    const body = document.querySelector("body");
    body.appendChild(header.headerDOM);
    content.assignButtons();
    body.appendChild(content.contentDOM);
})();
