import PepperoniImage from "./pepperoni.png"
import MushroomImage from "./mushroom.png"
import RedImage from "./red.png"
import PlainImage from "./plain.png"
import OliveImage from "./olive.png"
import EverythingImage from "./everything.jpg"
import Everything2Image from "./everything2.png"


export default function createMenuPage(){
    const container = document.querySelector("#body-container");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(MushroomImage, "Mushroom", "Mushrooms, pepperoni, and some greens. You'll love it!"));
    menuContainer.appendChild(createMenuItem(RedImage, "Red", "A red slice! It's got all the goodies you could imagine on there."));
    menuContainer.appendChild(createMenuItem(PlainImage, "Plain", "Maybe you're just feeling a little plain today, that's okay too."));
    menuContainer.appendChild(createMenuItem(OliveImage, "Olive", "Olives and pepperonis oh my! Probably pretty tasty if you're into that sort of thing."));
    menuContainer.appendChild(createMenuItem(EverythingImage, "Everything", "Everything in the kitchen that's what I'm throwin on this slice. If we got it, it's on there."));


    container.appendChild(menuContainer);
}

function createMenuItem(imgPath, title, description){
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    
    const itemImg = document.createElement("img");
    itemImg.classList.add("menu-item-image");
    itemImg.src = imgPath;
    itemDiv.appendChild(itemImg);

    const itemTitle = document.createElement("h3");
    itemTitle.classList.add("menu-item-title");
    itemTitle.textContent = title;
    itemDiv.appendChild(itemTitle);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("menu-item-description");
    itemDesc.textContent = description;
    itemDiv.appendChild(itemDesc);


    return itemDiv;
}