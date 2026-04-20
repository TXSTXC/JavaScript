



const weapon = {
    l85A3: {
        image: "./media/l85a3.jpg",
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

weaponSelection.addEventListener('change', function(
    
){
    const selectedWeapon = weaponSelection.value;

    //selected weapon value would then update the img src to the correct imaage.




})