import fs from 'fs/promises';

const rename = async () => {
    const ERROR_MSG = 'FS operation failed';

    fs.rename('./files/wrongFilename.txt', './files/properFilename.md')
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await rename();
