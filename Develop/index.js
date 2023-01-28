// TODO: Include packages needed for this application
const inquirer = include('inquirer');

// TODO: Create an array of questions for user input
const questionsV1 = [
    {
        type: 'confirm',
        message: 'Would you like help creating a README?',
        name: 'doYouWantToCreate?'
    },
    {
        type: 'input',
        message: 'Please entire a title for your README',
        name: 'enterTitle',
    },
    {
        type: 'input',
        message: 'Please enter a brief description explaining the what, why, and how of your project.',
        name: 'enterDescription',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a table of contents?',
        name: 'confirmTableOfContents',
    },
    {
        type: 'confirm',
        message: 'Would you like to include installation instructions?',
        name: 'confirmIncludeInstall',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your application.'
        name: 'enterInstall',
    },
    {
        type: 'confirm',
        message: 'Would you like to include usage instructions for your application?',
        name: 'confirmUsage'
    },
    {
        type: 'input',
        message: 'Please enter usage instruction for your application.',
        name: 'enterUsage',
    },
    {
        type: 'confirm',
        message: 'Would you like to include credit to other developers in your README?',
        name: 'confirmCredits',
    },
    {
        type: 'input',
        message: 'Please enter credit information.',
        name: 'enterCredits',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a license?',
        name: 'chooseIncludeLicense',
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: [''],
        name: 'chooseLicense',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a badge?',
        name: 'chooseIncludeBadge',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a list of features on your application?',
        name: 'confirmFeatures',
    },
    {
        type: 'input',
        message: 'Please enter a list of features available on your web application, separated by commas',
        name: 'enterFeatures',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a section detailing ways for other developers to contribute?',
        name: 'confirmContribute',
    },
    {
        type: 'input',
        message: 'Please explain how other developers can contribute to your project',
        name: 'enterContribute',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a section that offers tests for your application?',
        name: 'confirmTests',
    },
    {
        type: 'input',
        message: 'Please list how tests for your application',
        name: 'enterTests',
    }

];

inquirer
    .prompt([
    {
        type: 'input',
        message: 'Please entire a title for your README',
        name: 'enterTitle',
    },
    {
        type: 'input',
        message: 'Please enter a brief description explaining the what, why, and how of your project.',
        name: 'enterDescription',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your application.'
        name: 'enterInstall',
    },
    {
        type: 'input',
        message: 'Please enter usage instruction for your application.',
        name: 'enterUsage',
    },
    {
        type: 'input',
        message: 'Please enter credit information.',
        name: 'enterCredits',
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: [''],
        name: 'chooseLicense',
    },
    {
        type: 'input',
        message: 'Please enter a list of features available on your web application, separated by commas',
        name: 'enterFeatures',
    },
    {
        type: 'input',
        message: 'Please explain how other developers can contribute to your project',
        name: 'enterContribute',
    },
    {
        type: 'input',
        message: 'Please list how tests for your application',
        name: 'enterTests',
    }

])
.then((writeToFile) =>

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();


// types of questions to use
//      confirm (y/n?)
//      input (takes- type, name, message)
//      