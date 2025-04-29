import { createHash } from 'node:crypto';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const filetoRead = await fs.promises.readFile(
        `${__dirname}` + '/files/fileToCalculateHashFor.txt',
        {
            encoding: 'utf-8',
        }
    );
    process.stdout.write(createHash('sha256').update(filetoRead).digest('hex'));
};

await calculateHash();
