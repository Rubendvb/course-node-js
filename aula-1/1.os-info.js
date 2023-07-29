const os = require('node:os');

console.log('Informação do sistema operativo');
console.log('-------------------------------');

console.log('Nome do sistema operativo:', os.platform());
console.log('Versão do sistema operativo:', os.release());
console.log('Arquitetura:', os.arch());
console.log('CPUs:', os.cpus());
console.log('Memoria livre:', os.freemem() / 1024 / 1024);
console.log('Memoria total:', os.totalmem() / 1024 / 1024);
console.log('Memoria total:', os.uptime() / 60 / 60);
