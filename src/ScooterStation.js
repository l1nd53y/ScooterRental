const Customer = require('../src/Customer')
const Scooter = require('../src/Scooter');

class ScooterStation {
    constructor(availScooters, stationNum) {
        this.availScooters = availScooters;
        this.stationNum = stationNum;
    }

    rentScooter() {
        if (this.availScooters > 0) {
            return "Scooter rented.";
        } else {
            return "No scooters currently available.";
        }
    }

    returnScooter() {
        if(this.rentScooter() === "Scooter rented.") {
            return true;
        } else {
            return false;
        }
    }

    chargeCustomer() {
        if(this.returnScooter() === true) {
            return "Your payment method has been charged.";
        } else {
            return false;
        }
    }
}

module.exports = ScooterStation;