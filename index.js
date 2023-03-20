//requiring the packages
const fs = require('fs')
const inquirer = require('inquirer')
//requiring all the templates
const Manager = require('./library/managertemplate.js')
const Engineer = require('./library/engineertemplate.js')
const Intern = require('./library/interntemplate.js')
const Employee = require('./library/employeetemplate.js')
//requiring the template helper code in the src folder
const templateHelper = require('./src/template.js')
//we have to create an empty array for employees to be added to!
const employeeList = []
//this will be the first prompt that determines which, if any, employees to add to the array.
function firstQuestion() {
    const memberType = [{
        type: 'list',
        message: 'What kind of member do we need to add to the team?',
        name: 'memberType',
        choices: ['Manager', 'Engineer', 'Intern', 'Everyone has already been listed!']
  }];  
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
            //creates an instance of a manager with each answer into its correct place
            const manager = new Manager(answer.memberType, answer.id, answer.email, answer.phone);
            //add the new manager to the array!
            employeeList.push(manager)
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
        inquirer.prompt(engineerInfo)
        .then(answer => {
            const engineer = new Engineer(answer.memberType, answer.id, answer.email, answer.github);
            employeeList.push(engineer)
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
            const intern = new Intern(answer.memberType, answer.id, answer.email, answer.school);
            employeeList.push(intern)
            firstQuestion();

    })};


firstQuestion();
//much like the homework assignment previously, we are going to use fileshare to generate and HTML page
function generatePage(){
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
      });
};



