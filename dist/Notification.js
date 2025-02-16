"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(notificationId, recipient, message, status) {
        this.notificationId = notificationId;
        this.recipient = recipient;
        this.message = message;
        this.status = status;
    }
    sendNotification() { }
    toString() {
        return `Notification(id=${this.notificationId}, recipient=${this.recipient.toString()}, message=${this.message})`;
    }
}
exports.Notification = Notification;
