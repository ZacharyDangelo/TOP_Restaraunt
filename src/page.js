export default function createPage(){
    const container = document.querySelector('#content');
    createHeader(document.body);
    createBody(container);
    createFooter(document.body);
};


function createHeader(container){
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    container.prepend(headerContainer);

    const headerText = document.createElement('h1');
    headerText.textContent = "Lil Fibonacci's";
    headerText.classList.add('header-text');
    headerContainer.appendChild(headerText);

    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link-container');
    const homeLink = document.createElement('a');
    homeLink.id = "home-link";
    homeLink.href = "#";
    homeLink.textContent = "Home";
    linkContainer.appendChild(homeLink);

    const menuLink = document.createElement('a');
    menuLink.id = "menu-link";
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    linkContainer.appendChild(menuLink);

    const contactLink = document.createElement('a');
    contactLink.id = "contact-link";
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    linkContainer.appendChild(contactLink);

    headerContainer.appendChild(linkContainer);
}

function createBody(container){
    const contentContainer = document.createElement('div');
    contentContainer.id = "body-container";
    container.appendChild(contentContainer);
}

function createFooter(container){
    const footerContainer = document.createElement('div');
    footerContainer.classList.add("footer-container");

    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.textContent = "(C) Zachary D'Angelo 2022";
    footerContainer.appendChild(footerText);

    container.appendChild(footerContainer);
}