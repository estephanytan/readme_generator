// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',

    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is the purpose of this project?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
    },
    {
        type: 'input',
        name: 'how',
        message: 'How can it be used by others?',

    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide instructions on how to use it.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you going to use?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'contrubuters',
        message: 'Are there any contributors?',
        default: true
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can the app be tested?',
    }
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./Output/output-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app

const init = () => {
    return inquirer.prompt(questions).then(readmeData => {
        return readmeData;
    })
};
// Function call to initialize app
init().then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
}).then(pageMD => {
    return writeFile(pageMD);
}).then(writeFileResponse => {
    console.log(writeFileResponse.message);
}).catch(err => {
    console.log(err);
});

