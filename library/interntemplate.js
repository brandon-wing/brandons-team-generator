const Employee = require('./employeetemplate.js');


class Intern extends Employee {
    constructor(name, id, email, school){
        employee.call(this, name, id, email)
        this.school = school;
    }
    
    getSchool(){
        return this.school;
    }
    
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;