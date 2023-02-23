const inquirer = require('inquirer')
const fs = require('fs')


const memberType = [{
      type: "list",
      message: "What kind of member do we need to add to the team?",
      name: "memberType",
      choices: ["Manager", "Engineer", "Intern", "Everyone has already been listed!"]
}];


    const managerInfo = [{
        type: "input",
        message: "What is their name?",
        name: "memberType",
        },
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name:'description'
        },
        {
            type: 'input',
            message: 'What is their e-mail address?',
            name:'installationProcess'
        },
        {
            type: 'input',
            message: 'What is their phone number?',
            name:'installationProcess'
        }];
    

    const engineerInfo = [{
        type: "input",
        message: "What is their name?",
        name: "memberType",
        },
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name:'description'
        },
        {
            type: 'input',
            message: 'What is their e-mail address?',
            name:'installationProcess'
        },
        {
            type: 'input',
            message: 'What is their phone number?',
            name:'installationProcess'
        }];


    const internInfo = [{
        type: "input",
        message: "What is their name?",
        name: "memberType",
        },
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name:'description'
        },
        {
            type: 'input',
            message: 'What is their e-mail address?',
            name:'installationProcess'
        },
        {
            type: 'input',
            message: 'What is their phone number?',
            name:'installationProcess'
        }];

function firstQuestion() {
    inquirer.prompt(memberType)

