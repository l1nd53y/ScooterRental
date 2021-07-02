const Scooter = require('../src/Scooter');

test("charge", async () => {
    const scooter = new Scooter();
    await scooter.charge(); // we need to wait for the charge!
    console.log("Test complete.");
});