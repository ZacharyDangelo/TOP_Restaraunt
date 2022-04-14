import createPage from "./page";
import createHomeSection from "./home";
import createMenuSection from "./menu";
import './style.css';



createPage();
createHomeSection();
clearPage();
createMenuSection();


function clearPage(){
    const bodyContainer = document.querySelector("#body-container");
    while(bodyContainer.firstChild){
        bodyContainer.removeChild(bodyContainer.firstChild);
    }
}