class Customer {
    constructor(firstName, lastName, email, ccNum, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.ccNum = ccNum;
        this.age = age;
        
    }

    downloadedScooterApp() {
        if(this.age >= 18) {
            return true;
        } else {
            return false;
        }
        
    }
}

module.exports = Customer