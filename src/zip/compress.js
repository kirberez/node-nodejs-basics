import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const textFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');

    const gzip = zlib.createGzip();
    const source = createReadStream(textFile);
    const destination = createWriteStream(compressedFile);
    await pipeline(source, gzip, destination);
};

await compress();
