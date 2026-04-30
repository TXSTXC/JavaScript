


    // FUNCTIONS
notOptionSelected = function (selectedOption, optionName, optionDescription, optionImage) {
    optionName.innerHTML = "";
    optionDescription.innerHTML = "";
    optionImage.src = "";
}

updateOptionInfo = function (selectedOption, htmlName, htmlDescription, htmlImage) {
    let description = selectedOption.description;
    let image = selectedOption.image;

    htmlName.innerHTML = selectedOption.name;
    htmlDescription.innerHTML = description;
    htmlImage.src = image;
};

    // WEAPONS SECTION
const weaponName = document.getElementById("weapon-name");
const weaponDescription = document.getElementById("weapon-description");
const weaponImage = document.getElementById("weapon-image");
const weaponSelection = document.getElementById("weapon-selection");
const weapon = {
    L85A3: {
        name: "L85A3 (SA80) - 5.56mm",
        image: "./media/sa80.jpg",
        description: "The L85A3 is the latest iteration of the L85 series, featuring improved reliability and performance. It is equipped with a new barrel, enhanced gas system, and updated ergonomics, making it a formidable weapon for modern combat scenarios."
    },
    L403A1: {
        name: "L403A1 - 5.56mm",
        image: "./media/l403a1.jpg",
        description: "The L403A1 is a lightweight, compact weapon designed for close-quarters combat. It features a folding stock and a quick-detach sight, making it highly maneuverable in tight spaces."
    },
    L7A2: {
        name: "L7A2 (FN MAG) - 7.62mm",
        image: "./media/l7a2.jpg",
        description: "The L7A2 is a versatile machine gun that provides sustained firepower for infantry units. It is equipped with a quick-change barrel and a bipod for stability during prolonged engagements."
    }
}
weaponSelection.addEventListener('change', () =>{
    const selectedWeapon = weaponSelection.value;

    if(!selectedWeapon || selectedWeapon === "Select an option") {
        notOptionSelected(weapon[selectedWeapon],weaponName, weaponDescription, weaponImage);
    }
    else{
        updateOptionInfo(weapon[selectedWeapon],weaponName, weaponDescription, weaponImage);
    }
});

    // OPTICS SECTION
const opticName = document.getElementById("optic-name");
const opticDescription = document.getElementById("optic-description");
const opticImage = document.getElementById("optic-image");
const opticSelection = document.getElementById("optic-selection");
const optics = {
    Eotech: {
        name: "Eotech HWS",
        image: "./media/eotech.jpg",
        description: "The Eotech HWS is a red dot sight that provides quick target acquisition and improved accuracy in various lighting conditions."
    },
    Aimpoint: {
        name: "Aimpoint Comp M4",
        image: "./media/aimpoint.jpg",
        description: "The Aimpoint Comp M4 is a compact red dot sight designed for close-quarters combat, offering a bright and clear reticle for rapid target engagement."
    }
};
opticSelection.addEventListener('change', () =>{
    const selectedOptic = opticSelection.value;

    if(!selectedOptic || selectedOptic === "Select an option") {
        notOptionSelected(opticName, opticDescription, opticImage);
    }
    else{
        updateOptionInfo(optics[selectedOptic],opticName, opticDescription, opticImage);
    }
});

    // UNDERBARREL ATTACHMENTS SECTION
const underbarrelName = document.getElementById("underbarrel-name");
const underbarrelDescription = document.getElementById("underbarrel-description");
const underbarrelImage = document.getElementById("underbarrel-att-image");
const underbarrelSelection = document.getElementById("underbarrel-attachment");
const underbarrelAttachments = {
    Foregrip: {
        name: "Foregrip",
        image: "./media/foregrip.jpg",
        description: "The Foregrip is a standard attachment that provides improved control and stability during firing."
    }
};
underbarrelSelection.addEventListener('change', () =>{
    const selectedUnderbarrel = underbarrelSelection.value;

    if(!selectedUnderbarrel || selectedUnderbarrel === "Select an option") {
        notOptionSelected(underbarrelName, underbarrelDescription, underbarrelImage);
    }
    else{
        updateOptionInfo(underbarrelAttachments[selectedUnderbarrel],underbarrelName, underbarrelDescription, underbarrelImage);
    }
});
