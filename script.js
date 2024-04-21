// Complete the js code
// Car constructor
function Car(make, model) {
  // Initialize properties
	this.make=make;
	this.model=model;
}

// Add method to Car's prototype
Car.prototype.getMakeModel = function() {
  // Return make and model
	return this.make and this.model;
}

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
  // Call parent constructor and initialize properties
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);

// Add method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
  // Return top speed
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
