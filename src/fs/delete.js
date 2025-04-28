import * as fs from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    // Write your code here 
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));

        fs.promises.unlink(`${__dirname}` + '/files/fileToRemove.txt')
    } catch (error) {
        throw new Error(error, "FS operation failed");
        
    }
};

await remove();