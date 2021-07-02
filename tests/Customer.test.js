const Customer = require('../src/Customer')

describe('Customer', () => {

    const testCustomer1 = new Customer('Lindsey', 'Trujillo', 'lindsey@email.com', '0000000000000000', '31');
    const testCustomer2 = new Customer('Thomas', 'Trujillo', 'thomas@email.com', '0000000000000000', '16');
    test('App has been downloaded', () => {
        expect(testCustomer1.downloadedScooterApp()).toBe(true);
        expect(testCustomer2.downloadedScooterApp()).toBe(false);
    })
    
    test('Customer details registered', () => {
        expect(testCustomer1.firstName).toBe('Lindsey');
        expect(testCustomer1.lastName).toBe('Trujillo');
        expect(testCustomer1.email).toBe('lindsey@email.com');
        expect(testCustomer1.ccNum).toBe('0000000000000000');
        expect(testCustomer1.age).toBe('31');
        
    })

});

