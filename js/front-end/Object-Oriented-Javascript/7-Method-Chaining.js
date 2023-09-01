class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email + " has logged in");
        return this;
    }
    logout() {
        console.log(this.email + " has logged out");
        return this;
    }
}

let user1 = new User("john@gmail.com", "John Doe");
user1.login().logout();