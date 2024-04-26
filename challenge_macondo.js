// //Variables

let hildebrandoMoney = 2500000;

// const productsFirstAirport = [
//   { product: 'almohabana y gaseosa', price: 15000 },
//   { product: 'subway y gaseosa', price: 23000 },
// ];

// const productsSecondAirport = [
//   { product: 'salchipapa', price: 21000 },
//   { product: 'combo macdonals', price: 18000 },
// ];

// const arrayRockPaperExcisor = ['piedra', 'papel', 'tijeras'];

const activitysDependShirtColor = [
  {
    colorShirt: "amarillo",
    activitiesType: "piscina",
    availablesActivities: ["piscina"],
  },
  {
    colorShirt: "verde",
    activitiesType: "caminatas",
    availablesActivities: ["caminatas"],
  },
  {
    colorShirt: "roja",
    activitiesType: "actividades en la playa",
    availablesActivities: [
      "voleibol",
      "nadar",
      "montar moto",
      "caminatas",
      "tomar cocteles",
    ],
  },
  {
    colorShirt: "azul",
    activitiesType: "actividades dentro del hotel",
    availablesActivities: ["bingo", "bailar", "casino"],
  },
];

// //Functions
// function convertTextAnyWithVowelI(text) {
//   const vowelRule = new RegExp('[aeiou]');

//   const textI = text
//     .split('')
//     .map((element) => {
//       if (vowelRule.test(element)) {
//         let elementI = element.replace(element, 'i');
//         return elementI;
//       }
//       return element;
//     })
//     .join('');

//   return textI;
// }

function activitiesOpt(list, colorShirtSelected) {
  let message = "";

  list.forEach((element) => {
    if (element.colorShirt === colorShirtSelected) {
      for (let i = 0; i < element.availablesActivities.length; i++) {
        message += `${element.availablesActivities[i]}\n`;
      }
    }
  });

  return message;
}

// //Program

// //Primera parte case 1

// let userActionFirstOptionToEat;
// do {
//   userActionFirstOptionToEat = prompt(
//     'Estas en el aeropuerto el dorado. ¿Que deseas hacer?\n1. Comprar comida.\n2. Comprar comida en medellin'
//   ).trim();
// } while (
//   userActionFirstOptionToEat !== '1' &&
//   userActionFirstOptionToEat !== '2'
// );

// //Si selecciona no comer

// if (userActionFirstOptionToEat === '2') {
//   alert('Ok puedes comprar productos en medellin...');
// } else {
//   //Si selecciona comer

//   let message = '';
//   const indexProductsAllow = [];
//   productsFirstAirport.forEach((element, index) => {
//     message =
//       message +
//       `\n${index + 1}. Producto: ${element.product}\nPrecio: $${element.price}`;
//     indexProductsAllow.push(index);
//   });

//   let purchasedProduct;

//   do {
//     purchasedProduct = Number(prompt(`Lista de productos: ${message}`).trim());
//   } while (!indexProductsAllow.includes(purchasedProduct - 1));

//   hildebrandoMoney -= productsFirstAirport[purchasedProduct - 1].price;
//   alert(`Compra realizada\nDinero actual = $${hildebrandoMoney}`);

//   if (purchasedProduct - 1 === 0) alert('Levas mucho en el stand y te cae mal');
//   else alert('Buena eleccion. Vas lleno y bien');
// }

// // Case 2

// alert(
//   'llegas a la sala de espera, y tu maleta no cumple con el tamaño de maleta de mano permitido.\n\nPermitidos\nAlto: 55cm\nLargo: 40cm\nAncho: 20cm\n\nTu maleta\nAlto: 60cm\nLargo: 40cm\nAncho: 20cm'
// );

// const heigthSuitcase = 60;
// const widthSuitcase = 20;
// const largeSuitcase = 40;

// const heigthAllowed = 55;
// const widthAllowed = 20;
// const largeAllowed = 40;

// const reductionFactorHeigth = heigthAllowed / heigthSuitcase;
// const reductionFactorWidth = widthAllowed / widthSuitcase;
// const reductionFactorLarge = largeAllowed / largeSuitcase;

// // Factor de reducción mas pequeño

// const generalReductionFActor = Math.min(
//   reductionFactorHeigth,
//   reductionFactorLarge,
//   reductionFactorWidth
// );

// //Calcular las nuevas dimensiones para la maleta

// const newHeigthSuitcase = Number(
//   (heigthSuitcase * generalReductionFActor).toFixed(2)
// );
// const newWidthSuitcase = Number(
//   (widthSuitcase * generalReductionFActor).toFixed(2)
// );
// const newLargeSuitcase = Number(
//   (largeSuitcase * generalReductionFActor).toFixed(2)
// );

// alert(
//   `Debes sacar elementos hasta que la maleta tenga minimo las siguientes nuevas dimensiones:\n\nAlto: ${newHeigthSuitcase}cm\nLargo: ${newLargeSuitcase}cm\nAncho: ${newWidthSuitcase}cm`
// );

// //Continuacion case 1 si hildebrando no compro comida en el dorado

// alert('Llegas a medellin');

// if (userActionFirstOptionToEat === '2') {
//   let message = '';
//   const indexProductsAllow = [];
//   productsSecondAirport.forEach((element, index) => {
//     message =
//       message +
//       `\n${index + 1}. Producto: ${element.product}\nPrecio: $${element.price}`;
//     indexProductsAllow.push(index);
//   });

//   let purchasedProduct;

//   do {
//     purchasedProduct = Number(
//       prompt(
//         `No consumiste alimentos en el dorado, debes comer algo.\n\nLista de productos: ${message}`
//       ).trim()
//     );
//   } while (!indexProductsAllow.includes(purchasedProduct - 1));

//   hildebrandoMoney -= productsSecondAirport[purchasedProduct - 1].price;

//   alert(`Compra realizada\nDinero actual = $${hildebrandoMoney}`);
// }

// // Case 3

// alert(
//   'Te encuentras con el problema de que el wifi del aeropuerto está fallando, y necesitas asegurar tu reserva en el hotel para el siguiente día, caminando por el aeropuerto encuentra wifi, la red se llama " ElPassEs: 01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números binarios, además cobran 50.000 la hora.'
// );

// const encryptedKey = '01110010_01101001_01110111_01101001';

// const binaryPartition = encryptedKey
//   .split('_')
//   .map((element) => parseInt(element, 2));

// let decryptedKey = '';

// console.log(binaryPartition);

// binaryPartition.forEach((element) => {
//   decryptedKey += String.fromCharCode(element);
// });

// hildebrandoMoney = hildebrandoMoney - 50000;

// alert(
//   `Descifrando la clave...\n\nAl fin, la clave es: ${decryptedKey}\nHay que descifrar la clave y encima pagar $50.000. Que descaro\nDinero actual = $${hildebrandoMoney}`
// );

// //case 4

// alert('Al fin llegas a Macondo\n\n');

// alert(
//   'Ahora se da cuenta que todos hablan diferente, solo hablan con la la vocal i\nGenial hay que traducir...'
// );

// const normalText = 'Taxi me puede llevar al hotel mariposas amarillas';

// const TextWithAnyVowelI = convertTextAnyWithVowelI(normalText);

// alert(
//   `${TextWithAnyVowelI}\n\nJoder... No puedo creer cuanto me costo articular eso\n\nToma el taxi y momentos despues llega al hotel...el taxi, le pide que le 300.000 pesos, y el queda sorprendido, asi que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los 300.000, pero si el taxista pierde, no le cobra nada\n\nEs un trato\nEs hora del du du du duelo...\n...`
// );

// // Case 5

// const optGameDriver =
//   arrayRockPaperExcisor[
//     Math.round(Math.random() * (arrayRockPaperExcisor.length - 1))
//   ];

// const optGameHildebrando =
//   arrayRockPaperExcisor[
//     Math.round(Math.random() * (arrayRockPaperExcisor.length - 1))
//   ];

// alert(
//   `Hildebrando -> ${optGameHildebrando}  vs  ${optGameDriver} <- Conductor`
// );

// if (
//   (optGameDriver === 'tijeras' && optGameHildebrando === 'papel') ||
//   (optGameDriver === 'piedra' && optGameHildebrando === 'tijeras') ||
//   (optGameDriver === 'papel' && optGameHildebrando === 'piedra')
// ) {
//   hildebrandoMoney -= 300000;
//   alert(
//     `Hoy realmente no es mi dia, tu ganas viejo, toma los $300000\n\nDinero actual = $${hildebrandoMoney}`
//   );
// } else {
//   alert(`Bien viaje gratis, $300000 por un viaje, claro, que estafa`);
// }

// // Case 6

alert("Por fin llegas al hotel. Te quedaras 4 dias");

let daysInMacondo = 1;
let isHeDeath = false;

vacationsInMacondo: for (daysInMacondo; daysInMacondo < 5; daysInMacondo++) {
  let selectShirtToWear;
  while (true) {
    selectShirtToWear = prompt(
      `Dia ${daysInMacondo}\n\nCuentan con un codigo de vestimentas para poder hacer actividades\n\n${activitysDependShirtColor[0].colorShirt} : ${activitysDependShirtColor[0].activitiesType}\n${activitysDependShirtColor[1].colorShirt} : ${activitysDependShirtColor[1].activitiesType}\n${activitysDependShirtColor[2].colorShirt} : ${activitysDependShirtColor[2].activitiesType}\n${activitysDependShirtColor[3].colorShirt} : ${activitysDependShirtColor[3].activitiesType}\n\nIndica el color de camiseta a ponerte hoy, si no desea hacer nada hoy, presiona enter`
    )
      .trim()
      .toLowerCase();

    if (
      ["amarillo", "azul", "verde", "roja"].includes(selectShirtToWear) ||
      !selectShirtToWear
    ) {
      break;
    }
    alert("Por favor indica una opcion valida");
  }

  switch (selectShirtToWear) {
    case "":
      alert("Decides simplemente existir y relajarte por ahi todo el dia");
      break;
    case "amarillo":
      while (true) {
        selectActivity = prompt(
          `Actividades disponibles:\n\n${activitiesOpt(
            activitysDependShirtColor,
            selectShirtToWear
          )}si no desea hacer nada hoy, presiona enter`
        )
          .trim()
          .toLowerCase();

        if (
          activitysDependShirtColor[0].availablesActivities.includes(
            selectActivity
          ) ||
          !selectActivity
        ) {
          break;
        }
        alert("Por favor indica una opcion valida");
      }
      if (!selectActivity) {
        alert("Al final decides no hacer nada, y simplemente estar por ahi");
        break;
      } else {
        while (true) {
          performActivity = prompt(
            `el agua huele raro, pero no le da importancia\n\n¿Entrar a la piscina?\nY: si\nN: no`
          )
            .trim()
            .toLowerCase();
          if (performActivity === "y" || performActivity === "n") {
            break;
          }
        }
        if (performActivity === "y") {
          alert(
            "Empieza a sentirse ahogado, demasiado cloro, muere\n(terminan las vacaciones)"
          );
          isHeDeath = true;
          break vacationsInMacondo;
        }
        alert("Simplemente tomas el sol y estas por ahi tranquilamente");
      }
      break;
    case "verde":
      while (true) {
        selectActivity = prompt(
          `Actividades disponibles:\n\n${activitiesOpt(
            activitysDependShirtColor,
            selectShirtToWear
          )}si no desea hacer nada hoy, presiona enter`
        )
          .trim()
          .toLowerCase();

        if (
          activitysDependShirtColor[1].availablesActivities.includes(
            selectActivity
          ) ||
          !selectActivity
        ) {
          break;
        }
        alert("Por favor indica una opcion valida");
      }
      if (!selectActivity) {
        alert("Al final decides no hacer nada, y simplemente estar por ahi");
        break;
      } else {
        while (true) {
          hildebrandoMoney -= 40000;
          performActivity = prompt(
            `Se paga el plan: -$40000\n\nCaminatas, y agüita para el camino...\n\nEmpiezas a sentirte algo cansado. ¿Continuar la caminata hasta el final?\nY: si\nN: no`
          )
            .trim()
            .toLowerCase();
          if (performActivity === "y" || performActivity === "n") {
            break;
          }
        }

        if (performActivity === "y") {
          alert("Llega a una hermosa cascada y se toma fotos");
          break;
        }
        alert("Se devuelve solo y de noche, se pierde");
      }
      break;
    default:
      break;
  }

  // Si es capza de regresar, restar costo de los pasajes de vuelta
  if (daysInMacondo === 4) {
    alert("Se descuenta el costo de los pasajes de regreso. $-300000");
    hildebrandoMoney -= 300000;
  }
}

// Resumen de las vacaiones
alert(
  `Dias en macondo: ${daysInMacondo}\n¿Pudo regresar?: ${
    isHeDeath ? "Ha muerto" : "regreso a casa"
  }\nDinero despues del viaje: $${hildebrandoMoney}`
);
