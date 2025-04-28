import * as fs from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));

        fs.readFile(`${__dirname}` + '/files/fresh.txt', (err, data) => {
            if (!data) {
                const writeStream = fs.createWriteStream(`${__dirname}` + '/files/fresh.txt', {
                    encoding: 'utf-8',
                });
                writeStream.write('I am fresh and young');
                writeStream.end();
            } else {
                 throw new Error('file already exists')
            }
        });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
