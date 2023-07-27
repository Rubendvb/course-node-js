import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
} from "node:os";

console.log("Informação do sistema operativo");
console.log("-------------------------------");

console.log("Nome do sistema operativo:", platform());
console.log("Versão do sistema operativo:", release());
console.log("Arquitetura:", arch());
console.log("CPUs:", cpus());
console.log("Memoria livre:", freemem() / 1024 / 1024);
console.log("Memoria total:", totalmem() / 1024 / 1024);
console.log("Memoria total:", uptime() / 60 / 60);
