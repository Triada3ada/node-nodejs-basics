import * as fs from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    // Write your code here
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));

        const filesDir = await fs.promises.readdir(`${__dirname}` + '/files/', { recursive: true });
        console.log(filesDir);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
