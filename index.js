// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project. Please include any motivation and challenges:',
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
        choices: ['MIT License', 'Apache 2.0 License', 'GNU GPL v3 License', 'IBM Public License Version 1.0', 'Mozilla Public License 2.0', 'None'],
        default: 0,
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project? If none, press enter"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are included? (enter n/a if none)"
    },
    {
        type: "input",
        name: "issues",
        message: "What do I do if I have a question or an issue? (Email/Github info will be added later)"
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
    err ? console.log(err) : console.log("(¯`·._.··¸.-~*´¨¯¨`*·~-.,-(_ Check the 'dist' directory for your shiny new README! _)-,.-~*´¨¯¨`*·~-.¸··._.·´¯)") }
);  
};

// TODO: Create a function to initialize app
function init() {
    console.log('');
    console.log('RRRRRR  EEEEEEE   AAA   DDDDD   MM    MM EEEEEEE     GGGG                                       tt                  ')
    console.log('RR   RR EE       AAAAA  DD  DD  MMM  MMM EE         GG  GG   eee  nn nnn    eee  rr rr    aa aa tt     oooo  rr rr  ')
    console.log('RRRRRR  EEEEE   AA   AA DD   DD MM MM MM EEEEE     GG      ee   e nnn  nn ee   e rrr  r  aa aaa tttt  oo  oo rrr  r ')
    console.log('RR  RR  EE      AAAAAAA DD   DD MM    MM EE        GG   GG eeeee  nn   nn eeeee  rr     aa  aaa tt    oo  oo rr     ')
    console.log('RR   RR EEEEEEE AA   AA DDDDDD  MM    MM EEEEEEE    GGGGGG  eeeee nn   nn  eeeee rr      aaa aa  tttt  oooo  rr     ')
    console.log('');
    console.log(' ♫ ♪ ♫ ♪ ♫ ♪  ┏(°.°)┛ ┗(°.°)┓ ┗(°.°)┛ ┏(°.°)┓ ┗(°.°)┛ ┗(°.°)┓ ┏(°.°)┛ ┗(°.°)┓ ┗(°.°)┛ ┏(°.°)┓ ┗(°.°)┛  ♪ ♫ ♪ ♫ ♪ ♫');
    console.log('');
    inquirer.prompt(questions)

        .then(data => {
            const readmeString = generateMarkdown(data)

        writeToFile('./dist/README.md', data);
        console.log('');
    });
}

// Function call to initialize app
init();
