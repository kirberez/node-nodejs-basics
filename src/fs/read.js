import { readFile } from "node:fs/promises";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const ERROR_MSG = 'FS operation failed';
    const fileName = path.join(__dirname, 'files', 'fileToRead.txt');

    readFile(fileName, { encoding: "utf-8" })
        .then(resp => console.log(resp))
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await read();
