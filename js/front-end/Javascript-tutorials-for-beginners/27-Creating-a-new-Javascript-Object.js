let myCar = new Object();
myCar.topSpeed = 90;
myCar.driver = "John";

console.log(myCar.driver);

myCar.drive = function() {
    console.log("driving");
};

let myCar2 = {
    topSpeed: 115,
    driver: "John",
    drive: function() {
        console.log("driving");
    }
};

console.log(myCar2.topSpeed);