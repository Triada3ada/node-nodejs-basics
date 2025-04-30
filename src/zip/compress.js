import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';

const compress = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToRead = fs
        .createReadStream(`${__dirname}` + '/files/fileToCompress.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(`${__dirname}` + '/files/archive.gz'));
};

await compress();
