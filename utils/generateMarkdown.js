
const licenses = [
  {
  type: 'Apache 2.0',
  badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
  link: '(https://opensource.org/licenses/Apache-2.0)',
  },
  {
  type: 'BSD 3-Clause',
  badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
  link: '(https://opensource.org/licenses/BSD-3-Clause)',
  },
  {
  type: 'BSD 2-Clause',
  badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]',
  link: '(https://opensource.org/licenses/BSD-2-Clause)',
  },
  {
  type: 'GPL v3',
  badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
  link: '(https://www.gnu.org/licenses/gpl-3.0)',
  },
  {
  type: 'GPL v2',
  badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]',
  link: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  },
  {
  type: 'AGPL v3',
  badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]',
  link: '(https://www.gnu.org/licenses/agpl-3.0)',
  },
  {
  type: 'LGPL v3',
  badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]',
  link: '(https://www.gnu.org/licenses/lgpl-3.0)',
  },
  {
  type: 'Unlicense',
  badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]',
  link: '(http://unlicense.org/)',
  },
  {
  type: 'The Do What the Fuck You Want to Public License',
  badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]',
  link: '(http://www.wtfpl.net/about/)',
  },
  {
  type: 'MIT',
  badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
  link: '(https://opensource.org/licenses/MIT)',
  },
  ];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  for (const licenseType of licenses) {
    if(licenseType.type == license) {
      const badgeId = licenseType.badge 
      return badgeId
    }
    console.log(licenseType.badge);
    //return badgeId;

  }

  
}




function renderLicenseLink(license) {
  for (const licenseType of licenses) {
    if(licenseType.type == license) {
      licenseLink = licenseType.link 
      return licenseLink;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
/*function renderLicenseSection(license) {
  if(confirmLicense) {
    return ''
  } else {
    return ${renderLicenseBadge(license)} + ${renderLicenseLink(license)}
  }
} */

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.description}

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits 

  ${data.credits}

  ## License

  ${renderLicenseLink(data.license)}
  

  ## Features

  ${data.features}

  ## Contributions

  ${data.contribute}

  ## Test

  ${data.test}

`;
}

module.exports = generateMarkdown;
