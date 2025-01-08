import '../node_modules/modern-normalize/modern-normalize.css';
import './styles.css';
import header from './header/header-dom.js'

const body = document.querySelector("body");
body.appendChild(header.headerDOM);
console.log(header.headerDOM);
// console.log("All fine");