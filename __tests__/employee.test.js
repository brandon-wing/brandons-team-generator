const Employee = require('../library/employeetemplate');


describe('testing employee construction', () => {
    test('that the name matches.', () => {
        let employee = new Employee('Brandon Wing', 11, 'test@email.com');
        expect(employee.name).toBe('Brandon Wing');
});

    test('that the ID number matches.', () => {
        let employee = new Employee('Brandon Wing', 11, 'test@email.com');
        expect(employee.id).toBe(11);
});

    test('that the email matches.', () => {
        let employee = new Employee('Brandon Wing', 11, 'test@email.com');
        expect(employee.email).toBe('test@email.com');
});
});

describe('testing employee get functions', () => {
    test('the getName function should return the name of the employee.', () => {
        let employee = new Employee("Brandon Wing", 11, "test@email.com");
        expect(employee.getName()).toBe(employee.name);
});

    test('the getId function should return the ID number of the employee.', () => {
        let employee = new Employee("Brandon Wing", 11, "test@email.com");
        expect(employee.getId()).toBe(employee.id);
});

    test('the getEmail function should return the email of the employee.', () => {
        let employee = new Employee("Brandon Wing", 11, "test@email.com");
        expect(employee.getEmail()).toBe(employee.email);
});

    test('the getRole function should return the role of the employee.', () => {
        let employee = new Employee
        expect(employee.getRole()).toBe('employee');
});
});