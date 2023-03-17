const Employee = require('../library/employeetemplate');


describe('testing Employee construction', () => {


    test('creating an Employee Object Instance', () => {

        // SETUP --> create or initialize an object, DATA something to test against
        let employee = new Employee();

        // TESTING

        expect(typeof employee).toBe('object');
    });

    test('creating an Employee Object Instance', () => {

        // SETUP --> create or initialize an object, DATA something to test against
        let employee = new Employee();

        // TESTING
        expect(employee).toBeDefined();
    });

    it('creating an Employee Name', () => {

        // SETUP --> create or initialize an object, DATA something to test against
        let test = "bill"
        let employee = new Employee(test);
        // console.log(employee);
        // TESTING
        
        expect(employee.name).toBe(test)
    });

    it('creating an Employee ID', () => {

        // SETUP --> create or initialize an object, DATA something to test against
        let test = "bill"
        let idNum = 10;
        let testEmail = "bill@me.com";
        let employee = new Employee(test, idNum, testEmail);
        // console.log(employee);
        
        // TESTING
        
        expect(employee.id).toBe(idNum)
    });
    
    it('testing getName method on Employee Instance', () => {
        
        // SETUP --> create or initialize an object, DATA something to test against
        let test = "bill"
        let employee = new Employee(test, 12, "bill@me.com");
        console.log(employee);

        // TESTING

        expect(employee.getName()).toBe(test)
    });



  });