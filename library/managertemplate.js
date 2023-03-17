const Employee = require('./employeetemplate.js');

class Manager extends Employee {
    constructor(name, id, email, phone){
      //  super(name, id, email)
        Employee.call(this, name, id, email)
        this.phone = phone;
    }
    
    /*
    function getName(){
        return this.name;
    }
    
    function getId(){
        return this.id;
    }
    
    function getEmail(){
        return this.email;
    }
    */
   
   getPhone() {
       return this.phone;
    }
    
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;