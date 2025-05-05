import { createReadStream } from 'node:fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileName = path.join(__dirname, 'files', 'fileToRead.txt');

    createReadStream(fileName, {encoding: 'utf-8'}).pipe(process.stdout);
};

await read();
