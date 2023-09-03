function User(email, name) {
    this.email = email;
    this.name = name;
    this.login = function(){
        console.log(this.email);
    }
}

let user1 = new User("john@gmail.com", "John Doe");
user1.login();