
//Computer Config Objects and Logic
//Be able to pick from a dropdown list of components within categories, to eventually create a Computer.
//Each element will have a picture against it to also be poart of the final build for the user to view, before purchasing.
//This will probably be best across multiple pages rather than trying to do everything in a scrolling singular page.
//Page 1 - Create the configuration of the PC.
//Page 2 - Display the configuration output tot he user with images in templated places to showcase the build; depending on choice.


//PAGE 1
//Data stored in arrays to then be selected and create a PC (object) at the end of the process.




//Selection Functions to pre-fix the selection before the data.
const notUserSelection = (modelName, modelPrice, modelDesc) =>{
        modelName.innerHTML = ``;
        modelPrice.innerHTML = ``;
        modelDesc.innerHTML = ``;
}

//Display the name, price and description
const userSelection = (modelOption, selection, modelName, modelPrice, modelDesc) =>{
        let selectedPrice = modelOption.price;
        let description = modelOption.description;
        
        modelName.innerHTML = selection;
        modelPrice.innerHTML = `£${selectedPrice}`;
        modelDesc.innerHTML = description;
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



const towercaseName = document.getElementById("towercase-name");
const towercasePrice = document.getElementById("towercase-price");
const towercaseDesc = document.getElementById("towercase-desc");
const towerCaseOption = document.getElementById("towerCase");
let selectedTowercasePrice = 0;

towerCaseOption.addEventListener("change", () => {
    const selection = towerCaseOption.value; //returns (TomohawkATX, magForge100R, masterBoxTd500)
    if(!selection){
        notUserSelection(towercaseName, towercasePrice, towercaseDesc);
    }
    else{
        const towerModel = towerCase[selection];
        selectedTowercasePrice = towerCase[selection].price;
        userSelection(towerModel, selection, towercaseName, towercasePrice, towercaseDesc);
        priceUpdate();
    }
});

//MOTHERBOARD FLOW
const motherboard = {
        StrixB550F: {
            ramSlots: 4,
            price: 149.00,
            description: "AMD B550 Ryzen AM4 Gaming ATX motherboard with PCIe® 4.0, 12+2 teamed power stages, Intel® 2.5 Gb Ethernet, WiFi 6E, Two-Way AI Noise Cancelation, dual M.2 slots with heatsinks, SATA 6 Gbps, USB 3.2 Gen 2 and Aura Sync RGB lighting"
        },
        b760m:{
            ramSlots: 4,
            price: 119.49,
            description: "The B760M GAMING PLUS WIFI is designed with tons of connectivity, flexible tools, a convenient Wi-Fi solution and DDR5 memory support for gamers who want it all."
        },
        a520m:{
            ramSlots: 4,
            price: 71.97,
            description: "The AMD A520M is a budget-friendly Micro-ATX motherboard chipset designed for Socket AM4, primarily supporting 3rd Gen Ryzen and Ryzen 4000/5000 series processors."
        }
    
};

const motherboardName = document.getElementById("motherboard-name");
const motherboardPrice = document.getElementById("motherboard-price");
const motherboardDesc = document.getElementById("motherboard-desc");
const motherboardOption = document.getElementById("motherboard");
let selectedMotherboardPrice = 0;

motherboardOption.addEventListener("change", () => {
    
    const selection = motherboardOption.value; //returns ("motherboard1", "motherboard2", "motherboard3")
    if(!selection){
        notUserSelection(motherboardName, motherboardPrice, motherboardDesc);
    }
    else{
        const motherboardModel = motherboard[selection];
        userSelection(motherboardModel, selection, motherboardName, motherboardPrice, motherboardDesc);
        priceUpdate();
    }
});


//CPU FLOW
const cpu = {
        i5:{
            price: 149.99,
            description: "The 12th Generation of Intel® Core™ Processors are here! The i5-12400F allows you to compete with confidence or get immersed in new worlds with a revolutionary processor architecture that focuses on what matters more - Gaming!"
        },
        i7:{
            price: 239.99,
            description: "The 12th Generation of Intel® Core™ Processors are here! The i7-12700F gives you the highest clock speeds and a groundbreaking new architecture, you will be able to push your gameplay to new heights while secondary apps run seamlessly in the background."
        },
        i9:{
            price: 322.99,
            description: "Intel Core i9 processors are high-performance flagship CPUs designed for demanding tasks like 4K video editing, 3D rendering, and high-end gaming."
        },        
        Ryzen5:{
            price: 79.99,
            description: "AMD Ryzen 5 processors are 6-core/12-thread CPUs designed for mid-range, budget-friendly gaming and productivity, offering excellent value with strong multi-core performance."
        },
        Ryzen7:{
            price: 172.99,
            description: "The AMD Ryzen 7 is a high-performance CPU series designed for gaming, content creation, and multitasking, typically featuring 8 cores and 16 threads."
        },
        Ryzen9:{
            price: 289.99,
            description: "The AMD Ryzen 9 is a high-end desktop and laptop processor series designed for enthusiasts, creators, and high-performance gaming, featuring up to 16 cores and 32 threads."
        }        
}

let cpuName = document.getElementById("cpu-name");
let cpuPrice = document.getElementById("cpu-price");
let cpuDesc = document.getElementById("cpu-desc");
let cpuOption = document.getElementById("cpu");
let selectedCpuPrice = 0;
const cpuChoice = {
    name:document.getElementById("cpu-name"),
    price:document.getElementById("cpu-price"),
    desc:document.getElementById("cpu-desc"),
}

cpuOption.addEventListener("change", () => {
    
    const selection = cpuOption.value; //returns ("motherboard1", "motherboard2", "motherboard3")
    if(!selection){
        notUserSelection(cpuName, cpuPrice, cpuDesc);
    }
    else{
        const cpuModel = cpu[selection];
        userSelection(cpuModel, selection, cpuName, cpuPrice, cpuDesc);
        priceUpdate();
    }
    priceUpdate();
});


//RAM FLOW

const ram = {
    corsair64GB:{
        price:521.99,
        description:  "CORSAIR VENGEANCE RGB PRO SL DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting, while delivering peak performance in 44mm-tall compact memory modules."
    },
    Option2:{
        price:521.99,
        description:  "CORSAIR VENGEANCE RGB PRO SL DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting, while delivering peak performance in 44mm-tall compact memory modules."
    },
    Option3:{
        price:521.99,
        description:  "CORSAIR VENGEANCE RGB PRO SL DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting, while delivering peak performance in 44mm-tall compact memory modules."
    },
}

let ramName = document.getElementById("ram-name");
let ramPrice = document.getElementById("ram-price");
let ramDesc = document.getElementById("ram-desc");
let ramOption = document.getElementById("ram");
let selectedRamPrice = 0;

//ramOption.src="images/ram.jpg";

ramOption.addEventListener("change", () => {
    const selection = ramOption.value; //returns ("ram1", "ram2", "ram3")
    if(!selection){
        notUserSelection(ramName, ramPrice, ramDesc);
    }
    else{
        const ramModel = ram[selection];
        userSelection(ramModel, selection, ramName, ramPrice, ramDesc);
        priceUpdate();
    }
});


//GPU FLOW

const gpu = {
    RTX5090:{
        price:3189.99,
        description:"ASUS NVIDIA GeForce RTX 5090 32GB TUF GAMING OC Blackwell Graphics Card"
    },
    RTX5070:{
        price: 548.99,
        description: "MSI NVIDIA GeForce RTX 5070 12GB VENTUS 2X OC Blackwell Graphics Card"
    },
}

let gpuName = document.getElementById("gpu-name");
let gpuPrice = document.getElementById("gpu-price");
let gpuDesc = document.getElementById("gpu-desc");
let gpuOption = document.getElementById("gpu");
let selectedGpuPrice = 0;

gpuOption.addEventListener("change", () =>{
    const selection = gpuOption.value; //returns ("gpu1", "gpu2", "gpu3")
    if(!selection){
        notUserSelection(gpuName, gpuPrice, gpuDesc);
    }
    else{
        const gpuModel = gpu[selection];
        userSelection(gpuModel, selection, gpuName, gpuPrice, gpuDesc);
        priceUpdate();
    }
});




const computerBuild = {
    towercasePrice: selectedTowercasePrice,
    motherboardPrice: selectedMotherboardPrice,
    cpuPrice: selectedCpuPrice,
    ramPrice: selectedRamPrice,
    gpuPrice: selectedGpuPrice
}

//COST CALCULATOR FUNCTION
function priceUpdate (){
    let totalPrice = selectedTowercasePrice + selectedMotherboardPrice + selectedCpuPrice + selectedRamPrice + selectedGpuPrice;
    let totalPriceElement = document.getElementById("total-cost");
    totalPriceElement.innerHTML = `£${totalPrice}`;
}

//Places that could be optimised, but unsure how to do so...

//else statements...
//These all do the same thing, with only the gpu/cpu/ram/etc... changing within the code. Could I make a way for a 
// function to assign this part of the code to a variable, maybe?

//The same applies for the if section... THis is exactly the same, just with the prefixed 
// part name being different each time.

//Price Function
//Could the 'letTotalPrice' be optimised so it is based off a variable, not a concat of variables?
//Maybe from an array, which stores all + new component names?



































    /* Original code to select and assign the correct data to the innerHTML elements.
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