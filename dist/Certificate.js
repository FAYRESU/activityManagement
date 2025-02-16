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
    generateCertificate() { }
    sendNotification() { }
    toString() {
        return `Certificate(id=${this.certificateId}, recipient=${this.recipient.toString()}, activity=${this.activity.toString()})`;
    }
}
exports.Certificate = Certificate;
