import { argv } from "node:process";

const parseArgs = () => {
    const argArray = [];

    argv.forEach((val, index) => {
        if (val.startsWith('--') && index <= argv.length - 1) {
            argArray.push(`${val} is ${argv[index + 1]}`)
        }
    });

    console.log(argArray.join(', '))
};

parseArgs();