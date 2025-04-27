import { readdir } from 'node:fs/promises';

const list = async () => {
    const DIR_PATH = './files/';
    const ERROR_MSG = 'FS operation failed';

    readdir(DIR_PATH)
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await list();
