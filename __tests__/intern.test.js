const Intern = require('../library/interntemplate.js')

describe('testing intern construction', () => {
    test('the getName function should return the name of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(intern.getName()).toBe(intern.name);
});

    test('the getId function should return the ID number of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(intern.getId()).toBe(intern.id);
});

    test('the getEmail function should return the email of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(intern.getEmail()).toBe(intern.email);
});

    test('the getSchool function should return the school of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(intern.getSchool()).toBe(intern.school);
});

test('the getRole function should return the role of the intern.', () => {
    let intern = new Intern
    expect(intern.getRole()).toBe('intern');
});
});
