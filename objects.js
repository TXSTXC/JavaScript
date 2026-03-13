
//Computer Config Objects and Logic
//Be able to pick from a dropdown list of components within categories, to eventually create a Computer.
//Each element will have a picture against it to also be poart of the final build for the user to view, before purchasing.
//This will probably be best across multiple pages rather than trying to do everything in a scrolling singular page.
//Page 1 - Create the configuration of the PC.
//Page 2 - Display the configuration output tot he user with images in templated places to showcase the build; depending on choice.


//PAGE 1
//Data stored in arrays to then be selected and create a PC (object) at the end of the process.



//Product Info

const towerCase = {
    razer:{
            TomohawkATX:{
                price:99.99,
                description: "To build the ultimate gaming desktop, it begins with a frame that can support the performance within. Meet the Razer Tomahawk ATX."
            },
    },
    msi:{
            magForge100R: {
                price: 44.97,
                description: " It's ready to cool off your mid-range build right out of the box!"
            }
    },
    coolermaster: {
        masterBoxTd500: {
            price: 64.99,
            description: "This MasterBox TD500 by Cooler Master in white has a classic defined look with a polygonal design."
        }
    }
}

const motherboard = {
    asus:{
        modelOne: {
            ramSlots: 4,
            price: 129.99,
            description: "xxxxx"
        },
        modelTwo: {
            ramSlots: 2,
            price: 89.99,
            description: "xxxxx"
        }
    },
    intel:{
        b760m:{
            ramSlots: 4,
            price: 239.95,
            description: "xxxxx"
        }
    },
    amd:{
        a520m:{
            ramSlots: 4,
            price: 134.95,
            description: "xxxxx"
        }
    }
}

let totalPrice = 0;
let towercaseName = document.getElementById("towercase-name");
let towercasePrice = document.getElementById("towercase-price");
let towercaseDesc = document.getElementById("towercase-desc");

//TOWER CASE
const towerCaseOption = document.getElementById("towerCase");

towerCaseOption.addEventListener("change", () => {

    const selection = towerCaseOption.value; //returns ("razer","msi","coolermaster")
    if(!selection){
        towercaseName.innerHTML = ``
        towercasePrice.innerHTML = ``;
        towercaseDesc.innerHTML = ``;
    }
    const selectionOutput = Object.values(towerCase[selection])[0];
    addInfoForModel = (selection) => {
        towercasePrice.innerHTML = `£${towerCase[selection].price}`;
        towercaseDesc.innerHTML = towerCase[selection].description;
    }
    addInfoForModel(towerCase[selection]);
    
});


    /*
    towercaseName.innerHTML = selection;

    if (selection === "RAZER"){
        towercasePrice.innerHTML = `£${towerCase.razer.TomohawkATX.price}`;
        towercaseDesc.innerHTML = towerCase.razer.TomohawkATX.description;
    }
    else if(selection === "MSI"){
        towercasePrice.innerHTML = `£${towerCase.msi.magForge100R.price}`;
        towercaseDesc.innerHTML = towerCase.msi.magForge100R.description;
    }
    else if(selection === "CoolerMaster"){
        towercasePrice.innerHTML = `£${towerCase.coolermaster.masterBoxTd500.price}`;
        towercaseDesc.innerHTML = towerCase.coolermaster.masterBoxTd500.description;
    }
    else{
        towercaseName.innerHTML = ``
        towercasePrice.innerHTML = ``;
        towercaseDesc.innerHTML = ``;
    }
    totalPrice = totalPrice + selectedPrice; //Need to sort the lgoic here so it adds the individual cost, per section, into the total.
    */
    
  











//PAGE 2















































//Objects can be created to hold values, and those vcalues can have values. Objects are declared individually and cannot be blueprinted like a Class.

const carObject = {
    make: "Mercedes-Benz",
    model: "EQA",
    colour: "Black",
    registration: "GV71 XND"
}

const car1 = (
    "Polestar",
    "4",
    "Black",
    "OW75 WTZ"
)


console.log(car1.colour);

//Another example below, but slightly more detailed.

const computerSetup = {
    monitor: {
        brand: ["LG", "Asus", "Acer", "BenQ"],
        size: [22,24,26,28,30,32]
    },
    towerCase: {
        brand:["brand1","brand2","Brand3"]
    },
    motherboard: {
        brand:["brand1","brand2","Brand3"]
    },
    cpu: {
        brand: ["Intel","AMD"],
        cores: [12,14,15,16,18,20,22,24,26,28,30]
    },
    gpu: {
        brand: ["Nvidia","AMD"]
    },
    ram: {
        brand: ["Corsair", "Kingston"],
        amount: [8,16,32,64]
    },
    fans: {
        brand: ["Corsair","Kingston"],
        amount: [4,5,6,7,8,9,10]
    },
    keyboard: {
        brand: ["Razer", "Logitech", "Corsair", "SteelSeries"],
        mechanical: [true,false]
    },
    mouse: {
        brand: ["Razer", "Logitech", "Corsair", "SteelSeries"],
        mechanical: [true,false]
    },
    headphones: {
        brand: ["Razer", "Logitech", "Corsair", "SteelSeries"],
        colour: ["Black","Green","White","Blue","Other"]
    },
};

console.log(`You have a ${computerSetup.keyboard} keyboard, and a  ${computerSetup.mouse} mouse.`)

//Array Object

const productList = [
    {
        name: "Product 1",
        price: 19.99,
        description: "This is the decsription."
    },
    {
        name: "Product 2",
        price: 24.99,
        description: "This is the description."
    } 
];

console.log(productList[0].name, productList[0].price, productList[0].description);