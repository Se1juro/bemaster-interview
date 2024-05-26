/*
Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].
*/

const printOdd = (num) => {
  if (!num) return 0;
  return Array.from({ length: num }, (_, index) => index + 1).filter(
    (n) => n % 2 !== 0
  );
};

console.log(printOdd(100));
