let Car = function(topSpeed, driver) {
    this.topSpeed = topSpeed;
    this.driver = driver;
    this.drive = function() {
        console.log("driving");
    }
}

let myCar = new Car(100, "John");
myCar.drive();