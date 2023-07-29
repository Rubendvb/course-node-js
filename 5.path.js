const path = require("node:path");

// Retorna o separador de caminho específico do sistema de arquivos
console.log(path.sep);

// Unir rotas com path.join
const filePath = path.join("content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename("/tpm/ruben-secret-files/password.txt");
console.log(base);

const filename = path.basename("/tpm/ruben-secret-files/password.txt", ".txt");
console.log(filename);

const extension = path.extname("image.jpg");
console.log(extension);
