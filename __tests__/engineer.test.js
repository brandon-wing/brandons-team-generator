const Engineer = require('../library/engineertemplate.js');

describe('testing Engineer get functions', () => {
    test('the getName function should return the name of the engineer.', () => {
        let engineer = new Engineer("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(engineer.getName()).toBe(engineer.name);
});

    test('the getId function should return the ID number of the engineer.', () => {
        let engineer = new Engineer("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(engineer.getId()).toBe(engineer.id);
});

    test('the getEmail function should return the email of the engineer.', () => {
        let engineer = new Engineer("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(engineer.getEmail()).toBe(engineer.email);
});

    test('the getGithub function should return the github of the engineer.', () => {
        let engineer = new Engineer("Brandon Wing", 11, "test@email.com", 'rudyxwhite');
        expect(engineer.getGithub()).toBe(engineer.github);
});

test('the getRole function should return the role of the engineer.', () => {
    let engineer = new Engineer
    expect(engineer.getRole()).toBe('engineer');
});
});
