import * as fs from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));

        const filetoRead = await fs.promises.readFile(`${__dirname}` + '/files/fileToRead.txt', {
            encoding: 'utf-8',
        });
        console.log(filetoRead);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await read();
