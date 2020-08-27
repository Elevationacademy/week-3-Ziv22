// spot check 1 
// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const dog = new Animal("Tofy","4");
// console.log(dog)

// Spot Check 2
// class Human {
//     constructor(name,age, isFriendly){
//         this.name = name; 
//         this.age = age; 
//         this.isFriendly = isFriendly;
//     }
// }

// const adam = new Human("Adam", 31, true);
// console.log(adam)

// Methods 
// Spot Check

class Vehicle {
    constructor(x ,y ,speed, fuel){
        this.x = x
        this.y = y 
        this._speed = speed;
        this._fuel = fuel;
        Vehicle.carsSold++;
    }
    
    get fuel() {
        return this._fuel
    }

    set fuel(amount) {
        if (amount > 150) { return console.log("Too much") }
        if (amount < 0) { return console.log("Not reasonable") }
        this._fuel = amount
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney(){
        const revenue = Vehicle.carsSold * 30000
        console.log(`Made ${revenue}$`)
    }

    get speed(){
        return this._speed
    }
}
Vehicle.carsSold = 0;

// const subaro = new Vehicle("a" ,"b" , 120)
// const toyota = new Vehicle("a" ,"b" , 220)
// const mitsubishi = new Vehicle("a" ,"b" , 220)
// Vehicle.getInfo()
// Vehicle.calculateMoney()

const c = new Vehicle()
c.x = 3
c.y = 1
// c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
// console.log(c.speed) // prints undefined
c.speed = 10
console.log(c.speed)
