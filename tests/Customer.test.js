const Customer = require('../src/Customer')

describe('Customer', () => {
    const testCustomer = new Customer('Lindsey', 'Trujillo', 'lindsey@email.com', '0000000000000000');
    test('Customer details registered', () => {
        expect(testCustomer.firstName).toBe('Lindsey');
        expect(testCustomer.lastName).toBe('Trujillo');
        expect(testCustomer.email).toBe('lindsey@email.com');
        expect(testCustomer.ccNum).toBe('0000000000000000');
        
    })

    test('App has been downloaded', () => {
        expect(testCustomer.downloadedScooterApp()).toBe(true);
    })
});

