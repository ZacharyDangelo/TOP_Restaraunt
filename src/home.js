export default function createHomeSection(){
    const container = document.querySelector("#body-container");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    
    const tagline = document.createElement("h2");
    tagline.textContent = "Best pizza outside of Pisa"
    
    const subTagline = document.createElement("h3");
    subTagline.textContent = "Est. circa 1170";


}