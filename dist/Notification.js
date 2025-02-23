"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(notificationId, recipant, message) {
        this.notificationId = notificationId;
        this.recipant = recipant;
        this.message = message;
        this.status = "unread";
    }
    sendNotification(participants) {
        participants.forEach(user => {
            const newNotification = new Notification(Math.floor(Math.random() * 10000), //สุ่มรหัสการแจ้งเตือน
            user, this.message //แจ้งเตือนจาก Notification
            );
            user.saveNotification(newNotification);
        });
    }
    toString() {
        return `Notification(id=${this.notificationId}, recipant=${this.recipant.toString()}, message=${this.message})`;
    }
}
exports.Notification = Notification;
