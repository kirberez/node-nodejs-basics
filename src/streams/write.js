import { createWriteStream } from 'node:fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const fileName = path.join(__dirname, 'files', 'fileToWrite.txt');

    process.stdin.pipe(createWriteStream(fileName));
};

await write();
