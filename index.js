// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { rejects } = require("assert");
const generateMarkdown  = require("./utils/generateMarkdown")

// Questions array used to hold question objects to be provided to inquirer
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "Enter your project title (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } 
            else {
                console.log("Please enter a title");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for the project"
    },
    {
        type: "input",
        name: "technologies",
        message: "Enter the technologies used for this project (separate multiple technologies by ',')"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation information"

    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information"
    },
    {
        type: "input",
        name: "credits",
        message: "Enter credits information"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        choices: ["Unlicense", "MIT", "GPLv2", "Apache 2.0", "GPLv3", "BSD 3-clause"]
    },
    {
        type: "input",
        name: "contribute",
        message: "Enter information about how to contribute to the project"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter information about tests",
    }
];

// Function to write mardkwon content to README.md file created in /dist folder
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: "file created"
            });
        })
    });
};

// Function to initialize the app. Use inquirer to prompt user, then generate markdown then write markdown to the file
const init = () => {
    inquirer.prompt(questions)
    .then(generateMarkdown)
    .then(writeToFile);
}

// Function call to initialize app
init();