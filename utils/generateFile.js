let displayItem = false;

const renderSection = (type, title, data) => {
    if (data) {
        return `${type} ${title}
${data}`
    };
    return ``;
};

const renderTable = (data) => {
    if (data != false) {
        displayItem = true;
        return `## Table of Contents`
    };
    return ``;
};

const tableItem = (displayItem, data, title, hash) => {
    if (displayItem && data) {
        return `* [${title}](#${hash})`
    }
    return ``;
};

const generateFile = (data) => {
    return `# ${data.title}

${renderSection("##", "Description", data.description)}
${renderTable(data.tableConfirm)}
${tableItem(displayItem, data.installation, "Installation", "installation")}
${tableItem(displayItem, data.usage, "Usage", "usage")}
${renderSection("##", "Installation", data.installation)}
${renderSection("##", "Usage", data.usage)}

`;
};

module.exports = generateFile;
