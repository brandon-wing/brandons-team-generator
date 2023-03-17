const fs = require('fs')
const inquirer = require('inquirer')

const managertemplate = require('./library/managertemplate.js')
const engineertemplate = require('./library/engineertemplate.js')
const interntemplate = require('./library/interntemplate.js')
const employeetemplate = require('./library/employeetemplate.js')

const memberType = [{
      type: 'list',
      message: 'What kind of member do we need to add to the team?',
      name: 'memberType',
      choices: ['Manager', 'Engineer', 'Intern', 'Everyone has already been listed!']
}];

function firstQuestion() {
    inquirer.prompt(memberType)
        .then(data => {
            if (data.memberType === 'Manager'){
                managerPrompt();}

            else if (data.memberType === 'Engineer'){
                engineerPrompt();}

            else if (data.memberType === 'Intern'){
                internPrompt();}

            else if(data.memberType === 'Everyone has already been listed!'){
                generatePage();
                console.log("Wahoo! Your page has been generated!");}
        })};

function managerPrompt(){
    const managerInfo = [{
        type: 'input',
        message: 'What is their name?',
        name: 'memberType',
        },
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name:'id'
        },
        {
            type: 'input',
            message: 'What is their e-mail address?',
            name:'email'
        },
        {
            type: 'input',
            message: 'What is their phone number?',
            name:'phone'
        }];
        inquirer.prompt(managerInfo)
        .then(answer => {
            const manager = new Manager(answer.memberType, answer.id, answer.email, answer.phone);
            firstQuestion();
    })};

function engineerPrompt(){
    const engineerInfo = [{
        type: 'input',
        message: 'What is their name?',
        name: 'memberType',
        },
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name:'id'
        },
        {
            type: 'input',
            message: 'What is their e-mail address?',
            name:'email'
        },
        {
            type: 'input',
            message: 'What is their phone number?',
            name:'phone'
        }];
        inquirer.prompt(internInfo)
        .then(answer => {
            const engineer = new Engineer(answer.memberType, answer.id, answer.email, answer.github);
            firstQuestion();
    })};
    
function internPrompt(){
    const internInfo = [{
        type: 'input',
        message: 'What is their name?',
        name: 'memberType',
        },
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name:'id'
        },
        {
            type: 'input',
            message: 'What is their e-mail address?',
            name:'email'
        },
        {
            type: 'input',
            message: 'What is their phone number?',
            name:'phone'
        }];
        inquirer.prompt(internInfo)
        .then(answer => {
            const intern = new intern(answer.memberType, answer.id, answer.email, answer.school);
            firstQuestion();
    })};


firstQuestion();

function generatePage(){};



