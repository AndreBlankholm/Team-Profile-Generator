const Manager = require('../lib/Manager');
// Creates manager object
test('creates an Manager object', () => {
    const manager = new Manager('Andre', 1, 'ablankholm@gmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets getRole()
test('gets role of employee', () => {
    const manager = new Manager('Andre', 1, 'ablankholm@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
});