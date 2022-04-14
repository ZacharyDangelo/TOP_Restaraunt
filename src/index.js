import createPage from "./page";
import createHomePage from "./home";
import createMenuPage from "./menu";
import './style.css';
import createContactPage from "./contact";



createPage();
createHomePage();
clearPage();
createMenuPage();
clearPage();
createContactPage();


function clearPage(){
    const bodyContainer = document.querySelector("#body-container");
    while(bodyContainer.firstChild){
        bodyContainer.removeChild(bodyContainer.firstChild);
    }
}