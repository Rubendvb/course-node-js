const fs = require("node:fs/promises");

console.log("Lendo o primeiro arquivo");

// Leitura do primeiro arquivo "arquivo.txt" usando Promises
fs.readFile("./arquivo.txt", "utf-8")
  .then((text) => {
    console.log("primeiro texto", text);
  })
  .catch((err) => {
    console.error("Erro ao ler o primeiro arquivo:", err);
  });

console.log("Fazendo coisas enquanto se lê o primeiro arquivo");

console.log("Lendo o segundo arquivo");

// Leitura do segundo arquivo "arquivo2.txt" usando Promises
fs.readFile("./arquivo2.txt", "utf-8")
  .then((text) => {
    console.log("segundo texto", text);
  })
  .catch((err) => {
    console.error("Erro ao ler o segundo arquivo:", err);
  });
