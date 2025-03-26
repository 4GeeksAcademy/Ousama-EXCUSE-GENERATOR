import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["Mi gato", "Mi padre", "Mi vecino"];
  let accion = ["se resvalo", "se desmayo", "se cayo"];
  let lugar = ["por las escaleras", "mientras se esforzaba", "subiendo las escaleras"];

  let quienRandom = Math.floor(Math.random() * quien.length);
  let accionRandom = Math.floor(Math.random() * accion.length);
  let lugarRandom = Math.floor(Math.random() * lugar.length);

  console.log("Hello Rigo from the console!");
  
  document.getElementById("excusa").innerHTML = 
    quien[quienRandom] + " " + accion[accionRandom] + " " + lugar[lugarRandom];
};
