"use strict";
class Car {
    constructor() {
        this.engine = 0;
    }
    move() {
        this.engine += 1;
        console.log(this.engine);
    }
}
const car = new Car();
car.move();
