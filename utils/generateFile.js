const generateFile = (data) => {
    return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)

## Installation
${data.installation}

## Usage
${data.usage}

`;
};

module.exports = generateFile;
