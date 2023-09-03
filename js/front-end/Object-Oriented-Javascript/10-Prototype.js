function User(email, name) {
    this.email = email;
    this.name = name;
}

User.prototype.login = function() {
    console.log(this.email + " logged in");
}

let user = new User("john@gmail.com", "John Doe");
user.login();