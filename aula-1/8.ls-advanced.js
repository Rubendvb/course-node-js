const fs = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors');

console.log(process.argv);

const folder = process.argv[2] ?? '.';

async function ls(folder) {
  let files;

  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(picocolors.red(`Não é possível ler o diretório ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);

    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(`Não é possível ler o arquivo ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${picocolors.magenta(picocolors.red(fileType))} ${picocolors.blue(
      file.padEnd(20)
    )} ${picocolors.green(fileSize.padStart(10))} ${picocolors.yellow(
      fileModified
    )}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
