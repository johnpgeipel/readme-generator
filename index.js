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
            },
            {
                type: "input",
                name: "description",
                message: "Please add a description of the project."
            },
            {
                type: "confirm",
                name: "tableConfirm",
                message: "Would you like a Table of Contents?",
                default: true
            },
            {
                type: "input",
                name: "installation",
                message: "Please enter installation instructions."
            },
            {
                type: "input",
                name: "usage",
                message: "Please enter usage details."
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
});
