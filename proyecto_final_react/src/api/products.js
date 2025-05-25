const products = [
  {
    id: 1,
    marca: "Apple",
    modelo: "MacBook Air M2",
    precio: 5200000,
    categoria: "Laptop",
    color: "Gris espacial",
    descripcion: "Diseño delgado y batería de hasta 18 horas.",
    stock: 10
  },
  {
    id: 2,
    marca: "Samsung",
    modelo: "Galaxy S23",
    precio: 4000000,
    categoria: "Smartphone",
    color: "Azul zafiro",
    descripcion: "Cámara de 50MP y pantalla AMOLED 120Hz.",
    stock: 10
  },
  {
    id: 3,
    marca: "Huawei",
    modelo: "Mate 50 Pro",
    precio: 3500000,
    categoria: "Smartphone",
    color: "Negro",
    descripcion: "Cámara Leica y resistencia IP68.",
    stock: 10
  },
  {
    id: 4,
    marca: "Lenovo",
    modelo: "Tablet 11\"",
    precio: 2300000,
    categoria: "Tablet",
    color: "Plata",
    descripcion: "Con Dolby Atmos y Android 13.",
    stock: 10
  },
  {
    id: 5,
    marca: "Xiaomi",
    modelo: "Redmi Note 12",
    precio: 1750000,
    categoria: "Smartphone",
    color: "Blanco",
    descripcion: "Carga rápida y pantalla AMOLED.",
    stock: 10
  },
  {
    id: 6,
    marca: "Microsoft",
    modelo: "Surface Pro 9",
    precio: 4600000,
    categoria: "Laptop 2 en 1",
    color: "Platino",
    descripcion: "Pantalla táctil y lápiz.",
    stock: 10
  },
  {
    id: 7,
    marca: "Motorola",
    modelo: "Moto G Power",
    precio: 1500000,
    categoria: "Smartphone",
    color: "Verde jade",
    descripcion: "Batería de 3 días.",
    stock: 10
  },
  {
    id: 8,
    marca: "Realme",
    modelo: "Realme 11 Pro",
    precio: 1350000,
    categoria: "Smartphone",
    color: "Dorado",
    descripcion: "Cámara de 100MP.",
    stock: 10
  },
  {
    id: 9,
    marca: "Asus",
    modelo: "ASUS ROG",
    precio: 6000000,
    categoria: "Laptop gamer",
    color: "Negro",
    descripcion: "RTX 4060 y pantalla 144Hz.",
    stock: 10
  },
  {
    id: 10,
    marca: "Oppo",
    modelo: "Oppo A78",
    precio: 1600000,
    categoria: "Smartphone",
    color: "Azul cielo",
    descripcion: "Pantalla de 90Hz y Android 13.",
    stock: 10
  },
  {
    id: 11,
    marca: "Amazon",
    modelo: "Fire HD 10",
    precio: 650000,
    categoria: "Tablet",
    color: "Rojo",
    descripcion: "Para lectura, películas y videollamadas.",
    stock: 10
  },
  {
    id: 12,
    marca: "Apple",
    modelo: "Apple Watch SE",
    precio: 1600000,
    categoria: "Smartwatch",
    color: "Midnight",
    descripcion: "Sensor de caídas.",
    stock: 10
  },
  {
    id: 13,
    marca: "Samsung",
    modelo: "Galaxy Watch5",
    precio: 1000000,
    categoria: "Smartwatch",
    color: "Grafito",
    descripcion: "ECG y GPS.",
    stock: 10
  },
  {
    id: 14,
    marca: "HP",
    modelo: "Laptop Intel i5",
    precio: 3000000,
    categoria: "Laptop",
    color: "Azul oscuro",
    descripcion: "8GB RAM y 256GB SSD.",
    stock: 10
  },
  {
    id: 15,
    marca: "TCL",
    modelo: "TCL 30 SE",
    precio: 800000,
    categoria: "Smartphone",
    color: "Negro",
    descripcion: "Cámara de 50MP.",
    stock: 10
  },
  {
    id: 16,
    marca: "Google",
    modelo: "Pixel 7",
    precio: 3800000,
    categoria: "Smartphone",
    color: "Verde musgo",
    descripcion: "Cámara inteligente.",
    stock: 10
  },
  {
    id: 17,
    marca: "OnePlus",
    modelo: "OnePlus 11",
    precio: 2800000,
    categoria: "Smartphone",
    color: "Gris",
    descripcion: "Snapdragon 8 Gen 2.",
    stock: 10
  },
  {
    id: 18,
    marca: "Huawei",
    modelo: "MatePad 11",
    precio: 1900000,
    categoria: "Tablet",
    color: "Dorado",
    descripcion: "Pantalla 2K y M-Pen.",
    stock: 10
  },
  {
    id: 19,
    marca: "Acer",
    modelo: "Acer Aspire",
    precio: 2600000,
    categoria: "Laptop",
    color: "Negro carbón",
    descripcion: "512GB SSD.",
    stock: 10
  },
  {
    id: 20,
    marca: "Nokia",
    modelo: "Android One",
    precio: 1100000,
    categoria: "Smartphone",
    color: "Azul oscuro",
    descripcion: "Batería de 2 días.",
    stock: 10
  },
    {
    id: 21,
    marca: "Apple",
    modelo: "MacBook Pro 14”",
    precio: 6800000,
    categoria: "Laptop",
    color: "Plata",
    descripcion: "Chip M3.",
    stock: 10
  },
  {
    id: 22,
    marca: "Honor",
    modelo: "Honor X7",
    precio: 1200000,
    categoria: "Smartphone",
    color: "Azul",
    descripcion: "Cámara cuádruple.",
    stock: 10
  },
  {
    id: 23,
    marca: "Alcatel",
    modelo: "Alcatel 1",
    precio: 500000,
    categoria: "Smartphone",
    color: "Negro",
    descripcion: "Android Go.",
    stock: 10
  },
  {
    id: 24,
    marca: "Lenovo",
    modelo: "Ideapad 3",
    precio: 2100000,
    categoria: "Laptop",
    color: "Gris",
    descripcion: "Ryzen 5 y 8GB RAM.",
    stock: 10
  },
  {
    id: 25,
    marca: "Xiaomi",
    modelo: "Mi Band 8",
    precio: 350000,
    categoria: "Smartband",
    color: "Negro",
    descripcion: "Monitor de ritmo cardíaco.",
    stock: 10
  },
  {
    id: 26,
    marca: "Amazfit",
    modelo: "GTR 3 Pro",
    precio: 900000,
    categoria: "Smartwatch",
    color: "Azul",
    descripcion: "150 modos deportivos.",
    stock: 10
  },
  {
    id: 27,
    marca: "Realme",
    modelo: "Realme Pad",
    precio: 1100000,
    categoria: "Tablet",
    color: "Gris",
    descripcion: "Pantalla 2K.",
    stock: 10
  },
  {
    id: 28,
    marca: "Sony",
    modelo: "Xperia 10 V",
    precio: 3200000,
    categoria: "Smartphone",
    color: "Negro",
    descripcion: "Sonido envolvente.",
    stock: 10
  },
  {
    id: 29,
    marca: "Samsung",
    modelo: "Galaxy Tab S9",
    precio: 4300000,
    categoria: "Tablet",
    color: "Negro",
    descripcion: "S Pen incluido.",
    stock: 10
  },
  {
    id: 30,
    marca: "Apple",
    modelo: "iPad Air",
    precio: 4500000,
    categoria: "Tablet",
    color: "Plata",
    descripcion: "Chip M1 y pantalla Retina.",
    stock: 10
  },
  {
    id: 31,
    marca: "HP",
    modelo: "Laptop Básica",
    precio: 1900000,
    categoria: "Laptop",
    color: "Blanco",
    descripcion: "Para estudiantes.",
    stock: 10
  },
  {
    id: 32,
    marca: "Huawei",
    modelo: "Watch GT 4",
    precio: 1300000,
    categoria: "Smartwatch",
    color: "Negro",
    descripcion: "Batería de 14 días.",
    stock: 10
  },
  {
    id: 33,
    marca: "Honor",
    modelo: "Watch GS3",
    precio: 900000,
    categoria: "Smartwatch",
    color: "Azul oscuro",
    descripcion: "GPS integrado.",
    stock: 10
  },
  {
    id: 34,
    marca: "LG",
    modelo: "LG Ultra Tab",
    precio: 2400000,
    categoria: "Tablet",
    color: "Negro",
    descripcion: "11\" y Android 12.",
    stock: 10
  },
  {
    id: 35,
    marca: "Tecno",
    modelo: "Tecno Spark 10",
    precio: 950000,
    categoria: "Smartphone",
    color: "Morado",
    descripcion: "Cámara de 50MP.",
    stock: 10
  },
  {
    id: 36,
    marca: "Infinix",
    modelo: "Infinix Zero 5G",
    precio: 850000,
    categoria: "Smartphone",
    color: "Gris",
    descripcion: "Pantalla de 120Hz.",
    stock: 10
  },
  {
    id: 37,
    marca: "Apple",
    modelo: "iPhone SE 2022",
    precio: 3500000,
    categoria: "Smartphone",
    color: "Negro",
    descripcion: "Chip A15 Bionic.",
    stock: 10
  },
  {
    id: 38,
    marca: "Vivo",
    modelo: "Vivo V29",
    precio: 1700000,
    categoria: "Smartphone",
    color: "Azul",
    descripcion: "Cámara de retrato avanzada.",
    stock: 10
  },
  {
    id: 39,
    marca: "Dell",
    modelo: "Inspiron 15",
    precio: 4000000,
    categoria: "Laptop",
    color: "Negro",
    descripcion: "Intel Core i7 y 16GB RAM.",
    stock: 10
  },
  {
    id: 40,
    marca: "Samsung",
    modelo: "Galaxy Book Go",
    precio: 2600000,
    categoria: "Laptop",
    color: "Gris",
    descripcion: "Snapdragon.",
    stock: 10
  },
]

export default products;

