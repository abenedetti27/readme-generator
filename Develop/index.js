// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Prove a short description explaining the what, why, and how of your project. Use the following questions as a guide: -What was your motivation? -Why did you build this project? -What problems does it solve? -What did you learn?',
            name: 'Description'
        },
        {
            type: 'input',
            message: 'If your README is long, add a table of contents to make it as easy for users to find what they need.',
            name: 'Table of Contents (Optional)'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'Installation'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it.',
            name: 'Usage'
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assests that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
            name: 'Credits'
        },
        {
            type: 'input',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can an cannot do with your project.',
            name: 'License'
        },
        {
            type: 'input',
            message: '',
            name: 'Badges'
        },
        {
            type: 'input',
            question: '',
            name: 'Features'
        },
        {
            type: 'input',
            question: '',
            name: 'How to Contribute'
        },
        {
            type: 'input',
            question: '',
            name: 'Tests'
        },
    ])
    .then((respone)=>{

        fs.writeFile('index.html', `
        `)
    })

// TODO: Create an array of questions for user input
const questions = [];
//* add type, name, and message for each question
//* add questions: add readme sections per acceptance criteria (desctiption, usage, license, etc)


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
// use FS module to write data to readme file, fileName

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


//Pseudocode
//use inquirer to display questions to user
//call function generateMarkdown
//take what is returned and pass to writeToFile function

