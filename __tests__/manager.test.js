const Manager = require('../library/managertemplate.js')

describe('testing manager construction', () => {
    test('that the name matches.', () => {
        let manager = new Manager('Brandon Wing', 11, 'test@email.com', '555-555-5555');
        expect(manager.name).toBe('Brandon Wing');
});

    test('that the ID number matches.', () => {
        let manager = new Manager('Brandon Wing', 11, 'test@email.com', '555-555-5555');
        expect(manager.id).toBe(11);
});

    test('that the email matches.', () => {
        let manager = new Manager('Brandon Wing', 11, 'test@email.com', '555-555-5555');
        expect(manager.email).toBe('test@email.com');
});

    test('that the phone number matches.', () => {
        let manager = new Manager('Brandon Wing', 11, 'test@email.com', '555-555-5555');
        expect(manager.phone).toBe('555-555-5555');
});
});

describe('testing Manager construction', () => {
    test('the getName function should return the name of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", '555-555-5555');
        expect(manager.getName()).toBe(manager.name);
});

    test('the getId function should return the ID number of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", '555-555-5555');
        expect(manager.getId()).toBe(manager.id);
});

    test('the getEmail function should return the email of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", '555-555-5555');
        expect(manager.getEmail()).toBe(manager.email);
});

    test('the getPhone function should return the phone number of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", '555-555-5555');
        expect(manager.getPhone()).toBe(manager.phone);
});

    test('the getRole function should return the role of the manager.', () => {
        let manager = new Manager
        expect(manager.getRole()).toBe('manager');
});
});