import { open } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const FILE_NAME = 'fresh.txt';
    const FILE_CONTENT = 'I am fresh and young';
    const ERROR_MSG = 'FS operation failed';
    const filePath = path.join(__dirname, 'files', FILE_NAME);

    open(filePath, 'wx')
        .then(resp => {
            resp.write(FILE_CONTENT);
        })
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await create();
