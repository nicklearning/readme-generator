// TODO: Include packages needed for this application - DONE
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const { log } = require('console');

// TODO: Create an array of questions for user input - Done
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project description?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license does your project use?",
        choices: [
            "agpl-3.0", "apache-2.0", "bsd-2-clause", "bsd-3-clause", "bsl-1.0", "cc0-1.0",
            "epl-2.0", "gpl-2.0", "gpl-3.0", "lgpl-2.1", "mit", "mpl-2.0", "unlicense",
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions for this project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage information for this project?"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What are the contribution guidelines for this project?"
    },
    {
        type: 'input',
        name: 'testing',
        message: "What are the test instructions for this project?"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README.md has been generated successfully!`);
        }
    });
}

//  Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const fileName = 'README.md';
            writeToFile(fileName, generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
