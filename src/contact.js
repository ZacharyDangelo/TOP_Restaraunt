import PhoneImage from "./telephone.png"
import HomeImage from "./home.png"
import MapImage from "./map.png"


export default function createContactPage(){
    const container = document.querySelector("#body-container");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    createPhoneSection(contactContainer);
    createAddressSection(contactContainer);
    
    const mapImage = document.createElement("img");
    mapImage.src = MapImage;
    mapImage.classList.add("map-image");
    contactContainer.appendChild(mapImage);
    container.appendChild(contactContainer);
}

function createPhoneSection(container){
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("phone-container");
    
    const phoneIcon = document.createElement("img");
    phoneIcon.classList.add("phone-icon");
    phoneIcon.src = PhoneImage;
    phoneContainer.appendChild(phoneIcon);
    
    const phoneText = document.createElement("p");
    phoneText.classList.add("phone-text");
    phoneText.textContent = "(555)-555-5555";
    phoneContainer.appendChild(phoneText);



    container.appendChild(phoneContainer);
}

function createAddressSection(container){
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address-container");
    
    const addressIcon = document.createElement("img");
    addressIcon.classList.add("address-icon");
    addressIcon.src = HomeImage;
    addressContainer.appendChild(addressIcon);
    
    const addressText = document.createElement("p");
    addressText.classList.add("address-text");
    addressText.textContent = "37 Pizza pizza lane, New York, USA";
    addressContainer.appendChild(addressText);



    container.appendChild(addressContainer);
}