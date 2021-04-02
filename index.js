// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'How is this application to be used?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license should be applied to this application?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0 License', 'GNU GPL v3', 'IBM Public License Version 1.0', 'Mozilla Public License 2.0', 'None'],
        default: 0,
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "issues",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.log(err) : console.log('Success!') }
);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

        .then(responses => {
            
            console.log(responses);
            const readmeString = generateMarkdown(responses);

    })
}

// Function call to initialize app
init();
