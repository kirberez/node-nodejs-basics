import { cp } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const ERROR_MSG = 'FS operation failed';
    const sourceDir = path.join(__dirname, 'files');
    const targetDir = path.join(__dirname, 'files_copy');

    cp(sourceDir, targetDir, { recursive: true, force: false, errorOnExist: true })
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await copy();
