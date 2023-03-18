const Engineer = require('../library/engineertemplate.js');

describe('testing Engineer construction', () => {
    test('that the name matches.', () => {
        let engineer = new Engineer('Brandon Wing', 11, 'test@email.com', 'rudyxwhite');
        expect(engineer.name).toBe('Brandon Wing');
});

    test('that the ID number matches.', () => {
        let engineer = new Engineer('Brandon Wing', 11, 'test@email.com', 'rudyxwhite');
        expect(engineer.id).toBe(11);
});

    test('that the email matches.', () => {
        let engineer = new Engineer('Brandon Wing', 11, 'test@email.com', 'rudyxwhite');
        expect(engineer.email).toBe('test@email.com');
});

    test('that the github matches.', () => {
        let engineer = new Engineer('Brandon Wing', 11, 'test@email.com', 'rudyxwhite');
        expect(engineer.github).toBe('rudyxwhite');
});
});

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



