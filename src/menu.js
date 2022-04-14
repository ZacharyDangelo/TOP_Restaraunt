import PepperoniImage from "./pepperoni.png"



export default function createMenuSection(){
    const container = document.querySelector("#body-container");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(PepperoniImage, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));


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