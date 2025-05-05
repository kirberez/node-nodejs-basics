import { Transform } from 'stream';

const transform = async () => {
    const reverseText = new Transform({
        transform(chunk, encoding, callback) {
            const input = chunk.toString();
            const reversed = input.split('').reverse().join('');
            callback(null, reversed);
        },
    })

    process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
