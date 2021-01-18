// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown') //Pulls code from generateMarkdown.js
const fs = require('fs');
const util = require('util');

const writeToFile = util.promisify(fs.writeFile);

// An array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Add a local path or link to a screenshot of you project.',
        },
        {
            type: 'input',
            name: 'screenshotalt',
            message: 'Add alt text for your screenshot.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Under what license is your project?',
            choices: ['MIT License', 'GNU GPLv3 License', 'NONE'],
        },
        {
            type: 'input',
            name: 'badges',
            message: 'What badges do you have?',
        },
        {
            type: 'input',
            name: 'features',
            message: 'What features does your project have?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'List any contributors to your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests and provide examples on how to run them.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github profile link?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your professional email?',
        },
    ]);

// Generates the readme file with user input
const generateRM = (answers) => {

    const badge = renderLicenseBadge(answers.license)
    const link = renderLicenseLink(answers.license)
    const section = renderLicenseSection(answers.license)

 return  `# ${answers.title}
${badge}${link}


## Description 
${answers.description}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${answers.install}

## Usage 

![${answers.screenshotalt}](${answers.screenshot})

${answers.usage}

${section}

---

## Badges

${answers.badges}

## Features

${answers.features}

## Contributing

${answers.contribute}

## Tests

${answers.tests}

## Questions

To reach me for any questions or concerns, see below.

Github Link: ${answers.github}
Email: ${answers.email}

---

© 2021. All Rights Reserved.`;
}

// Function that writes the README file
questions().then((answers) => writeToFile('README.md', generateRM(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));

// Exports
// module.exports = index.js;


// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    let finalString = "";
    if (license = 'MIT License') {
      finalString = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      return finalString
    }
  
    else if (license = 'GNU GPLv3 License') {
      finalString = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" 
      return finalString;
    }
    
      return finalString;
    
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let finalString = "";
    if (license = 'MIT License') {
      finalString = "(https://opensource.org/licenses/MIT)"
      return finalString
    }
  
    else if (license = 'GNU GPLv3 License') {
      finalString = "(https://www.gnu.org/licenses/gpl-3.0)"
      return finalString;
    }
    
      return finalString;
  
   }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "NONE") {
        return "";
    }
    return `## License`
    // ${badge}${link}
   }