import { unlink } from 'fs/promises';

const remove = async () => {
    const FILE_PATH = './files/fileToRemove.txt';
    const ERROR_MSG = 'FS operation failed';

    unlink(FILE_PATH).catch(err => {
        throw new Error(ERROR_MSG);
    });
};

await remove();
