function User(email, name) {
    this.email = email;
    this.name = name;
}

User.prototype.login = function () {
    console.log(this.email + " logged in");
}

function Admin(...args) {
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

let admin1 = new Admin("john@gmail.com", "John Doe");
