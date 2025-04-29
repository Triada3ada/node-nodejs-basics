import * as path from 'path';
import { fileURLToPath } from 'url';
import { compose, Transform } from 'node:stream';
import { finished } from 'node:stream/promises';

const transform = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    process.stdin.on('data', async (data) => {
        const firstGen = compose(async function* () {
            yield data;
        }());

        const reverseStr = compose(async function*(source) {
            for await (const chunk of source) {
                const reverse = (value) => {
                    return Array.from(String(value || ''))
                        .reverse()
                        .join('');
                };

                yield reverse(chunk);
            }
        });

        let accum = '';

        const combinator = compose(async function(source) {
            for await (const chunk of source) {
                accum += chunk;
            }
          })

        await finished(compose(firstGen, reverseStr, combinator));

        console.log(accum);

        process.exit()
    });
};

await transform();
