"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    // constructor(regisId:string, participant: Participant, activity:Activity) {
    constructor(registrationId, activity) {
        this.participants = [];
        this.registrationId = registrationId;
        // this.participant = participant;
        this.activity = activity;
        this.status = "wait";
    }
    getActivity() {
        return this.activity;
    }
    addParticipant(participant) {
        if (this.participants.length > this.activity.getMaxParticipant()) {
            console.log("Limit!");
            return;
        }
        this.participants.push(participant);
    }
    setActivity(activity) {
        this.activity = activity;
    }
    setStatus(status) {
        this.status = status;
    }
    submitRegistration() {
    }
    updateRegistrationStatus() {
    }
    toString() {
        return `{
        registrationId: ${this.registrationId},
        participant: {${this.participants}},
        activity: ${this.activity},
        status: ${this.status}\n}`;
    }
}
exports.Registration = Registration;
