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
        validate: titleInput => {
            if(titleInput) {
                return true;
            } if(!titleInput) {
                console.log("Your README has to have a title!");
                return false;
            }
        }
        // *NEED TO TRY TO VALIDATE ANSWERS AND ENSURE THEY ARE PROPERLY CODED TO BE WRITTEN TO README FILE
    },
    {
        type: 'input',
        message: 'Please enter a brief description explaining the what, why, and how of your project.',
        name: 'description',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } if(!descriptionInput) {
                console.log("Your README needs a description so users know what your application is about!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your application.',
        name: 'install',
        default: 'N/A',
        validate: installationInput => {
            if(installationInput) {
                return true;
            } if (!installationInput) {
                console.log("Please include installation instructions for users. Otherwise enter 'N/A'");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter usage instruction for your application.',
        name: 'usage',
        default: 'N/A',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } if(!usageInput) {
                console.log("Usage information helps users better understand how to operate your application. If you wish to leave out usage instruction, enter 'N/A'")
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter credit information.',
        name: 'credits',
        default: 'N/A',
        validate: creditsInput => {
            if(creditsInput) {
                return true;
            } if (!creditsInput) {
                console.log("It is expected to credit the work of others you may have used. If the work is yours only, enter 'N/A'")
            }
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to include a license?',
        name: 'confirmLicense',
        default: false,
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: ['Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL V3', 'GPL V2', 'AGPL v3', 'LGPL v3', 'Unlicense', 'The Do What the Fuck You Want to Public License', 'MIT'],
        name: 'license',
        default: 'MIT',
        when: ( {confirmLicense} ) => {
            if(confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter a list of features available on your web application separated by commas.',
        name: 'features',
        validate: featuresInput => {
            if(featuresInput) {
                return true;
            } if(!featuresInput) {
                console.log("It is helpful to include a brief overview of the features that users can expect in the application. If you wish to leave out features, enter 'N/A'");
                return false;
            }
        },

    },
    {
        type: 'input',
        message: 'Please explain how other developers can contribute to your project.',
        name: 'contribute',
        validate: contributeInput => {
            if(contributeInput) {
                return true;
            } if(!contributeInput) {
                console.log("It is expected to include the contact information of anyone else who may have contributed to this application. If you wish to leave this area empty, enter 'N/A'");
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'Please list tests for your application.',
        name: 'tests',
        validate: testsInput => {
            if(testsInput){
                return true;
            } if(!testsInput) {
                console.log("Let users know how you tested your application and include the processes so users can also test your product. If you wish to leave this are empty, enter 'N/A'");
                return false;
            }
        },
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


