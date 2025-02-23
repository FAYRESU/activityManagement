"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
class Certificate {
    constructor(certificateId, recipient, activity, issuer, signature, template) {
        this.certificateId = certificateId;
        this.recipient = recipient;
        this.activity = activity;
        this.issuer = issuer;
        this.signature = signature;
        this.template = template;
    }
    getCertificateId() {
        return this.certificateId;
    }
    getRecipient() {
        return this.recipient;
    }
    getActivity() {
        return this.activity;
    }
    getIssuer() {
        return this.issuer;
    }
    getSignature() {
        return this.signature;
    }
    getTemplate() {
        return this.template;
    }
    setSignature(signature) {
        this.signature = signature;
    }
    setTemplate(template) {
        this.template = template;
    }
    static generateCertificate(certificateId, issuer, participant, activity, signature, template) {
        return new Certificate(certificateId, participant, activity, issuer, signature, template);
    }
    sendNotification() {
        console.log(`Notification: Certificate for ${this.recipient.getName()} in activity ${this.activity.getActivityName()} is ready for download.`);
    }
    toString() {
        return `Certificate ID: ${this.certificateId}, Recipient: ${this.recipient.getName()}, Activity: ${this.activity.getActivityName()}, Issuer: ${this.issuer.getName()}, Signature: ${this.signature}, Template: ${this.template}`;
    }
}
exports.Certificate = Certificate;
