//function celsiusFahrenheit(celsius) {
//    return (celsius * 9/5 ) + 32;
//}

//function celsiusKelvin(celsius) {
//    return celsius + 273.15;
//}

//function factorial(num) {
//    if (num === 0 || num === 1) {
//      return 1;
//    } else {
//      return num * factorial(num - 1);
//    }
//  }

var numeroSecreto = Math.floor(Math.random() * 100) + 1
var intentos = []
function verificarNumero(numIngre) {
  return !isNaN(numIngre) && numIngre >= 1 && numIngre <= 100;
}

function Adivinar() {
  let numIngre = parseInt(document.getElementById("numInput").value);

  if (verificarNumero(numIngre)) {
    intentos.push(numIngre);
    if (numIngre === numeroSecreto) {
      var resultados = "Felicidades, adivinaste el número secreto. Tu premio es un troyano :)";
    } else if (numIngre < numeroSecreto) {
      var resultados = "El número secreto es mayor. Vuelve a intentarlo.";
    } else {
      var resultados = "El número secreto es menor. Vuelve a intentarlo.";
    }

    resultados += "<br>Números introducidos: " + intentos.join(", ");
    document.getElementById("resultados").innerHTML = resultados;
  } else {
    document.getElementById("resultados").innerHTML = "Error: Por favor introduce un número válido del 1 al 100.";
  }
}


//    if (!isNaN(numIngre)) {
//        let fact = factorial(numIngre).toFixed(2);
//        //let tempKelvin = celsiusKelvin(tempCelsius).toFixed(2);
//
//        let resultadosDiv = document.getElementById("resultados");
//        resultadosDiv.innerHTML = "<p>" + " El factorial de " + numIngre + " es " + fact + "</p>";
//        //resultadosDiv.innerHTML += "<p>" + tempCelsius + " grados Celsius son " + tempKelvin + " Kelvin.</p>";
//
//    } else {
//        alert("Error, por favor ingrese un número ya que el conversor solo acepta números como entradas.");
//    }
//}