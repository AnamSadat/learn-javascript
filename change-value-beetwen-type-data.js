// Konversi  Eksplisit
// Mengubah strinf
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBooleam = boolean.toString();

console.log(strNumber);
console.log(strBooleam);
console.log("\n");

// Mengubah number
const strNumber2 = "123";
const strFloat = "3.14";
const boolean2 = true;

const numFromString = Number(strNumber2);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean2);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);
console.log("\n");

// parseInt
const cm = "20cm";
const px = "64px";

const intFromCm = parseInt(cm);
const intFromPx = parseInt(px);

console.log(intFromCm);
console.log(intFromPx);
console.log("\n");

// parseFloat
const cm1 = "20.55cm";
const px2 = "64.23px";

const floatFromCm = parseInt(cm);
const floatFromPx = parseInt(px);

console.log(floatFromCm);
console.log(floatFromPx);
console.log("\n");

// mengubah boolean
const number2 = 123;
const string = "dicoding";
const empty = null;

const boolFromNumber = Boolean(number2);
const boolFromString = Boolean(string);
const boolFromEmpty = Boolean(empty);

console.log(boolFromNumber);
console.log(boolFromString);
console.log(boolFromEmpty);
console.log("\n");

// konervsi implisit
const age = 20;
const message = "Umurku " + age + " tahun";

console.log(message);
console.log("\n");

const strNumber3 = "123";
const result = strNumber3 * 2;

console.log(result);
console.log("\n");

const bool = true;
const result2 = bool + 1;

console.log(result2);

function multiply(age) {
  return function (num) {
    return age * num;
  };
}

const doubleAge = multiply(2);
const tripleAge = multiply(3);

console.log(doubleAge(5));
console.log(tripleAge(5));
