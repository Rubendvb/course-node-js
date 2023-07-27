const fs = require("node:fs");

// Callback

console.log("Lendo o primeiro arquivo");

fs.readFile("./arquivo.txt", "utf-8", (err, text) => {
  console.log("primeiro texto", text);
});

console.log("Fazendo coisas enquanto se lê o primeiro arquivo");

console.log("Lendo o segundo arquivo");

fs.readFile("./arquivo2.txt", "utf-8", (err, text) => {
  console.log("segundo texto", text);
});
