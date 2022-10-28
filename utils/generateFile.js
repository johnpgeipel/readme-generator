const renderSection = (type, title, data) => {
    if (data) {
        return `${type} ${title}
${data}`
    };
    return "";
};

const renderTable = (data) => {
    if (data) {
        return `## Table of Contents`
    };
    return "";
};

const generateItem = (title, hash) => {
    return `* [${title}](#${hash})`
};

const generateTableItems = (data) => {
    if (data.tableConfirm = true) {
        if (data.installation) {
            return generateItem("Installation", "installation")
        }
    }
}

const generateFile = (data) => {
    return `# ${data.title}

${renderSection("##", "Description", data.description)}

${renderTable(data.tableConfirm)}
${generateTableItems(data)}

${renderSection("##", "Installation", data.installation)}


`;
};

module.exports = generateFile;
