const fs = require('node:fs');

// Lê o conteúdo do diretório atual
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório: ', err);
    return;
  }

  // Itera sobre os arquivos encontrados e imprime seus nomes
  files.forEach((file) => {
    console.log(file);
  });
});
