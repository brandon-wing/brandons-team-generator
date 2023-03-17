const Employee = require('./employeetemplate.js');

class Manager extends Employee {
    constructor(name, id, email, phone){
       super(name, id, email),
        this.phone = phone;
    }
    
   getPhone() {
       return this.phone;
    }
    
    getRole(){
        return 'manager';
    }
}

module.exports = Manager;