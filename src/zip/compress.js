import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
    const textFile = './files/fileToCompress.txt';
    const compressedFile = './files/archive.gz';

    const gzip = zlib.createGzip();
    const source = createReadStream(textFile);
    const destination = createWriteStream(compressedFile);
    await pipeline(source, gzip, destination);
};

await compress();
