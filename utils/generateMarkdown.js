
const licenseInformation = require('licenses');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseId = '';
  if(license == 'Apache 2.0') {
    let licenseId = 'Apache_2.0-blue';
  } if (license == 'BSD 3-Clause') {
    let licenseId = 'BSD_3--Clause-blue'
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.description}

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits 

  ${data.credits}

  ## Features

  ${data.features}

  ## Contributions

  ${data.contribute}

  ## Test

  ${data.test}

`;
}

module.exports = generateMarkdown;
