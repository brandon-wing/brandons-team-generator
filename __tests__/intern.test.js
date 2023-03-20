const Intern = require('../library/interntemplate.js')

describe('testing intern construction', () => {
    test('that the name matches.', () => {
        let intern = new Intern('Brandon Wing', 11, 'test@email.com', 'UMN');
        expect(intern.name).toBe('Brandon Wing');
});

    test('that the ID number matches.', () => {
        let intern = new Intern('Brandon Wing', 11, 'test@email.com', 'UMN');
        expect(intern.id).toBe(11);
});

    test('that the email matches.', () => {
        let intern = new Intern('Brandon Wing', 11, 'test@email.com', 'UMN');
        expect(intern.email).toBe('test@email.com');
});

    test('that the school matches.', () => {
        let intern = new Intern('Brandon Wing', 11, 'test@email.com', 'UMN');
        expect(intern.school).toBe('UMN');
});
});

describe('testing intern get functions', () => {
    test('the getName function should return the name of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'UMN');
        expect(intern.getName()).toBe(intern.name);
});

    test('the getId function should return the ID number of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'UMN');
        expect(intern.getId()).toBe(intern.id);
});

    test('the getEmail function should return the email of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'UMN');
        expect(intern.getEmail()).toBe(intern.email);
});

    test('the getSchool function should return the school of the intern.', () => {
        let intern = new Intern("Brandon Wing", 11, "test@email.com", 'UMN');
        expect(intern.getSchool()).toBe(intern.school);
});

    test('the getRole function should return the role of the intern.', () => {
        let intern = new Intern
        expect(intern.getRole()).toBe('Intern');
});
});
