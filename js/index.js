/* Escribe una función llamada strictEquals(valueA, valueB) 
que devuelva el mismo valor que valueA === valueB. 
Tu implementación no puede usar los operadores === ni !==, 
ni nigún operador de comparacion

Testea la función con este set de pruebas:

Dada la función strictEquals
Cuando se comparan <valueA> y <valueB>
Entonces el resultado será <Result> */

// 1. Hacer una función que me compare dos valores y devuelva el mismo valor
// que valueA === valueB

function strictEquals(valueA, valueB) {
  if (isNaN(valueA) && isNaN(valueB)) {
    return false;
  }
  if (Number(valueA) && Number(!valueB)) {
    return true;
  }
}

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("water", "oil"));
