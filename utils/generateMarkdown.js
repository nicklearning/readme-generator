// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else if (license.includes("-")) {
    const licenseBadge = `![Static Badge](https://img.shields.io/badge/license--${license}-green)`;
    return licenseBadge;
  }
  else {
    const licenseBadge = `![Static Badge](https://img.shields.io/badge/license-${license}-green)`;
    return licenseBadge;
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    license.toLowerCase();
    const licenseLink = `[License Link](https://api.github.com/licenses/${license})`;
    return licenseLink;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""
  } else {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    return `${badge}\n\n${link}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions

`;
}
module.exports = generateMarkdown;
