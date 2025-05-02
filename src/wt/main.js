import * as os from 'node:os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import * as path from 'path';

const performCalculations = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const workerCount = os.cpus().length;

    for (let i = 0; i < workerCount; i++) {
        const worker = new Worker(__dirname + '/worker.js', { name: '' + i });
        worker.postMessage(10 + i);
        worker.on('message', (data) => {
            console.log('status: resolved', data);
        });
        worker.on('error', (err) => {
            throw new Error('status: error');
        })
    }
};

await performCalculations();
