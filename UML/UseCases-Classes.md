User Stories (Use Cases) 

As an {X}, I want to {Y}, by {Z}

X == Kind of user Y == Action Z == Behavior

As a customer, I want to download a Scooter Rental application to register my first name, last name, e-mail address, and CC number for payment -
As a customer, I want to use this downloaded application to rent an available scooter -
As a customer, I want the return the scooter I rented to a scooter station -
As a customer, I want my payment method charged upon returning the scooter to the scooter station -

class Customer { 
    firstName: STRING 
    lastName: STRING
    email: STRING
    ccNum: INTEGER
    downloadedScooterApp()
}

class Scooter {
    id: INTEGER
    async charge()
}

class ScooterStation {
    availScooters: INTEGER
    stationNum: INTEGER
    rentScooter()
    returnScooter()
    chargeCustomer()
}