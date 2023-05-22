// function add() {
//   const arg = [...arguments];
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     const element = arg[i];
//     sum = sum + element;
//   }
//   return sum;
// }

// const result = add(2, 5, 7);
// console.log(result);
function add() {
  const arg = [...arguments];
  let sum = 0;
  arg.forEach(function (item) {
    sum = sum + item;
  });
  return sum;
}
const result = add(2, 5, 8);
console.log(result);
