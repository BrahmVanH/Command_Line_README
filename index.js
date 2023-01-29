// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer
    .prompt([
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
    }

])
.then((answer) => {
    let titleSection = `# ${answer.title}`;
    let descriptionSection = `## Description\n\n${answer.description}`;
    let installationSection = `## Installation\n\n${answer.installation}`;
    let usageSection = `## Usage\n\n ${answer.usage}`;
    let creditSection = `## Credits\n\n ${answer.credits}`;

// *NEED TO GET LIST OF COMMON LICENSES TO USE IN OPTIONS
// *NEED TO FIND BADGES FOR EACH LICENSE
    let licenseSection = `## License\n\n ${answer.license}`;
    
// *NEED TO ADD STRING METHODS TO BREAK FEATURES UP ONTO NEW LINES
    let featureSection = `## Features\n\n ${answer.features}`;
    let contributeSection = `## Contribute\n\n ${answer.contribute}`;
    let testSection = `## Test\n\n ${answer.test}`;

    console.log(titleSection);
    console.log(descriptionSection);
    console.log(installationSection);
    console.log(usageSection);
    console.log(creditSection);
    console.log(licenseSection);
    console.log(featureSection);
    console.log(contributeSection);
    console.log(testSection);
    

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
//init();


