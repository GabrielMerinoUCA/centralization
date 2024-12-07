window.onload = () => {
    function* gen() {
        let x = yield "Hello world";
        let y = yield "Goodbye cruel word";
        return x + y;
    }
    let myVar = gen();
    console.log(myVar.next());
    console.log(myVar.next(10));
    console.log(myVar.next(5));

}