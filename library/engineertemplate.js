const Employee = require('./employeetemplate.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        employee.call(this, name, id, email)
        this.github = github;
    }
    
    getGithub(){
        return this.github;
    }
    
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;