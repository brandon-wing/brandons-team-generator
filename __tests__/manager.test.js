const Manager = require('../library/managertemplate.js')

describe('testing Manager construction', () => {
    test('the getName function should return the name of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", 9521234567);
        expect(manager.getName()).toBe(manager.name);
});

    test('the getId function should return the ID number of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", 9521234567);
        expect(manager.getId()).toBe(manager.id);
});

    test('the getEmail function should return the email of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", 9521234567);
        expect(manager.getEmail()).toBe(manager.email);
});

    test('the getPhone function should return the phone number of the manager.', () => {
        let manager = new Manager("Brandon Wing", 11, "test@email.com", 9521234567);
        expect(manager.getPhone()).toBe(manager.phone);
});

test('the getRole function should return the name of the manager.', () => {
    let manager = new Manager
    expect(manager.getRole()).toBe('Manager');
});
});