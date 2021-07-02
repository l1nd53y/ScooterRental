const ScooterStation = require('../src/ScooterStation')

describe('Scooter Station', () => {
const testScooter1 = new ScooterStation(2, 20);
const testScooter2 = new ScooterStation(0, 17);
test('Scooter available, can be rented', () => {
    expect(testScooter1.rentScooter()).toBe("Scooter rented.");
    expect(testScooter2.rentScooter()).toBe("No scooters currently available.");
});

test('Returned scooter successfully', () => {
    expect(testScooter1.returnScooter()).toBe(true);
    expect(testScooter2.returnScooter()).toBe(false);
});

test('Can charge customer for scooter', () => {
    expect(testScooter1.chargeCustomer()).toBe("Your payment method has been charged.");
    expect(testScooter2.chargeCustomer()).toBe(false);
    })
});