
//Computer Config Objects and Logic
//Be able to pick from a dropdown list of components within categories, to eventually create a COmputer.
//Each element will have a picture against it to also be poart of the final build for the user to view, before purchasing.
//THis will probably be best across multiple pages rather than trying to do everything in a scrolling singular page.
//Page 1 - Create the configuration of the PC.
//Page 2 - Display the configuration output tot he user with images in templated places to showcase the build; depending on choice.


//PAGE 1















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