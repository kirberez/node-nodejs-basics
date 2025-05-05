import { readdir } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const ERROR_MSG = 'FS operation failed';
    const dirPath = path.join(__dirname, 'files');

    readdir(dirPath)
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await list();
