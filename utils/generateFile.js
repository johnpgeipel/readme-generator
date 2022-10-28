const generateFile = (data) => {
    return (`# ${data.title}
    ## Description
    ### ${data.title}
    `)
    // add md using data param
};

module.exports = generateFile;