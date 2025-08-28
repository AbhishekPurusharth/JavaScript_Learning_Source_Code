class user {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`username Is: ${this.usrename}`);
    }
}

class company extends user {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password
    }
    companyRole() {
        console.log(`${this.username} Software Engineer At Google`);
    }
}
const UserInfo = new user("Abhishek",)
UserInfo.logMe()

const UserData = new company("Abhishek", "abhishek@google.copm", "abhi@1234")

UserData.companyRole()