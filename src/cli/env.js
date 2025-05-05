const parseEnv = () => {
    const formattedVariables = Object.keys(process.env).filter(variable => variable.includes('RSS_'));
    console.log(formattedVariables.map(variable => `${variable}=${process.env[variable]}`).join('; '));
};

parseEnv();
