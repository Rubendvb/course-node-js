const { readFile } = require('node:fs/promises');

// Async sequencial
// IIFE - Immediately Invoked Function Expression
(async () => {
  console.log('Lendo o primeiro arquivo');

  const text = await readFile('./arquivo.txt', 'utf-8');
  console.log('primeiro texto', text);
  console.log('Fazendo coisas enquanto se lê o primeiro arquivo');

  console.log('Lendo o segundo arquivo');

  const secondText = await readFile('./arquivo2.txt', 'utf-8');
  console.log('segundo texto', secondText);
})();
