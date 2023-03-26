const a = document.querySelector("altura");
const p = document.querySelector("peso");
// const boton = document.querySelector("button");
const parrafoResultado = document.querySelector("mostrarResultado");
const encabezado = document.querySelector("h1");

//Función para calcular en IMC.
const imc = (a, p) => {
  let r = (p / Math.pow(a / 100, 2)).toFixed(1);
};

const prueba = () => {
  encabezado.addEventListener("click", () => {
    console.log("hola");
  });
};

prueba();

/* let a = prompt("¿Cual es tu aaltura?");
let p = prompt("¿Cual es tu peso?"); */
//Posibles casos según resultado.
/*  if (r < 18.5) {
  `Tu IMC es: ${r} Tu p es inferior al normal`;
} else if (r >= 18.5 && r < 24.9) {
  `Tu IMC es: ${r} Tu p es normal`;
} else if (r >= 25 && r < 29.9) {
  `Tu IMC es: ${r} Tu p es superior al normal`;
} else if (r > 30) {
  `Tu IMC es: ${r} Tienes obesidad`;
} */
