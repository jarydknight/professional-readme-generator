// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project-title",
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
        type: "confirm",
        name: "table-of-contents",
        message: "Does your README require a table of contents",
        default: true
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
        choices: ["Unlicense", "MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause"]
    },
    {
        type: "list",
        name: "badges",
        message: "Select badges for project",
        choices: ["badge 1", "badge 2"]
    },
    {
        type: "input",
        name: "features",
        message: "Enter features information"
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then(data => console.log(data));
}

// Function call to initialize app
init();
