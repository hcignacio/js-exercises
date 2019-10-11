console.log('JavaScript String Functions:');

console.log('---------------------------- Ejercicio 1 ----------------------------');

var x = 32443;

console.log(x);

function reverseNumber(number) {
  number = number + "";
  return number.split("").reverse().join("");
}

console.log(reverseNumber(x))

console.log('---------------------------- Ejercicio 2 ----------------------------');

var x = 'webmaster';

console.log(x);

function orderString(word) {
  return word.split('').sort().join('')
}

console.log(orderString(x))

console.log('---------------------------- Ejercicio 3 ----------------------------');

x = "prince of persia";

function capitalizeFL(frase) {
  var palabras = frase.split(" ")
  for (var i = 0; i < palabras.length; i++) {
    var firstLetter = palabras[i][0];
    var nuevaPalabra;
    firstLetterC = firstLetter.toUpperCase();
    nuevaPalabra = palabras[i].replace(palabras[i][0], firstLetterC)
    palabras[i] = nuevaPalabra;
  }
  return arrayToString(palabras)
}

function arrayToString(array) {
  var text = array[0];
  for (var i = 1; i < array.length; i++) {
    text = text + ' ' + array[i]
  }
  return text;
}

var palabrasArray = capitalizeFL(x);
console.log(palabrasArray);

console.log('---------------------------- Ejercicio 4 ----------------------------');

var x = "Write a JavaScript function that returns a string in alphabetical order";

function longestWord(frase) {
  var palabras = frase.split(" ")
  var longest = palabras[0];
  //console.log('palabra: ' + longest)
  //console.log('cantidad de letras: ' + longest.length)
  var probablyTheLongest = palabras[0];
  for (var i = 1; i < palabras.length; i++) {
    //console.log('palabra: ' + palabras[i])
    //console.log('cantidad de letras: ' + palabras[i].length)
    if (palabras[i - 1].length < palabras[i].length) {
      probablyTheLongest = palabras[i];
      //console.log('palabra anterior: ' + palabras[i - 1])
      //console.log('probablyTheLongest :' + probablyTheLongest)
      //console.log('cantidad de letras: ' + probablyTheLongest.length)
    }
    else {
      probablyTheLongest = palabras[i - 1];
      //console.log('probablyTheLongest :' + probablyTheLongest)
      //console.log('cantidad de letras: ' + probablyTheLongest.length)
    }
    if (longest.length < probablyTheLongest.length) {
      //console.log('prev longest: ' + longest)
      longest = probablyTheLongest;
      //console.log('new longest: ' + longest)
      //console.log('cantidad de letras: ' + longest.length)
    }
    else {
      //console.log('still the longest: ' + longest)
      //console.log('cantidad de letras: ' + longest.length)
    }
  }
  return longest;
}

var paralabraMasLarga = longestWord(x);
console.log('paralabraMasLarga: ' + paralabraMasLarga);