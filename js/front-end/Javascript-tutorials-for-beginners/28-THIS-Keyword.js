let myCar = {
    topSpeed: 100,
    driver: "John",
    whatThis: function(){
        console.log(this);
    },
    getDriver: function() {
        return this.driver;
    }
}

console.log(myCar.getDriver());