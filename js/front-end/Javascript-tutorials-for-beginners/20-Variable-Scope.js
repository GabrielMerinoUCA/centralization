let z = 0;
function myFunction() {
    {
        var x = "x";
        let y = "y";
    }
    console.log(x);
    //console.log(y);
    console.log(z);
}
myFunction();
console.log(x);
