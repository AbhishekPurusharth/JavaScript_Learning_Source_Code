class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    securePassword() {
        return `${this.password}-@#$2347`
    }
    formatUserName() {
        return `@${this.username.toLowerCase()}`
    }
};

const userDheeraj = new user("Dheeraj", "dheeraj@demo.com", "dheeraj")
console.log(userDheeraj);

console.log("Secure Password:", userDheeraj.securePassword());
console.log("Correct UserName:", userDheeraj.formatUserName());

//====================================================================================\\

function userData(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
};
userData.prototype.securePassword = function () {
    return `${this.password}-@#$2347`
}
const userDheeraj2 = new userData("Dheeraj", "dheeraj@demo.com", "dheeraj")
console.log(userDheeraj2);
console.log(userDheeraj2.securePassword());