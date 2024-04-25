const productsFirstAirport = [
  { product: "almohabana y gaseosa", price: 15000 },
  { product: "subway y gaseosa", price: 23000 },
];

const productsSecondAirport = [
  { product: "salchipapa", price: 21000 },
  { product: "combo macdonals", price: 18000 },
];

let hildebrandoMoney = 2500000;

//Primera parte case 1

let userActionFirstOptionToEat;
do {
  userActionFirstOptionToEat = prompt(
    "Estas en el aeropuerto el dorado. ¿Que deseas hacer?\n1. Comprar comida.\n2. Comprar comida en medellin"
  ).trim();
} while (userActionFirstOptionToEat !== "1" && userActionFirstOptionToEat !== "2");

//Si selecciona no comer

if (userActionFirstOptionToEat === "2") {
  alert("Ok puedes comprar productos en medellin...");
} else {
  //Si selecciona comer

  let message = "";
  const indexProductsAllow = [];
  productsFirstAirport.forEach((element, index) => {
    message =
      message +
      `\n${index + 1}. Producto: ${element.product}\nPrecio: $${element.price}`;
    indexProductsAllow.push(index);
  });

  let purchasedProduct;

  do {
    purchasedProduct = Number(prompt(`Lista de productos: ${message}`).trim());
  } while (!indexProductsAllow.includes(purchasedProduct - 1));

  hildebrandoMoney -= productsFirstAirport[purchasedProduct - 1].price;
  alert(`Compra realizada\nDinero actual = $${hildebrandoMoney}`);

  if (purchasedProduct - 1 === 0) alert("Levas mucho en el stand y te cae mal");
  else alert("Buena eleccion. Vas lleno y bien");
}

// Case 2

alert(
  "llegas a la sala de espera, y tu maleta no cumple con el tamaño de maleta de mano permitido.\n\nPermitidos\nAlto: 55cm\nLargo: 40cm\nAncho: 20cm\n\nTu maleta\nAlto: 60cm\nLargo: 40cm\nAncho: 20cm"
);

const heigthSuitcase = 60;
const widthSuitcase = 20;
const largeSuitcase = 40;

const heigthAllowed = 55;
const widthAllowed = 20;
const largeAllowed = 40;

const reductionFactorHeigth = heigthAllowed / heigthSuitcase;
const reductionFactorWidth = widthAllowed / widthSuitcase;
const reductionFactorLarge = largeAllowed / largeSuitcase;

// Factor de reducción mas pequeño

const generalReductionFActor = Math.min(
  reductionFactorHeigth,
  reductionFactorLarge,
  reductionFactorWidth
);

//Calcular las nuevas dimensiones para la maleta

const newHeigthSuitcase = Number((heigthSuitcase * generalReductionFActor).toFixed(2));
const newWidthSuitcase = Number((widthSuitcase * generalReductionFActor).toFixed(2));
const newLargeSuitcase = Number((largeSuitcase * generalReductionFActor).toFixed(2));

alert(
  `Debes sacar elementos hasta que la maleta tenga minimo las siguientes nuevas dimensiones:\n\nAlto: ${newHeigthSuitcase}cm\nLargo: ${newLargeSuitcase}cm\nAncho: ${newWidthSuitcase}cm`
);

//Continuacion case 1 si hildebrando no compro comida en el dorado

alert("Llegas a medellin")

if(userActionFirstOptionToEat === "2"){

  let message = "";
  const indexProductsAllow = [];
  productsSecondAirport.forEach((element, index) => {
    message =
      message +
      `\n${index + 1}. Producto: ${element.product}\nPrecio: $${element.price}`;
    indexProductsAllow.push(index);
  });

  let purchasedProduct;

  do {
    purchasedProduct = Number(prompt(`No consumiste alimentos en el dorado, debes comer algo.\n\nLista de productos: ${message}`).trim());
  } while (!indexProductsAllow.includes(purchasedProduct - 1));

  hildebrandoMoney -= productsSecondAirport[purchasedProduct-1].price;

  alert(`Compra realizada\nDinero actual = $${hildebrandoMoney}`);

}

// Case 3

alert("Te encuentras con el problema de que el wifi del aeropuerto está fallando, y necesitas asegurar tu reserva en el hotel para el siguiente día, caminando por el aeropuerto encuentra wifi, la red se llama \" ElPassEs: 01110010_01101001_01110111_01101001\", pero la contraseña está cifrada en números binarios, además cobran 50.000 la hora.")

const encryptedKey = "01110010_01101001_01110111_01101001";

const binaryPartition = encryptedKey.split("_").map(element => parseInt(element, 2)
)

let decryptedKey = "";

console.log(binaryPartition)

binaryPartition.forEach(element => {
  decryptedKey += String.fromCharCode(element)
})

hildebrandoMoney = hildebrandoMoney - 50000;

alert(`Descifrando la clave...\n\nAl fin, la clave es: ${decryptedKey}\nHay que descifrar la clave y encima pagar $50.000\nDinero actual = $${hildebrandoMoney}`)