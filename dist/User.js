"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, role, activities = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.activities = activities;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
    setRole(role) {
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
    getActivities() {
        return this.activities;
    }
    toString() {
        return `User(id=${this.id}, name=${this.name}, email=${this.email}, role=${this.role}, activities=${this.activities.length})`;
    }
}
exports.User = User;
