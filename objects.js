
//Computer Config Objects and Logic
//Be able to pick from a dropdown list of components within categories, to eventually create a Computer.
//Each element will have a picture against it to also be poart of the final build for the user to view, before purchasing.
//This will probably be best across multiple pages rather than trying to do everything in a scrolling singular page.
//Page 1 - Create the configuration of the PC.
//Page 2 - Display the configuration output tot he user with images in templated places to showcase the build; depending on choice.


//PAGE 1
//Data stored in arrays to then be selected and create a PC (object) at the end of the process.



//COST CALCULATOR function
let totalPrice = 0;
let totalPriceElement = document.getElementById("total-cost");

function costUpdate(){

}


//TOWER CASE FLOW
const towerCase = {
            TomohawkATX:{
                price:99.99,
                description: "To build the ultimate gaming desktop, it begins with a frame that can support the performance within. Meet the Razer Tomahawk ATX."
            },
            magForge100R: {
                price: 44.97,
                description: " It's ready to cool off your mid-range build right out of the box!"
            },
            masterBoxTd500: {
                price: 64.99,
                description: "This MasterBox TD500 by Cooler Master in white has a classic defined look with a polygonal design."
            }
    };

let towercaseName = document.getElementById("towercase-name");
let towercasePrice = document.getElementById("towercase-price");
let towercaseDesc = document.getElementById("towercase-desc");
let towerCaseOption = document.getElementById("towerCase");

towerCaseOption.addEventListener("change", () => {
    
    let selection = towerCaseOption.value; //returns (TomohawkATX, magForge100R, masterBoxTd500)
    if(!selection){
        towercaseName.innerHTML = ``;
        towercasePrice.innerHTML = ``;
        towercaseDesc.innerHTML = ``;
    }
    else{
        const towerModel = towerCase[selection];
        towercaseName.innerHTML = selection;
        towercasePrice.innerHTML = `£${towerModel.price}`;
        towercaseDesc.innerHTML = towerModel.description;
    }
});

//MOTHERBOARD FLOW
const motherboard = {
    asus:{
        modelOne: {
            ramSlots: 4,
            price: 129.99,
            description: "xxxxx"
        },
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

let motherboardName = document.getElementById("motherboard-name");
let motherboardPrice = document.getElementById("motherboard-price");
let motherboardDesc = document.getElementById("motherboard-desc");
let motherboardOption = document.getElementById("motherboard");

motherboardOption.addEventListener("change", () => {
    let selection = motherboardOption.value; //returns ("motherboard1", "motherboard2", "motherboard3")

    if(!selection){
        motherboardName.innerHTML = ``;
        motherboardPrice.innerHTML = ``;
        motherboardDesc.innerHTML = ``;
    }
    else{
        const motherboardModel = Object.values(motherboard[selection])[0];
        motherboardPrice.innerHTML = `£${motherboardModel.price}`;
        motherboardDesc.innerHTML = motherboardModel.description;
    }
});


//CPU FLOW
const cpu = {
        i5:{
            price: 199,
            description: "xxxxx"
        },
        i7:{
            price: 199,
            description: "xxxxx"
        },
        i9:{
            price: 199,
            description: "xxxxx"
        },        
        ryzen5:{
            price: 199,
            description: "xxxxx"
        },
        ryzen7:{
            price: 199,
            description: "xxxxx"
        },
        ryzen9:{
            price: 199,
            description: "xxxxx"
        }        
}

let cpuName = document.getElementById("cpu-name")
let cpuPrice = document.getElementById("cpu-price")
let cpuDesc = document.getElementById("cpu-desc")
let CpuOption = document.getElementById("cpu")

CpuOption.addEventListener("change", () => {
    let selection = CpuOption.value; //returns i5, i7, i9, ryzen5, ryzen7, ryzen9

    if(!selection){
        cpuName.innerHTML = ``;
        cpuPrice.innerHTML = ``;
        cpuDesc.innerHTML = ``;
    }
        else{
        const cpuModel = cpu[selection];
        cpuPrice.innerHTML = `£${cpuModel.price}`;
        cpuDesc.innerHTML = cpuModel.description;
    }
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

*/
    
    
  











//PAGE 2














































/*
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
*/