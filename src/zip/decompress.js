import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
    const compressedFileName = './files/archive.gz';
    const targetFileName = './files/fileToCompress.txt';

    const gunzip = zlib.createGunzip();
    const source = createReadStream(compressedFileName);
    const destination = createWriteStream(targetFileName);
    await pipeline(source, gunzip, destination);
};

await decompress();
