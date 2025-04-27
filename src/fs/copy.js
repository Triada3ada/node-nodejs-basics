import * as fs from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    // Write your code here 
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));

        const filesDir = await fs.promises.opendir(`${__dirname}` + '/files');

        if (filesDir instanceof fs.Dir && !fs.existsSync(`${__dirname}` + '/files_copy')) { 
            fs.cp(`${__dirname}` + '/files', `${__dirname}` + '/files_copy', {recursive: true}, (err) => {
                console.log('files copied successfully');
            })
        } else {
            throw new Error("either files dir does not exist or files_copy already created");
        }
    } catch (error) {
        throw new Error(error)
    }

};

await copy();
