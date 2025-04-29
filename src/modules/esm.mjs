import * as path from 'node:path'
import {release, version} from 'os'
import { createServer } from 'node:http'
import * as fs from 'fs';
import { fileURLToPath } from 'url';

import * as cjs from './files/c.cjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ajs = JSON.parse(fs.readFileSync(`${__dirname}` + './files/a.json'))
const bjs = JSON.parse(fs.readFileSync(`${__dirname}` + './files/b.json'))

const createServerHttp = createServer;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = ajs;
} else {
    unknownObject = bjs;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

module.exports = {
    unknownObject,
    myServer,
};

