
//Ability to create stock
//ability to purchase items into stock
//ability to sell stock

//Products list, which has a stock quantity

//Shop
//Products / Stock - Price - Quantity

class Shop{
    constructor (shopName,products,staff,tills){
        this.shopName = shopName;
        this.products = [];
        this.staff = [];
        this.tills = tills;
    }
    addStaff(staff){
        this.staff.push(staff);
    }
    addProducts(product){
        this.products.push(product);
    }
    renameShop(newShopName){
        this.shopName = newShopName;
    }
}

class Product{
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Staff{
    constructor(name){
        this.name = name;
    }
}
class ShopName{
    constructor(newShopName){
        this.shopName = newShopName;
    }
}

let MyShop = new Shop ("MyShop",[],[],2);
let Alice = new Staff ("Alice");
let kettle = new Product ("kettle",14.99,5);
let cup = new Product ("cup",3.99,15);

let JordanShop = new Shop ("Jordans Shop",[],["James"],4);
console.log(JordanShop);

MyShop.addProducts(kettle);
MyShop.addStaff(Alice);
