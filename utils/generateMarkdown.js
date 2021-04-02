// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // use switch or if
  let badge;
  console.log('badge is', badge);
  console.log(license.toLowerCase() == 'mit')
//   if(license.toLowerCase() == 'mit')
//     return 'MIT Badge String'
// } else if(license.toLowerCase() === ){

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return ``;
  } else {
    return `## License 
    This project is licensed under the ${license}. Click the link below to learn more about how you can use this project.`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title.toUpperCase()}
  ${renderLicenseBadge(responses.license)}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributors](#contributors)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Description
    
    ${responses.description}
    ## Installation Instructions
    To install this application, please follow the below instructions:
    ${responses.instructions}
    ## Usage
    ${responses.usage}

    ${renderLicenseSection(response.license)}
    ${renderLicenseLink(response.license)}

    ## Contributors
    Many thanks to those who contributed to this project:
    $

    ## Questions
    Questions or issues? 
    For issues: ${response.issues}
    To contact me:
    * Github: [${responses.github}](https://github.com/${responses.github})
    * Email: [${responses.email}]()
`
};

module.exports = generateMarkdown;