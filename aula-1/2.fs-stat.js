const fs = require('node:fs');

const stats = fs.statSync('./arquivo.txt');

console.log(
  stats.isFile(), // Verifica se é um arquivo
  stats.isDirectory(), // Verifica se é um diretório
  stats.isSymbolicLink(), // Verifica se é um link simbólico
  stats.size // Tamanho do arquivo em bytes
);
