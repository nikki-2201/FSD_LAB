function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
Car.prototype.getDetails = function() {
    return `${this.make} ${this.model}`;
};
  
const myCar = new Car("Toyota", "Camry");
console.log(myCar.__proto__);  
console.log(myCar.getDetails());  
console.log(Car.prototype); 
  