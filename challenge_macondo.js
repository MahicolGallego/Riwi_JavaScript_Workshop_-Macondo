const productsFirstAirport = [
  { product: "almohabana y gaseosa", price: 15000 },
  { product: "subway y gaseosa", price: 23000 },
];

const productsSecondAirport = [
  { product: "salchipapa", price: 21000 },
  { product: "combo macdonals", price: 18000 },
];

let hildebrandoMoney = 2500000;

let userAction;
do {
  userAction = prompt(
    "Estas en el aeropuerto el dorado. ¿Que deseas hacer?\n1. Comprar comida.\n2. Comprar comida en medellin"
  ).trim();
} while (userAction !== "1" && userAction !== "2");

if (userAction === "2") {
  alert("Ok puedes comprar productos en medellin...");
} else {
  let message = "";
  const indexProductsAlllow = [];
  productsFirstAirport.forEach((element, index) => {
    message =
      message +
      `\n${index + 1}. Producto: ${element.product}\nPrecio: $${element.price}`;
    indexProductsAlllow.push(index);
  });

  let purchasedProduct;

  do {
    purchasedProduct = prompt(`Lista de productos: ${message}`).trim();
  } while (!indexProductsAlllow.includes(purchasedProduct - 1));

  hildebrandoMoney =
    hildebrandoMoney - productsFirstAirport[purchasedProduct - 1].price;
  alert(`Compra realizada\nsaldo actual = $${hildebrandoMoney}`);

  if (purchasedProduct - 1 === 0) alert("Levas mucho en el stand y te cae mal");
  else alert("Buena eleccion. Vas lleno y bien");
}
