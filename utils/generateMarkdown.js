// declare global variables for use in multiple functions
let badge;
let link;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    badge = '[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'Apache 2.0 License') {
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'GNU GPL v3 License') {
    badge = '[![License: GNU GPL v3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'IBM Public License Version 1.0') {
    badge = '[![License: IBM Public License Version 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (license == 'Mozilla Public License 2.0') {
    badge = '[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    badge = ''
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // let link = '';
  if (license == 'MIT License') {
    link = 'License: [MIT License](https://opensource.org/licenses/MIT)'
  } else if (license == 'Apache 2.0 License') {
    link = 'License: [Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'GNU GPL v3 License') {
    link = 'License: [GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'IBM Public License Version 1.0') {
    link = 'License: [IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)'
  } else if (license == 'Mozilla Public License 2.0') {
    link = 'License: [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
  } else {
    link = ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ``
  } else {
    return `## License 
This project is licensed under the ${license}. Click the link below to learn more about how you can use this project.`
  }
}

// function to render contributors section if applicable
function renderContributors(contributors) {
  if (contributors == '') {
    return ``
} else {
  return `## Contributors
Many thanks to those that contributed to this project:
* ${contributors}`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(data.license);
  renderLicenseBadge(data.license);
  
  return `# ${data.title.toUpperCase()}
${badge}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation Instructions
To install this application, please follow the below instructions:  
${data.instructions}

## Usage
${data.usage}

${renderLicenseSection(data.license)}  
${link}

${renderContributors(data.contributors)}

## Questions
### Questions or issues?  
${data.issues}
### To contact me:
* Github: [${data.username}](https://github.com/${data.username})  
* Email: [${data.email}](mailto:${data.email})
`
};

module.exports = generateMarkdown;