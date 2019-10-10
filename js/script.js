console.log('---------------------------- Ejercicio 1 ----------------------------');

var nombres = ['Gonzalo', 'Emiliana', 'Maximiliano', 'Tomas', 'Jose', 'Francisco', 'Juan', 'Martin', 'Ignacio'];
nombres.sort();
console.log('primer nombre: ' + nombres[0])
console.log('ultimo nombre: ' + nombres[nombres.length - 1])

for (var i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

console.log('---------------------------- Ejercicio 2 ----------------------------');

var edades = [24, 22, 22, 25, 27, 24, 29, 22, 25, 21];

console.log('Edades Pares');

for (var i = 0; i < edades.length; i++) {
  if (edades[i] % 2 == 0) {
    console.log(edades[i]);
  }
}

console.log('Edades');

for (var i = 0; i < edades.length; i++) {
  console.log(edades[i]);
}

console.log('---------------------------- Ejercicio 3 ----------------------------');

menorEdad = lowestNumber(edades);
console.log('La menor edad es: ' + menorEdad);

/* Numero más bajo */
function lowestNumber(numeros) {
  var lowest = numeros[0];
  var probablyTheLowest = numeros[0];
  for (var i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] < numeros[i + 1]) {
      probablyTheLowest = numeros[i];
    }
    else {
      probablyTheLowest = numeros[i + 1];
    }
    if (lowest > probablyTheLowest) {
      lowest = probablyTheLowest;
    }
  }
  return lowest;
}

console.log('---------------------------- Ejercicio 4 ----------------------------');

mayorEdad = highestNumber(edades);
console.log('La mayor edad es: ' + mayorEdad);

/* Numero más alto */
function highestNumber(numeros) {
  var highest = numeros[0];
  var probablyTheHighest = numeros[0];
  for (var i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      probablyTheHighest = numeros[i];
    }
    else {
      probablyTheHighest = numeros[i + 1];
    }
    if (highest < probablyTheHighest) {
      highest = probablyTheHighest;
    }
  }
  return highest;
}

console.log('---------------------------- Ejercicio 5 ----------------------------');

var indice = 3;
valor = valueAt(edades, indice);
console.log('el valor para el indice ' + indice + ' es: ' + valor);

function valueAt(numeros, indice) {
  if (indice >= numeros.length) {
    return texto = 'inexistente';
  }
  else {
    return numero = numeros[indice];
  }
}

console.log('---------------------------- Ejercicio 6 ----------------------------');

var numeros = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function repeatedValues(array) {
  var repeated = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        repeated.push(array[i]);
      }
    }
  }
  return repeated;
}

var repetidos = repeatedValues(numeros);
console.log(repetidos);

console.log('---------------------------- Ejercicio 7 ----------------------------');

myColor = ["Red", "Green", "White", "Black"];

function arrayToString(array) {
  var text = [];
  for (var i = 0; i < array.length; i++) {
    text.concat(array[i]);
  }
  return text.toString;
}

var texto = arrayToString(myColor);
console.log(texto);