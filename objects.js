
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
    monitor: "Monitor",
    towerCase: "towerCase",
    motherboard: "motherboard",
    cpu: "cpu",
    gpu: {gpu1: "gpu1", gpu2: "gpu2"},
    ram: {brand: "brand", amount: 64},
    fans: {brand: "brand", amount: 8},
    keyboard: "keyboard",
    keyboardMech: true,
    mouse: "mouse",
    headphones: "headphones"
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

console.log(productList[0].name);