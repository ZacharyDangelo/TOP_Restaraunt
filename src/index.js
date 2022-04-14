import createPage from "./page";
import createHomePage from "./home";
import createMenuPage from "./menu";
import './style.css';
import createContactPage from "./contact";

var currentPage = "Home";



function clearPage(){
    const bodyContainer = document.querySelector("#body-container");
    while(bodyContainer.firstChild){
        bodyContainer.removeChild(bodyContainer.firstChild);
    }
}

function registerClickEvents(){
    const homeLink = document.querySelector("#home-link");
    homeLink.addEventListener("click", showHomePage);

    const menuLink = document.querySelector("#menu-link");
    menuLink.addEventListener("click",showMenuPage);

    const contactLink = document.querySelector("#contact-link");
    contactLink.addEventListener("click", showContactPage);
}

function showHomePage(){
    if(currentPage != "Home"){
        clearPage();
        createHomePage();
        currentPage = "Home";
    }
}

function showMenuPage(){
    if(currentPage != "Menu"){
        clearPage();
        createMenuPage();
        currentPage = "Menu";
    }
}

function showContactPage(){
    if(currentPage != "Contact"){
        clearPage();
        createContactPage();
        currentPage = "Contact";
    }
}

createPage();
createHomePage();
registerClickEvents();
