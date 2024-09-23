// Badge and link information for the optional licenses included in the README generator
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

// Function to render a license badge for the license chosen by the user
function renderLicenseBadge(license) {
	if (!license) {
		return '';
	} else {
		for (const licenseType of licenses) {
			if (licenseType.type == license) {
				const badgeId = licenseType.badge;
				return badgeId;
				console.log(badgeId);
			}
		}
	}
}

// Function to render a license link for the license chosen by the user
function renderLicenseLink(license) {
	if (!license) {
		return '';
	} else {
		for (const licenseType of licenses) {
			if (licenseType.type == license) {
				licenseLink = licenseType.link;
				return licenseLink;
			}
		}
	}
}

// Function to create markdown data to be written to a new .md file

function generateMarkdown(data) {
	renderLicenseBadge(data.license);
	renderLicenseLink(data.license);

	return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  
  ## Description 
  
  ${data.description}
  
  ## Table of Contents

  ⋆[Installation](#Installation)
  ⋆[Usage](#Usage)
  ⋆[Credits](#Credits)
  ⋆[License](#License)
  ⋆[Features](#Features)
  ⋆[Contributions](#Contributions)
  ⋆[Test](#Contributions)

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits 

  ${data.credits}

  ## License

  ${renderLicenseLink(data.license)}
  

  ## Features

  ${data.features.split(',').map((feature) => {
		return `- ${feature}`;
	})}

  ## Technologies

  ${data.technologies.split(',').map((technology) => {
		return `- ${technology}`;
	})}

  ## Contributions

  ${data.contribute}

  ## Test

  ${data.tests}

  ## Questions

  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 

  >Email: ${data.email}

  >GitHub: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
