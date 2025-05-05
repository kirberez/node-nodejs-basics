import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const compressedFileName = path.join(__dirname, 'files', 'archive.gz');
    const targetFileName = path.join(__dirname, 'files', 'fileToCompress.txt');

    const gunzip = zlib.createGunzip();
    const source = createReadStream(compressedFileName);
    const destination = createWriteStream(targetFileName);
    await pipeline(source, gunzip, destination);
};

await decompress();
