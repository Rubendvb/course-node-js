const fs = require("node:fs");

console.log("Lendo o primeiro arquivo");

const text = fs.readFileSync("./arquivo.txt", "utf-8");
console.log("primeiro texto", text);

console.log("Fazendo coisas enquanto se lê o primeiro arquivo");

console.log("Lendo o segundo arquivo");

const secondText = fs.readFileSync("./arquivo2.txt", "utf-8");
console.log("segundo texto", secondText);
