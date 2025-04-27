import { readFile } from "node:fs/promises";

const read = async () => {
    const FILE_NAME = './files/fileToRead.txt';
    const ERROR_MSG = 'FS operation failed';

    readFile(FILE_NAME, { encoding: "utf-8" })
        .then(resp => console.log(resp))
        .catch(err => {
            throw new Error(ERROR_MSG);
        });
};

await read();
