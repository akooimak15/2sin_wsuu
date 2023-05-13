let binary = 2;
let decimal = 0;

for (let i = 0; i < binary.length; i++) {
    decimal += binary[i] * Math.pow(2, binary.length - 1 - i);
}

console.log(decimal);
