import { open } from 'node:fs/promises';

const create = async () => {
    const FILE_NAME = 'fresh.txt';
    const FILE_CONTENT = 'I am fresh and young';
    const ERROR_MSG = 'FS operation failed';

    open(`./files/${FILE_NAME}`, 'wx')
        .then(resp => {
            resp.write(FILE_CONTENT);
        })
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await create();
