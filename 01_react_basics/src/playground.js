
class Car {
    constructor(){
        this.wheels = 4;
        this.type = 'sportback'
    }
}

class Audi extends Car {

}

const audi = new Audi();

console.log(audi.wheels);