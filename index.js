// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeToFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
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
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any other contributors to your project.',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Under what license is your project?',
        },
        {
            type: 'input',
            name: 'badges',
            message: 'What badges do you have? Type N/A if inapplicable.',
        },
        {
            type: 'input',
            name: 'features',
            message: 'What features does your project have?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Type N/A if inapplicable.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests and provide examples on how to run them. N/A if inapplicable.',
        },
    ]);

const generateRM = (answers) =>
`# ${answers.title}

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

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}

---

## Badges

${answers.badges}

## Features

${answers.features}

## Contributing

${answers.contribute}

## Tests

${answers.tests}

---

© 2020. All Rights Reserved.`;

// TODO: Create a function to write README file
questions().then((answers) => writeToFile('README.md', generateRM(answers)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
