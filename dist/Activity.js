"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
class Activity {
    constructor(instructor, activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, certificateIssued, schedule) {
        this.instructor = instructor;
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequired = approvalRequired;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
    }
    createActivity() { }
    updateActivity() { }
    publishActivity() { }
    deleteActivity() { }
    approveParticipant(participants) {
        for (const participant of participants) {
            console.log(`Approving participant: ${participant}`);
        }
    }
    generateCertificate() { }
    toString() {
        return `Activity(id=${this.activityId}, name=${this.activityName}, organizer=${this.organizer})`;
    }
}
exports.Activity = Activity;
