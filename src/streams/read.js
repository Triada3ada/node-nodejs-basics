import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToRead = fs.createReadStream(`${__dirname}` + '/files/fileToRead.txt',)
    fileToRead.on('data', (chunk) =>{
        process.stdout.write(chunk.toString());
    })
};

await read();