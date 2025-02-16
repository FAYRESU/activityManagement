"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    constructor(activity, registrationId, participant, status) {
        this.activity = activity;
        this.registrationId = registrationId;
        this.participant = participant;
        this.status = status;
    }
    submitRegistration() { }
    updateRegistrationStatus() { }
    toString() {
        return `Registration(id=${this.registrationId}, participant=${this.participant.toString()}, activity=${this.activity.toString()})`;
    }
}
exports.Registration = Registration;
