// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateMarkdown = data => {
  return `
  # ${data.projectTitle}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ---

  ## Description

  ${data.description}

  ---

  ## Installation

  ${data.installation}

  ---

  ## Usage

  ${data.usage}

  ---

  ## License

  ${data.license}

  ---

  ## Contributing

  ${data.contribute}

  ---

  ## Tests

  ${data.tests}

  ---

  ## Questions

  ${data.questions}

  ---

  ## Webpage Demo

  Link to webpage: [**Weather Dashboard**](https://jarydknight.github.io/weather-dashboard/)

  ### Desktop:
  ![screenshot of webpage](./assets/images/screenshot_1.png) 

  ### Mobile:
  ![screenshot of webpage](./assets/images/screenshot_2.png)
  `;
};

module.exports = generateMarkdown;
