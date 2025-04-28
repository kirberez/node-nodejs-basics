import { createWriteStream } from 'node:fs';

const write = async () => {
    const fileName = './files/fileToWrite.txt';

    process.stdin.pipe(createWriteStream(fileName));
};

await write();
