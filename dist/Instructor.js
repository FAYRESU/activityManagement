"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const User_1 = require("./User");
class Instructor extends User_1.User {
    constructor(id, name, email, password, role) {
        super(id, name, email, password, role);
    }
    createActivity() {
        return;
    }
    approveParticipant() {
        return;
    }
    issueCertificate() {
        return;
    }
    toString() {
        return `Instructor ID: ${this.getId()}\nName: ${this.getName()}\nEmail: ${this.getEmail()}\nRole: ${this.getRole()}`;
    }
}
exports.Instructor = Instructor;
