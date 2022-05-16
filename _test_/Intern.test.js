const Intern = require('../lib/Intern');
// Creating intern object
test('creates an Intern object', () => {
    const intern = new Intern('Andre', 1, 'ablankholme@gmail.com', 'UofM');
    expect(intern.school).toEqual(expect.any(String));
});

// Gets getSchool()
test('gets employee school', () => {
    const intern = new Intern('Andre', 1, 'ablankholme@gmail.com', 'UofM');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// Gets getRole()
test('gets role of employee', () => {
    const intern = new Intern('Andre', 1, 'ablankholme@gmail.com', 'UofM');
    expect(intern.getRole()).toEqual("Intern");
});