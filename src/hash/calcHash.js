import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const fileName = './files/fileToCalculateHashFor.txt';
    const hash = createHash('sha256');

    const input = createReadStream(fileName);
    input.on('readable', () => {
        const data = input.read();

        if (data) {
            hash.update(data);
        } else {
            console.log(hash.digest('hex'));
        }
    });
};

await calculateHash();
