import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const fileToWrite = fs.createWriteStream(`${__dirname}` + '/files/fileToWrite.txt');

    process.stdin.on('data', (data) => {
        fileToWrite.write(data);
        process.exit();
    });
};

await write();
