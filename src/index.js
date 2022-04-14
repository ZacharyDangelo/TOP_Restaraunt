import createPage from "./page";
import createHomeSection from "./home";
import './style.css';



createPage();
createHomeSection();


function clearPage(){
    const bodyContainer = document.querySelector("#body-container");
    while(bodyContainer.firstChild){
        bodyContainer.removeChild(bodyContainer.firstChild);
    }
}