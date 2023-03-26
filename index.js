const boton = document.querySelector("button");
const parrafoResultado = document.querySelector("#mostrarResultado");
const a = document.querySelector("#altura");
const p = document.querySelector("#peso");

//Función Botón.
const mandarFormulario = () => {
  boton.addEventListener("click", imc);
};

//Función para calcular en IMC.
const imc = (e) => {
  e.preventDefault();
  let r = (p.value / Math.pow(a.value / 100, 2)).toFixed(1);

  //Posibles casos según resultado.
  if (r < 18.5) {
    parrafoResultado.innerHTML = `Tu IMC es: ${r} Tu peso es inferior al normal`;
  } else if (r >= 18.5 && r < 24.9) {
    parrafoResultado.innerHTML = `Tu IMC es: ${r} Tu peso es normal`;
  } else if (r >= 25 && r < 29.9) {
    parrafoResultado.innerHTML = `Tu IMC es: ${r} Tu peso es superior al normal`;
  } else if (r > 30) {
    parrafoResultado.innerHTML = `Tu IMC es: ${r} 
    Tienes obesidad`;
  }
};

mandarFormulario();
