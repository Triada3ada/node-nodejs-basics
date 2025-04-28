import * as fs from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    // Write your code here
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));

        const wrongFilename = await fs.promises.open(`${__dirname}` + '/files/wrongFilename.txt');

        const properFilename = await fs.promises.open(`${__dirname}` + '/files/properFilename.md');

        if (properFilename instanceof Object) {            
            throw new Error("properFilename already exists");
        }

        fs.rename(`${__dirname}` + '/files/wrongFilename.txt', `${__dirname}` + '/files/properFilename.md', (err) =>{
            if (err) {
                throw new Error(err);
            }            
        })     

    } catch (error) {
        throw new Error("FS operation failed");
        
    }
};

await rename();