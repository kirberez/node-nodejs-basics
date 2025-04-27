import { cp } from 'fs/promises';

const copy = async () => {
    const ERROR_MSG = 'FS operation failed';

    cp('./files', './files_copy', { recursive: true, force: false, errorOnExist: true })
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await copy();
