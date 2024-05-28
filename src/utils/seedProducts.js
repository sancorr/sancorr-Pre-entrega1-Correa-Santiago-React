import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js";

const products = [
    //Iphone
    {
        id: "a1",
        name: "Iphone 13 Pro Max",
        description: "Descripcion producto 1",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a2",
        name: "Iphone 13 Pro",
        description: "Descripcion producto 2",
        price: 2000,
        category: "celulares",
        stock: 5,
        image: "/image/iphone.jpg"
    },
    {
        id: "a3",
        name: "Iphone 13",
        description: "Descripcion producto 3",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a4",
        name: "Iphone 12 Pro Max",
        description: "Descripcion producto 4",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a5",
        name: "Iphone 12 Pro",
        description: "Descripcion producto 5",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a6",
        name: "Iphone 12",
        description: "Descripcion producto 6",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    //Samsung
    {
        id: "a7",
        name: "Samsung Galaxy S21 Ultra",
        description: "Descripcion producto 7",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a8",
        name: "Samsung Galaxy S21+",
        description: "Descripcion producto 8",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a9",
        name: "Samsung Galaxy S21",
        description: "Descripcion producto 9",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a10",
        name: "Samsung Galaxy Note 20 Ultra",
        description: "Descripcion producto 10",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a11",
        name: "Samsung Galaxy Note 20",
        description: "Descripcion producto 11",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a12",
        name: "Samsung Galaxy Z Fold 3",
        description: "Descripcion producto 12",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a13",
        name: "Samsung Galaxy Z Flip 3",
        description: "Descripcion producto 13",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    //goolgle pixel
    {
        id: "a14",
        name: "Google Pixel 6 Pro",
        description: "Descripcion producto 14",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a15",
        name: "Google Pixel 6",
        description: "Descripcion producto 15",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a16",
        name: "Google Pixel 5a",
        description: "Descripcion producto 16",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a17",
        name: "Google Pixel 5",
        description: "Descripcion producto 17",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a18",
        name: "Google Pixel 4a",
        description: "Descripcion producto 18",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // OnePlus
    {
        id: "a19",
        name: "OnePlus 9 Pro",
        description: "Descripcion producto 19",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a20",
        name: "OnePlus 9",
        description: "Descripcion producto 20",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a21",
        name: "OnePlus 8T",
        description: "Descripcion producto 21",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a22",
        name: "OnePlus Nord 2",
        description: "Descripcion producto 22",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a23",
        name: "OnePlus Nord CE 5G",
        description: "Descripcion producto 23",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
     // Xiaomi
     {
        id: "a24",
        name: "Xiaomi Mi 11 Ultra",
        description: "Descripcion producto 24",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a25",
        name: "Xiaomi Mi 11",
        description: "Descripcion producto 25",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a26",
        name: "Xiaomi Mi 11 Lite",
        description: "Descripcion producto 26",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a27",
        name: "Xiaomi Redmi Note 10 Pro",
        description: "Descripcion producto 27",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a28",
        name: "Xiaomi Poco X3 Pro",
        description: "Descripcion producto 28",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // Huawei
    {
        id: "a29",
        name: "Huawei P40 Pro",
        description: "Descripcion producto 29",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a30",
        name: "Huawei Mate 40 Pro",
        description: "Descripcion producto 30",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a31",
        name: "Huawei Nova 8 Pro",
        description: "Descripcion producto 31",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a32",
        name: "Huawei P30 Pro",
        description: "Descripcion producto 32",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    //computadoras
    // Laptops Windows
    {
        id: "a33",
        name: "Dell XPS 13",
        description: "Descripcion producto 33",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a34",
        name: "HP Spectre x360",
        description: "Descripcion producto 34",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a35",
        name: "Lenovo ThinkPad X1 Carbon",
        description: "Descripcion producto 35",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a36",
        name: "Microsoft Surface Laptop 4",
        description: "Descripcion producto 36",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a37",
        name: "ASUS ZenBook 14",
        description: "Descripcion producto 37",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a38",
        name: "Acer Swift 3",
        description: "Descripcion producto 38",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // Laptops para juegos (Gaming)
    {
        id: "a39",
        name: "ASUS ROG Zephyrus G14",
        description: "Descripcion producto 39",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a40",
        name: "MSI GS66 Stealth",
        description: "Descripcion producto 40",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a41",
        name: "Razer Blade 15",
        description: "Descripcion producto 41",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a42",
        name: "Alienware m15 R6",
        description: "Descripcion producto 42",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a43",
        name: "HP Omen 15",
        description: "Descripcion producto 43",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a44",
        name: "Lenovo Legion 5 Pro",
        description: "Descripcion producto 44",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // MacBook (Laptops de Apple)
    {
        id: "a45",
        name: "MacBook Air (M1)",
        description: "Descripcion producto 45",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a46",
        name: "MacBook Pro 13\" (M1)",
        description: "Descripcion producto 46",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a47",
        name: "MacBook Pro 14\" (M1 Pro/Max)",
        description: "Descripcion producto 47",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a48",
        name: "MacBook Pro 16\" (M1 Pro/Max)",
        description: "Descripcion producto 48",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // Laptops Chromebook
    {
        id: "a49",
        name: "Google Pixelbook Go",
        description: "Descripcion producto 49",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a50",
        name: "ASUS Chromebook Flip C434",
        description: "Descripcion producto 50",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a51",
        name: "Acer Chromebook Spin 713",
        description: "Descripcion producto 51",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a52",
        name: "HP Chromebook x360 14c",
        description: "Descripcion producto 52",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a53",
        name: "Lenovo Chromebook Duet",
        description: "Descripcion producto 53",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // All-in-One (Todo en uno)
    {
        id: "a54",
        name: "Apple iMac 24\" (M1)",
        description: "Descripcion producto 54",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a55",
        name: "Dell XPS 27",
        description: "Descripcion producto 55",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a56",
        name: "HP Envy 32 All-in-One",
        description: "Descripcion producto 56",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a57",
        name: "Microsoft Surface Studio 2",
        description: "Descripcion producto 57",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // Desktops para juegos (Gaming)
    {
        id: "a58",
        name: "Alienware Aurora R12",
        description: "Descripcion producto 58",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a59",
        name: "MSI Trident X",
        description: "Descripcion producto 59",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a60",
        name: "ASUS ROG Strix G15",
        description: "Descripcion producto 60",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a61",
        name: "HP Omen 30L",
        description: "Descripcion producto 61",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a62",
        name: "Acer Predator Orion 3000",
        description: "Descripcion producto 62",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    // Mini PCs y computadoras compactas
    {
        id: "a63",
        name: "Intel NUC 11",
        description: "Descripcion producto 63",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a64",
        name: "Apple Mac Mini (M1)",
        description: "Descripcion producto 64",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a65",
        name: "ASUS Mini PC PN50",
        description: "Descripcion producto 65",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a66",
        name: "Lenovo ThinkCentre M90n",
        description: "Descripcion producto 66",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    //Electronica
    //Auriculares bluetoth
    {
        id: "a67",
        name: "AirPods Pro de Apple",
        description: "Descripcion producto 67",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a68",
        name: "Sony WH-1000XM4",
        description: "Descripcion producto 68",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a69",
        name: "Jabra Elite 85t",
        description: "Descripcion producto 69",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a70",
        name: "Bose QuietComfort Earbuds",
        description: "Descripcion producto 70",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a71",
        name: "Sennheiser Momentum True Wireless 2",
        description: "Descripcion producto 71",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    //ratones y teclados
    {
        id: "a72",
        name: "Logitech MX Master 3",
        description: "Descripcion producto 72",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a73",
        name: "Razer DeathAdder V2",
        description: "Descripcion producto 73",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a74",
        name: "Corsair K95 RGB Platinum XT",
        description: "Descripcion producto 74",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a75",
        name: "SteelSeries Apex Pro",
        description: "Descripcion producto 75",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a76",
        name: "Microsoft Surface Precision Mouse",
        description: "Descripcion producto 76",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    //monitores
    {
        id: "a82",
        name: "LG UltraGear 27GN950-B",
        description: "Descripcion producto 82",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a83",
        name: "Dell S3222HN",
        description: "Descripcion producto 83",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a84",
        name: "ASUS ROG Swift PG279Q",
        description: "Descripcion producto 84",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a85",
        name: "Samsung Odyssey G7",
        description: "Descripcion producto 85",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a86",
        name: "BenQ EW3270U",
        description: "Descripcion producto 86",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    },
    {
        id: "a87",
        name: "AOC C24G1A",
        description: "Descripcion producto 87",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/iphone.jpg"
    }


]


//Subir array de productos a DB
const seedProducts = () =>{
    products.map(({id,...rest})=>{
        addDoc(collection(db,"products"),rest)
    });
}
seedProducts()




