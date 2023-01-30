// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'Please entire a title for your README.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a brief description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your application.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please enter usage instruction for your application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter credit information.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: [''],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please enter a list of features available on your web application separated by commas.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Please explain how other developers can contribute to your project.',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Please list tests for your application.',
        name: 'tests',
    },

]


// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('./dist/README.md', data)
    console.log('Navigate to the "dist" folder to view your new README')

}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);

}

// Function call to initialize app
init()
.then(data => {
    generateMarkdown(data);
})
.then(data => {
    writeToFile(data);

})
.catch(err => {
    console.log(err)
});


