// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "userEmail",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectName",
    },
    {
        type: "input",
        message: "Please give a short description of your project.",
        name: "description",
    },
    {
        type: "list",
        message: "What type of license would like your project to have?",
        name: "licenseType",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "",
        message: "What command should be run to install dependencies?",
        name: "depCommand",
    },
    {
        type: "",
        message: "What command should be run to run tests?",
        name: "testCommand",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "warnings",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
