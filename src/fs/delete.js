import { unlink } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const ERROR_MSG = 'FS operation failed';
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    unlink(filePath).catch(err => {
        throw new Error(ERROR_MSG);
    });
};

await remove();
