"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    register(email, password) {
        if (email && password) {
            console.log("Registration successful");
            return true;
        }
        else {
            console.log("Registration failed: Email and password required");
            return false;
        }
    }
    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log("Login successful");
            return true;
        }
        else {
            console.log("Login failed: Incorrect email or password");
            return false;
        }
    }
    logout() {
        if (this.email) {
            console.log("Logout successful");
            return true;
        }
        else {
            console.log("Logout failed: No user logged in");
            return false;
        }
    }
    toString() {
        return `User(id=${this.id}, name=${this.name}, email=${this.email}, role=${this.role})`;
    }
}
exports.User = User;
