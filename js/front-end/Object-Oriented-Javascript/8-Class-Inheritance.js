class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email + " logged in");
        return this;
    }
    logout() {
        console.log(this.email + "logged out")
        return this;
    }
}
class Admin extends User {
    deleteUser(user, users) {
        for(let i = 0; i < users.length; i++) {
            if(user == users[i]) {
                users.splice(i, 1);
            }
        }
    }
}

let admin1 = new Admin("maximus@gmail.com", "Maximus Optimus");
let users = [new User("anthony@gmail.com", "Anthony Dubois"), new User("john@gmail.com", "John Doe")];
console.log(users.length);
admin1.deleteUser(users[0], users);
