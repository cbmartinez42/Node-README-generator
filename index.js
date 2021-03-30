// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    }
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'description'
    }
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'instructions'
    }
    {
        type: 'input',
        message: 'How is this application to be used?',
        name: 'usage'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
