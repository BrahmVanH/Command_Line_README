// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Please entire a title for your README.',
        name: 'title',
        default: 'Project Title',
        // *NEED TO TRY TO VALIDATE ANSWERS AND ENSURE THEY ARE PROPERLY CODED TO BE WRITTEN TO README FILE
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
        choices: ['Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL V3', 'GPL V2', 'AGPL v3', 'LGPL v3', 'Unlicense', 'The Do What the Fuck You Want to Public License', 'MIT'],
        name: 'license',
        validate: (answer) => {
            if (answer == 'Apache 2.0') {
               let answer = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            }
        }
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

])
}


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Check the "dist" folder for your new README');
        }   catch(err) {
            console.log(err);
        }
        
}
    


// Function call to initialize app
init();


