import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const ERROR_MSG = 'FS operation failed';
    const sourcePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const targetPath = path.join(__dirname, 'files', 'properFilename.md');

    fs.rename(sourcePath, targetPath)
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await rename();
