function displayCaracter(n) {
  let isEven = false;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log("A");
    } else {
      if (isEven) {
        console.log("B");
      } else {
        console.log("C");
      }
      isEven = !isEven;
    }
  }
}
displayCaracter(10);
module.exports = displayCaracter;
