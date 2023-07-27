import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./arquivo.txt", "utf-8"),
  readFile("./arquivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("primeiro texto", text);

  console.log("segundo texto", secondText);
});
