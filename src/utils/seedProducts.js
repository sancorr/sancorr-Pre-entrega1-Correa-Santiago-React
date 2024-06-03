import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js";

const products = [
    //Iphones
    {
        id: "a1",
        name: "Iphone 13 Pro Max",
        description: "El iPhone 13 Pro Max es el modelo más avanzado de Apple con una pantalla Super Retina XDR de 6.7 pulgadas, cámaras mejoradas con modo noche y macro, chip A15 Bionic y una batería de larga duración",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone_13_ProMax.png"
    },
    {
        id: "a2",
        name: "Iphone 13 Pro",
        description: "El iPhone 13 Pro cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, sistema de cámaras avanzadas con modo noche, chip A15 Bionic y tecnología ProMotion para una experiencia de uso más fluida",
        price: 2000,
        category: "celulares",
        stock: 5,
        image: "/image/iphone_13_Pro.png"
    },
    {
        id: "a3",
        name: "Iphone 13",
        description: "El iPhone 13 presenta una pantalla Super Retina XDR de 6.1 pulgadas, doble cámara mejorada con modo noche, chip A15 Bionic y una batería con mayor duración.",
        price: 2000,
        category: "celulares",
        stock: 8,
        image: "/image/iphone_13.png"
    },
    {
        id: "a4",
        name: "Iphone 12 Pro Max",
        description: " El iPhone 12 Pro Max ofrece una pantalla Super Retina XDR de 6.7 pulgadas, sistema de cámaras triple con LiDAR, chip A14 Bionic y compatibilidad con 5G.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone_12.png"
    },
    {
        id: "a5",
        name: "Iphone 12 Pro",
        description: "El iPhone 12 Pro incluye una pantalla Super Retina XDR de 6.1 pulgadas, triple cámara con LiDAR, chip A14 Bionic y soporte para 5G.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone_12.png"
    },
    {
        id: "a6",
        name: "Iphone 12",
        description: "El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, doble cámara con modo noche, chip A14 Bionic y conectividad 5G.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/iphone_12.png"
    },
    //Samsung
    {
        id: "a7",
        name: "Samsung Galaxy S21 Ultra",
        description: " El Galaxy S21 Ultra ofrece una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, sistema de cámaras cuádruple con zoom de 100x, procesador Exynos 2100 y compatibilidad con S-Pen.",
        price: 2000,
        category: "celulares",
        stock: 9,
        image: "/image/Samsung_S21_Ultra.png"
    },
    {
        id: "a8",
        name: "Samsung Galaxy S21+",
        description: "El Galaxy S21+ tiene una pantalla Dynamic AMOLED 2X de 6.7 pulgadas, triple cámara, procesador Exynos 2100 y una batería de 4800 mAh.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Samsung_Galaxy_S21_.png"
    },
    {
        id: "a9",
        name: "Samsung Galaxy S21",
        description: "El Galaxy S21 presenta una pantalla Dynamic AMOLED 2X de 6.2 pulgadas, triple cámara, procesador Exynos 2100 y una batería de 4000 mAh.",
        price: 2000,
        category: "celulares",
        stock: 5,
        image: "/image/Samsung_Galaxy_S21_.png"
    },
    {
        id: "a10",
        name: "Samsung Galaxy Note 20 Ultra",
        description: "El Galaxy Note 20 Ultra incluye una pantalla Dynamic AMOLED 2X de 6.9 pulgadas, sistema de cámaras avanzado, procesador Exynos 990 y S-Pen con mayor precisión.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Samsung_Galaxy_Note_20Ultra.png"
    },
    {
        id: "a11",
        name: "Samsung Galaxy Note 20",
        description: "El Galaxy Note 20 ofrece una pantalla Super AMOLED Plus de 6.7 pulgadas, triple cámara, procesador Exynos 990 y S-Pen para productividad.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Samsung_Galaxy_Note20.png"
    },
    {
        id: "a12",
        name: "Samsung Galaxy Z Fold 3",
        description: "El Galaxy Z Fold 3 es un smartphone plegable con pantalla principal Dynamic AMOLED 2X de 7.6 pulgadas, soporte para S-Pen y resistencia al agua IPX8.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Samsung_Galaxy_Z_Fold3.png"
    },
    {
        id: "a13",
        name: "Samsung Galaxy Z Flip 3",
        description: "El Galaxy Z Flip 3 es un smartphone plegable compacto con pantalla Dynamic AMOLED 2X de 6.7 pulgadas, diseño elegante y resistencia al agua IPX8.",
        price: 2000,
        category: "celularvves",
        stock: 10,
        image: "/image/Samsung_Galaxy_Z_Flip3.png"
    },
    //goolgle pixel
    {
        id: "a14",
        name: "Google Pixel 6 Pro",
        description: "El Pixel 6 Pro ofrece una pantalla OLED de 6.7 pulgadas, procesador Google Tensor, cámara avanzada con tecnología de fotografía computacional y Android puro",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Google_Pixel_6_Pro.png"
    },
    {
        id: "a15",
        name: "Google Pixel 6",
        description: "El Pixel 6 tiene una pantalla OLED de 6.4 pulgadas, procesador Google Tensor, cámara de alta calidad y una experiencia de Android puro.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Google_Pixel_6.png"
    },
    {
        id: "a16",
        name: "Google Pixel 5a",
        description: "El Pixel 5a cuenta con una pantalla OLED de 6.34 pulgadas, cámara dual, procesador Snapdragon 765G y una batería de larga duración.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Google_Pixel_5a.png"
    },
    {
        id: "a17",
        name: "Google Pixel 5",
        description: "El Pixel 5 ofrece una pantalla OLED de 6 pulgadas, cámara dual, procesador Snapdragon 765G y conectividad 5G.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Google_Pixel_5.png"
    },
    {
        id: "a18",
        name: "Google Pixel 4a",
        description: "El Pixel 4a incluye una pantalla OLED de 5.81 pulgadas, cámara de alta calidad, procesador Snapdragon 730G y un diseño compacto.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Google_Pixel_4a.png"
    },
    // OnePlus
    {
        id: "a19",
        name: "OnePlus 9 Pro",
        description: "El OnePlus 9 Pro cuenta con una pantalla Fluid AMOLED de 6.7 pulgadas, cámaras desarrolladas en colaboración con Hasselblad, procesador Snapdragon 888 y carga rápida Warp Charge 65T.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/OnePlus_9_Pro.png"
    },
    {
        id: "a20",
        name: "OnePlus 9",
        description: "El OnePlus 9 ofrece una pantalla Fluid AMOLED de 6.55 pulgadas, cámaras de alta calidad, procesador Snapdragon 888 y carga rápida Warp Charge 65T.",
        price: 2000,
        category: "celulares",
        stock: 4,
        image: "/image/OnePlus_9.png"
    },
    {
        id: "a21",
        name: "OnePlus 8T",
        description: " El OnePlus 8T tiene una pantalla Fluid AMOLED de 6.55 pulgadas, cámara cuádruple, procesador Snapdragon 865 y carga rápida Warp Charge 65.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/OnePlus_8T.png"
    },
    {
        id: "a22",
        name: "OnePlus Nord 2",
        description: "El OnePlus Nord 2 incluye una pantalla Fluid AMOLED de 6.43 pulgadas, cámara triple, procesador MediaTek Dimensity 1200-AI y carga rápida Warp Charge 65.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/OnePlus_Nord_2.png"
    },
    {
        id: "a23",
        name: "OnePlus Nord CE 5G",
        description: "El OnePlus Nord CE 5G ofrece una pantalla Fluid AMOLED de 6.43 pulgadas, cámara triple, procesador Snapdragon 750G y conectividad 5G.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/OnePlus_Nord_CE_5G.png"
    },
     // Xiaomi
     {
        id: "a24",
        name: "Xiaomi Mi 11 Ultra",
        description: "El Mi 11 Ultra cuenta con una pantalla AMOLED de 6.81 pulgadas, cámara triple con sensor principal de 50 MP, procesador Snapdragon 888 y carga rápida de 67W.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Xiaomi_Mi_11_Ultra.png"
    },
    {
        id: "a25",
        name: "Xiaomi Mi 11",
        description: "El Mi 11 ofrece una pantalla AMOLED de 6.81 pulgadas, cámara triple, procesador Snapdragon 888 y carga rápida de 55W.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Xiaomi_Mi_11.png"
    },
    {
        id: "a26",
        name: "Xiaomi Mi 11 Lite",
        description: "El Mi 11 Lite incluye una pantalla AMOLED de 6.55 pulgadas, cámara triple, procesador Snapdragon 732G y un diseño delgado y ligero.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Xiaomi_Mi_11_Lite.png"
    },
    {
        id: "a27",
        name: "Xiaomi Redmi Note 10 Pro",
        description: "El Redmi Note 10 Pro tiene una pantalla AMOLED de 6.67 pulgadas, cámara cuádruple con sensor de 108 MP, procesador Snapdragon 732G y batería de 5020 mAh.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Xiaomi_Redmi_Note_10_Pro.png"
    },
    {
        id: "a28",
        name: "Xiaomi Poco X3 Pro",
        description: "El Poco X3 Pro ofrece una pantalla IPS LCD de 6.67 pulgadas, cámara cuádruple, procesador Snapdragon 860 y batería de 5160 mAh.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Xiaomi_Poco_X3_Pro.png"
    },
    // Huawei
    {
        id: "a29",
        name: "Huawei P40 Pro",
        description: "El P40 Pro cuenta con una pantalla OLED de 6.58 pulgadas, cámara cuádruple Leica, procesador Kirin 990 5G y conectividad 5G.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Huawei_P40_Pro.png"
    },
    {
        id: "a30",
        name: "Huawei Mate 40 Pro",
        description: "El Mate 40 Pro ofrece una pantalla OLED de 6.76 pulgadas, cámara triple Leica, procesador Kirin 9000 5G y carga rápida de 66W.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Huawei_Mate_40_Pro.png"
    },
    {
        id: "a31",
        name: "Huawei Nova 8 Pro",
        description: "El Nova 8 Pro tiene una pantalla OLED de 6.72 pulgadas, cámara cuádruple, procesador Kirin 985 y carga rápida de 66W.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Huawei_Nova_8_Pro.png"
    },
    {
        id: "a32",
        name: "Huawei P30 Pro",
        description: "El P30 Pro incluye una pantalla OLED de 6.47 pulgadas, cámara cuádruple Leica, procesador Kirin 980 y batería de 4200 mAh con carga rápida.",
        price: 2000,
        category: "celulares",
        stock: 10,
        image: "/image/Huawei_P30_Pro.png"
    },
    //computadoras
    // Laptops Windows
    {
        id: "a33",
        name: "Dell XPS 13",
        description: "El Dell XPS 13 es una ultrabook premium con pantalla InfinityEdge de 13.4 pulgadas, procesadores Intel de 11ª generación y un diseño compacto y elegante.",
        price: 22000,
        category: "computadoras",
        stock: 10,
        image: "/image/Dell_XPS_13.png"
    },
    {
        id: "a34",
        name: "HP Spectre x360",
        description: "El HP Spectre x360 es un convertible 2 en 1 con pantalla táctil de 13.3 pulgadas, procesadores Intel de 11ª generación y una batería de larga duración.",
        price: 28000,
        category: "computadoras",
        stock: 10,
        image: "/image/HP_Spectre_x360.png"
    },
    {
        id: "a35",
        name: "Lenovo ThinkPad X1 Carbon",
        description: "El ThinkPad X1 Carbon es una laptop empresarial con pantalla de 14 pulgadas, procesadores Intel de 11ª generación, durabilidad de grado militar y un teclado de alta calidad.",
        price: 50000,
        category: "computadoras",
        stock: 10,
        image: "/image/Lenovo_ThinkPad_X1_Carbon.png"
    },
    {
        id: "a36",
        name: "Microsoft Surface Laptop 4",
        description: "El Surface Laptop 4 ofrece una pantalla PixelSense de 13.5 o 15 pulgadas, opciones de procesadores Intel o AMD, y un diseño elegante y ligero.",
        price: 25000,
        category: "computadoras",
        stock: 10,
        image: "/image/Microsoft_Surface_Laptop_4.png"
    },
    {
        id: "a37",
        name: "ASUS ZenBook 14",
        description: "El ZenBook 14 cuenta con una pantalla NanoEdge de 14 pulgadas, procesadores Intel de 11ª generación, y un diseño delgado y portátil con larga duración de batería.",
        price: 20000,
        category: "computadoras",
        stock: 10,
        image: "/image/ASUS_ZenBook_14.png"
    },
    {
        id: "a38",
        name: "Acer Swift 3",
        description: "El Acer Swift 3 ofrece una pantalla de 14 pulgadas, procesadores Intel de 11ª generación o AMD Ryzen, y una excelente relación calidad-precio con buena portabilidad.",
        price: 12000,
        category: "computadoras",
        stock: 10,
        image: "/image/Acer_Swift_3.png"
    },
    // Laptops para juegos (Gaming)
    {
        id: "a39",
        name: "ASUS ROG Zephyrus G14",
        description: "El ROG Zephyrus G14 es una laptop gaming con pantalla de 14 pulgadas, procesadores AMD Ryzen, gráficos NVIDIA GeForce RTX, y un diseño compacto y potente.",
        price: 29000,
        category: "computadoras",
        stock: 10,
        image: "/image/ASUS_ROG_Zephyrus_G14.png"
    },
    {
        id: "a40",
        name: "MSI GS66 Stealth",
        description: "El MSI GS66 Stealth es una laptop gaming con pantalla de 15.6 pulgadas, procesadores Intel de 10ª generación, gráficos NVIDIA GeForce RTX, y un diseño delgado y elegante.",
        price: 29000,
        category: "computadoras",
        stock: 10,
        image: "/image/MSI_GS66_Stealth.png"
    },
    {
        id: "a41",
        name: "Razer Blade 15",
        description: "El Razer Blade 15 es una laptop gaming con pantalla de 15.6 pulgadas, procesadores Intel de 10ª generación, gráficos NVIDIA GeForce RTX, y un chasis de aluminio de alta calidad.",
        price: 42000,
        category: "computadoras",
        stock: 10,
        image: "/image/Razer_Blade_15.png"
    },
    {
        id: "a42",
        name: "Alienware m15 R6",
        description: "El Alienware m15 R6 es una laptop gaming con pantalla de 15.6 pulgadas, procesadores Intel de 11ª generación, gráficos NVIDIA GeForce RTX, y un diseño futurista y robusto.",
        price: 62000,
        category: "computadoras",
        stock: 10,
        image: "/image/Alienware_m15_R6.png"
    },
    {
        id: "a43",
        name: "HP Omen 15",
        description: "El HP Omen 15 es una laptop gaming con pantalla de 15.6 pulgadas, procesadores Intel o AMD, gráficos NVIDIA GeForce RTX, y un sistema de refrigeración avanzada.",
        price: 72000,
        category: "computadoras",
        stock: 10,
        image: "/image/HP_Omen_15.png"
    },
    {
        id: "a44",
        name: "Lenovo Legion 5 Pro",
        description: "El Lenovo Legion 5 Pro es una laptop gaming con pantalla de 16 pulgadas, procesadores AMD Ryzen, gráficos NVIDIA GeForce RTX, y una excelente relación calidad-precio.",
        price: 42000,
        category: "computadoras",
        stock: 10,
        image: "/image/Lenovo_Legion_5_Pro.png"
    },
    // MacBook (Laptops de Apple)
    {
        id: "a45",
        name: "MacBook Air (M1)",
        description: "El MacBook Air con chip M1 ofrece una pantalla Retina de 13.3 pulgadas, rendimiento y eficiencia mejorados, y una batería de larga duración en un diseño ultradelgado.",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/MacBook_Air_(M1).png"
    },
    {
        id: "a46",
        name: "MacBook Pro 13\" (M1)",
        description: "El MacBook Pro de 13 pulgadas con chip M1 cuenta con una pantalla Retina, rendimiento profesional, y una batería de larga duración en un diseño compacto.",
        price: 102000,
        category: "computadoras",
        stock: 10,
        image: "/image/MacBook_Pro_13_(M1).png"
    },
    {
        id: "a47",
        name: "MacBook Pro 14\" (M1 Pro/Max)",
        description: "El MacBook Pro de 14 pulgadas con chip M1 Pro/Max ofrece una pantalla Liquid Retina XDR, rendimiento profesional, y una batería de larga duración en un diseño potente.",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/MacBook_Pro_14_(M1_Pro_Max).png"
    },
    {
        id: "a48",
        name: "MacBook Pro 16\" (M1 Pro/Max)",
        description: "El MacBook Pro de 16 pulgadas con chip M1 Pro/Max ofrece una pantalla Liquid Retina XDR, rendimiento profesional, y una batería de larga duración en un diseño de gran potencia.",
        price: 2000,
        category: "computadoras",
        stock: 10,
        image: "/image/MacBook_Pro_16_(M1_Pro_Max).png"
    },
    // Laptops Chromebook
    {
        id: "a49",
        name: "Google Pixelbook Go",
        description: "El Pixelbook Go es un Chromebook ligero y portátil con pantalla táctil de 13.3 pulgadas, procesadores Intel y una batería de larga duración.",
        price: 22000,
        category: "computadoras",
        stock: 10,
        image: "/image/Google_Pixelbook_Go.png"
    },
    {
        id: "a50",
        name: "ASUS Chromebook Flip C434",
        description: "El Chromebook Flip C434 es un convertible 2 en 1 con pantalla táctil de 14 pulgadas, diseño metálico y una batería de larga duración.",
        price: 82000,
        category: "computadoras",
        stock: 10,
        image: "/image/ASUS_Chromebook_Flip_C434.png"
    },
    {
        id: "a51",
        name: "Acer Chromebook Spin 713",
        description: "El Chromebook Spin 713 es un convertible 2 en 1 con pantalla táctil de 13.5 pulgadas, procesadores Intel de 10ª generación y una batería de larga duración.",
        price: 42000,
        category: "computadoras",
        stock: 10,
        image: "/image/Acer_Chromebook_Spin_713.png"
    },
    {
        id: "a52",
        name: "HP Chromebook x360 14c",
        description: "El Chromebook x360 14c es un convertible 2 en 1 con pantalla táctil de 14 pulgadas, procesadores Intel y un diseño elegante y portátil.",
        price: 32000,
        category: "computadoras",
        stock: 10,
        image: "/image/HP_Chromebook_x360_14c.png"
    },
    {
        id: "a53",
        name: "Lenovo Chromebook Duet",
        description: "El Chromebook Duet es un 2 en 1 desmontable con pantalla táctil de 10.1 pulgadas, procesador MediaTek y una excelente relación calidad-precio para la portabilidad.",
        price: 22000,
        category: "computadoras",
        stock: 10,
        image: "/image/Lenovo_Chromebook_Duet.png"
    },
    // All-in-One (Todo en uno)
    {
        id: "a54",
        name: "Apple iMac 24\" (M1)",
        description: "El iMac de 24 pulgadas con chip M1 ofrece una pantalla Retina 4.5K, rendimiento mejorado, y un diseño ultradelgado con una gama de colores vibrantes.",
        price: 62000,
        category: "computadoras",
        stock: 10,
        image: "/image/Apple_iMac_24_(M1).png"
    },
    {
        id: "a55",
        name: "Dell XPS 27",
        description: "El XPS 27 es un todo-en-uno con pantalla 4K Ultra HD de 27 pulgadas, procesadores Intel y un sistema de sonido avanzado, ideal para el entretenimiento y la productividad.",
        price: 72000,
        category: "computadoras",
        stock: 10,
        image: "/image/Dell_XPS_27.png"
    },
    {
        id: "a56",
        name: "HP Envy 32 All-in-One",
        description: "El Envy 32 All-in-One cuenta con una pantalla 4K de 32 pulgadas, procesadores Intel, gráficos NVIDIA y un sistema de sonido Bang & Olufsen.",
        price: 27000,
        category: "computadoras",
        stock: 10,
        image: "/image/HP_Envy_32_AllinOne.png"
    },
    {
        id: "a57",
        name: "Microsoft Surface Studio 2",
        description: "El Surface Studio 2 es un todo-en-uno con pantalla táctil PixelSense de 28 pulgadas, procesadores Intel, gráficos NVIDIA y diseño ajustable para la creatividad profesional.",
        price: 22000,
        category: "computadoras",
        stock: 10,
        image: "/image/Microsoft_Surface_Studio_2.png"
    },
    // Desktops para juegos (Gaming)
    {
        id: "a58",
        name: "Alienware Aurora R12",
        description: "El Aurora R12 es una PC gaming de alto rendimiento con procesadores Intel de 11ª generación, gráficos NVIDIA GeForce RTX, y un diseño futurista con iluminación personalizable.",
        price: 21000,
        category: "computadoras",
        stock: 10,
        image: "/image/Alienware_Aurora_R12.png"
    },
    {
        id: "a59",
        name: "MSI Trident X",
        description: "El Trident X es una PC gaming compacta con procesadores Intel de 11ª generación, gráficos NVIDIA GeForce RTX, y un diseño elegante y eficiente.",
        price: 26000,
        category: "computadoras",
        stock: 10,
        image: "/image/MSI_Trident_X.png"
    },
    {
        id: "a60",
        name: "ASUS ROG Strix G15",
        description: "El ROG Strix G15 es una PC gaming con procesadores AMD Ryzen, gráficos NVIDIA GeForce RTX, y un diseño agresivo con iluminación RGB.",
        price: 21000,
        category: "computadoras",
        stock: 10,
        image: "/image/ASUS_ROG_Strix_G15.png"
    },
    {
        id: "a61",
        name: "HP Omen 30L",
        description: "El Omen 30L es una PC gaming de alto rendimiento con procesadores Intel o AMD, gráficos NVIDIA GeForce RTX, y un diseño elegante con iluminación personalizable.",
        price: 22000,
        category: "computadoras",
        stock: 10,
        image: "/image/HP_Omen_30L.png"
    },
    {
        id: "a62",
        name: "Acer Predator Orion 3000",
        description: "El Predator Orion 3000 es una PC gaming compacta con procesadores Intel, gráficos NVIDIA GeForce RTX, y un sistema de refrigeración avanzado.",
        price: 28000,
        category: "computadoras",
        stock: 10,
        image: "/image/Acer_Predator_Orion_3000.png"
    },
    // Mini PCs y computadoras compactas
    {
        id: "a63",
        name: "Intel NUC 11",
        description: "El NUC 11 es un mini PC compacto y potente con procesadores Intel de 11ª generación, ideal para entornos de trabajo y entretenimiento en espacios reducidos.",
        price: 12000,
        category: "computadoras",
        stock: 10,
        image: "/image/Intel_NUC_11.png"
    },
    {
        id: "a64",
        name: "Apple Mac Mini (M1)",
        description: "El Mac Mini con chip M1 ofrece un rendimiento impresionante en un diseño compacto, ideal para la productividad y el entretenimiento en el hogar.",
        price: 32000,
        category: "computadoras",
        stock: 10,
        image: "/image/Apple_Mac_Mini_(M1).png"
    },
    {
        id: "a65",
        name: "ASUS Mini PC PN50",
        description: "El Mini PC PN50 es un mini PC compacto con procesadores AMD Ryzen, ideal para aplicaciones de oficina y entretenimiento en espacios reducidos.",
        price: 21000,
        category: "computadoras",
        stock: 10,
        image: "/image/ASUS_Mini_PC_PN50.png"
    },
    {
        id: "a66",
        name: "Lenovo ThinkCentre M90n",
        description: "El ThinkCentre M90n es un mini PC compacto y potente con procesadores Intel, ideal para entornos de trabajo con espacio limitado.",
        price: 32000,
        category: "computadoras",
        stock: 10,
        image: "/image/Lenovo_ThinkCentre_M90n.png"
    },
    //Electronica
    //Auriculares bluetoth
    {
        id: "a67",
        name: "AirPods Pro de Apple",
        description: "Los AirPods Pro ofrecen cancelación activa de ruido, modo transparencia, ajuste personalizado y resistencia al agua, ideales para un audio de alta calidad y comodidad.",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/AirPods_Pro_de_Apple.png"
    },
    {
        id: "a68",
        name: "Sony WH-1000XM4",
        description: "Los WH-1000XM4 ofrecen cancelación de ruido líder en la industria, sonido de alta calidad, y comodidad para largas sesiones de uso.",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/Sony_WH_1000XM4.png"
    },
    {
        id: "a69",
        name: "Jabra Elite 85t",
        description: "Los Elite 85t cuentan con cancelación activa de ruido ajustable, sonido de alta calidad, y un diseño cómodo para uso prolongado.",
        price: 2600,
        category: "electronica",
        stock: 10,
        image: "/image/Jabra_Elite_85t.png"
    },
    {
        id: "a70",
        name: "Bose QuietComfort Earbuds",
        description: "Los QuietComfort Earbuds ofrecen cancelación activa de ruido, sonido equilibrado, y un ajuste seguro y cómodo.",
        price: 1000,
        category: "electronica",
        stock: 10,
        image: "/image/Bose_QuietComfort_Earbuds.png"
    },
    {
        id: "a71",
        name: "Sennheiser Momentum True Wireless 2",
        description: "Los Momentum True Wireless 2 ofrecen sonido de alta fidelidad, cancelación activa de ruido, y un diseño elegante y cómodo.",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/Sennheiser_Momentum_True_Wireless_2.png"
    },
    //ratones y teclados
    {
        id: "a72",
        name: "Logitech MX Master 3",
        description: "El MX Master 3 es un ratón ergonómico avanzado con desplazamiento electromagnético, múltiples botones personalizables y conectividad múltiple.",
        price: 2500,
        category: "electronica",
        stock: 10,
        image: "/image/Logitech_MX_Master_3.png"
    },
    {
        id: "a73",
        name: "Razer DeathAdder V2",
        description: "El DeathAdder V2 es un ratón gaming ergonómico con sensor óptico de alta precisión, switches mecánicos y diseño cómodo para largas sesiones de juego.",
        price: 2100,
        category: "electronica",
        stock: 10,
        image: "/image/Razer_DeathAdder_V2.png"
    },
    {
        id: "a74",
        name: "Corsair K95 RGB Platinum XT",
        description: "El K95 RGB Platinum XT es un teclado mecánico gaming con retroiluminación RGB, switches Cherry MX y teclas macro dedicadas.",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/Corsair_K95_RGB_Platinum_XT.png"
    },
    {
        id: "a75",
        name: "SteelSeries Apex Pro",
        description: "El Apex Pro es un teclado mecánico gaming con switches ajustables, retroiluminación RGB y una pantalla OLED integrada.",
        price: 2900,
        category: "electronica",
        stock: 10,
        image: "/image/SteelSeries_Apex_Pro.png"
    },
    {
        id: "a76",
        name: "Microsoft Surface Precision Mouse",
        description: "El Surface Precision Mouse es un ratón ergonómico con múltiples botones personalizables, conectividad múltiple y un diseño cómodo para largas sesiones de uso.",
        price: 2200,
        category: "electronica",
        stock: 10,
        image: "/image/Microsoft_Surface_Precision_Mouse.png"
    },
    //monitores
    {
        id: "a82",
        name: "LG UltraGear 27GN950-B",
        description: "El UltraGear 27GN950-B es un monitor gaming de 27 pulgadas con resolución 4K UHD, tasa de refresco de 144Hz, tiempo de respuesta de 1ms y compatibilidad con NVIDIA G-SYNC y AMD FreeSync.",
        price: 11200,
        category: "electronica",
        stock: 10,
        image: "/image/LG_UltraGear_27GN950_B.png"
    },
    {
        id: "a83",
        name: "Dell S3222HN",
        description: "El Dell S3222HN es un monitor curvo de 32 pulgadas con resolución Full HD, panel VA, tecnología AMD FreeSync y diseño elegante para una experiencia de visualización inmersiva.",
        price: 21000,
        category: "electronica",
        stock: 10,
        image: "/image/Dell_S3222HN.png"
    },
    {
        id: "a84",
        name: "ASUS ROG Swift PG279Q",
        description: "El ROG Swift PG279Q es un monitor gaming de 27 pulgadas con resolución WQHD, tasa de refresco de 165Hz, panel IPS y compatibilidad con NVIDIA G-SYNC.",
        price: 24000,
        category: "electronica",
        stock: 10,
        image: "/image/ASUS_ROG_Swift_PG279Q.png"
    },
    {
        id: "a85",
        name: "Samsung Odyssey G7",
        description: "El Odyssey G7 es un monitor gaming curvo de 27 pulgadas con resolución QHD, tasa de refresco de 240Hz, tiempo de respuesta de 1ms y compatibilidad con G-SYNC y FreeSync Premium Pro.",
        price: 23000,
        category: "electronica",
        stock: 10,
        image: "/image/Samsung_Odyssey_G7.png"
    },
    {
        id: "a86",
        name: "BenQ EW3270U",
        description: "El EW3270U es un monitor de 32 pulgadas con resolución 4K UHD, panel VA, tecnología HDR y compatibilidad con AMD FreeSync para una experiencia visual impresionante.",
        price: 32000,
        category: "electronica",
        stock: 10,
        image: "/image/BenQ_EW3270U.png"
    },
    {
        id: "a87",
        name: "AOC C24G1A",
        description: "Descripcion producto 87",
        price: 2000,
        category: "electronica",
        stock: 10,
        image: "/image/AOC_C24G1A.png"
    }


]


//Subir array de productos a DB
const seedProducts = () =>{
    products.map(({id,...rest})=>{
        addDoc(collection(db,"products"),rest)
    });
}

//seedProducts()




