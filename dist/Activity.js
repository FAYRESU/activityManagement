"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
class Activity {
    constructor(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, approvalRequest, certificateIssued, schedule, instructor, certificate, registration) {
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = "Pending";
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
        this.instructor = instructor;
        this.certificate = certificate;
        this.isDeleted = false;
        this.registration = registration !== null && registration !== void 0 ? registration : null;
    }
    // Getters
    getActivityId() {
        return this.activityId;
    }
    getActivityName() {
        return this.activityName;
    }
    getOrganizer() {
        return this.organizer;
    }
    getMaxParticipant() {
        return this.maxParticipant;
    }
    getActivityPeriod() {
        return this.activityPeriod;
    }
    getRegistrationPeriod() {
        return this.registrationPeriod;
    }
    getStatus() {
        return this.status;
    }
    isApprovalRequested() {
        return this.approvalRequest;
    }
    isCertificateIssued() {
        return this.certificateIssued;
    }
    getSchedule() {
        return this.schedule;
    }
    getInstructor() {
        return this.instructor;
    }
    getCertificate() {
        return this.certificate;
    }
    getRegistration() {
        return this.registration;
    }
    // Setters
    setActivityName(name) {
        this.activityName = name;
    }
    setMaxParticipant(limit) {
        this.maxParticipant = limit;
    }
    setStatus(status) {
        this.status = status;
    }
    requestApproval(request) {
        this.approvalRequest = request;
    }
    setCertificateIssued(issue) {
        this.certificateIssued = issue;
    }
    uploadSchedule(file) {
        this.schedule = file;
    }
    static createActivity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, approvalRequest, certificateIssued, schedule, instructor, certificate, registration) {
        return new Activity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, approvalRequest, certificateIssued, schedule, instructor, certificate, registration);
    }
    updateActivity(activityId, activityName, organizer, maxParticipant) {
        if (this.activityId !== activityId) {
            console.error(`Activity with ID ${activityId} not found!`);
            return null;
        }
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        return this;
    }
    publishActivity() {
        if (this.status !== "published") {
            this.status = "published";
            console.log(`Activity "${this.activityName}" has been published.`);
        }
        else {
            console.log(`Activity "${this.activityName}" is already published.`);
        }
    }
    deleteActivity() {
        if (this.isDeleted) {
            console.log(`Activity "${this.activityName}" has already been deleted.`);
            return;
        }
        this.isDeleted = true;
        console.log(`Activity "${this.activityName}" has been successfully deleted.`);
    }
    approveParticipants(participants) {
        participants.forEach((participant) => {
            const registration = participant.getRegistration();
            // ตรวจสอบว่า registration เป็น null หรือ undefined
            if (registration !== null && registration !== undefined) {
                registration.setStatus("approved"); // เรียกใช้ setStatus() ได้
            }
            else {
                console.log(`No registration found for participant: ${participant.getName()}`);
            }
        });
    }
    generateCertificates(participants) {
        participants.forEach((participant) => {
            console.log(`Generating certificate for ${participant.getName()}`);
        });
    }
    toString() {
        return `Activity ID: ${this.activityId}, Name: ${this.activityName}, Organizer: ${this.organizer}, Max Participants: ${this.maxParticipant}, Status: ${this.status}`;
    }
}
exports.Activity = Activity;
