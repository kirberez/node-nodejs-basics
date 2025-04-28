import { createReadStream } from 'node:fs';

const read = async () => {
    const fileName = './files/fileToRead.txt';

    createReadStream(fileName, {encoding: 'utf-8'}).pipe(process.stdout);
};

await read();
