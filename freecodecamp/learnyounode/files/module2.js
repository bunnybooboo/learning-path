/*process.argv.forEach((val, index, array) => {
  console.log(`${index}: ${val}`);
});

this came directly from mdn
*/

/*var sum = 0;
for (var value in process.argv[Number(2)]) {
  sum += value;
  }
console.log(sum);

with a bit of a tweak I attempted my own
*/

//console.log(process.argv[Number(2)]); - then tested the output

//console.log(Number(process.argv[2])); - then tried to get it correct

var sum = 0;
for (i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
