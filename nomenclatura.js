function f(x, y, z) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}

// Fixed function
function calcProductSin(x, y, z) {
  let sumOfProduct = x + y;
  let product = sumOfProduct * z;
  let productSin = Math.sin(product);
  return productSin;
}
