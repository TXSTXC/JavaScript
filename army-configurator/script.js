



notWeaponSelected = function () {
    weaponName.innerHTML = "";
    weaponDescription.innerHTML = "";
    weaponImage.src = "";
}

updateOptionInfo = function (selectedWeapon,weaponName,weaponDescription,weaponImage) {
        optionName.textContent = selectedWeapon.value;
        optionDescription.textContent = weapon[selectedWeapon].description;
        optionImage.src = weapon[selectedWeapon].image;
};

    const weaponName = document.getElementById('weapon-name');
    const weaponDescription = document.getElementById('weapon-description');
    const weaponImage = document.getElementById('weapon-image');
const weapon = {
    l85A3: {
        image: "./media/sa80.jpg",
        description: "The L85A3 is the latest iteration of the L85 series, featuring improved reliability and performance. It is equipped with a new barrel, enhanced gas system, and updated ergonomics, making it a formidable weapon for modern combat scenarios."
    },
    l403A1: {
        image: "./media/l403a1.jpg",
        description: "The L403A1 is a lightweight, compact weapon designed for close-quarters combat. It features a folding stock and a quick-detach sight, making it highly maneuverable in tight spaces."
    },
    l7A2: {
        image: "./media/l7a2.jpg",
        description: "The L7A2 is a versatile machine gun that provides sustained firepower for infantry units. It is equipped with a quick-change barrel and a bipod for stability during prolonged engagements."
    }
}


const weaponSelection = document.getElementById('weapon-selection');

weaponSelection.addEventListener('change', () =>{
    const selectedWeapon = weaponSelection.value;

    //Defines the elements to update with the selected weapon information
    const weaponName = document.getElementById ('weapon-name');
    const weaponDescription = document.getElementById('weapon-description');
    const weaponImage = document.getElementById('weapon-image');
    
    //Updates the weapon image and description based on the selected weapon
    if (!selectedWeapon){
        notWeaponSelected();
    }
    else{
    updateWeaponInfo(selectedWeapon);
    }
});
