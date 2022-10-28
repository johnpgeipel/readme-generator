const fs = require("fs");
const inquirer = require("inquirer");
const generateFile = require("./utils/generateFile.js");

const readmePrompts = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "title",
                message: "Please enter a README title",
            }
        ]
    )
};

const writeReadme = (data) => {
    fs.open("README.md", "w", (err) => {
        if (err) {
            throw err;
        };
        console.log("success");
    });
    fs.writeFile("README.md", data, (err) => {
        if (err) {
            throw err;
        };
        console.log("success");
    });
};

readmePrompts()
.then((answers) => {
    return generateFile(answers);
})
.then((data) => {
    return writeReadme(data);
})
.catch((err) => {
    throw err;
})