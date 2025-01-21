function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
Car.prototype.getDetails = function() {
    return `${this.year} ${this.make} ${this.model}`;
  };
  
function ElectricCar(make, model, year, batteryCapacity) {
 Car.call(this, make, model, year); 
 this.batteryCapacity = batteryCapacity;
  }

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getBatteryInfo = function() {
    return `Battery capacity: ${this.batteryCapacity} kWh`;
  };

const myElectricCar = new ElectricCar("Tesla", "Model S", 2023, 100);
console.log(myElectricCar.getDetails());     
console.log(myElectricCar.getBatteryInfo());
  