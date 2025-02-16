import { User } from "./User";

export class Notification {
    constructor(
        public notificationId: string,
        public recipient: User,
        public message: string,
        public status: string
    ) {}
    sendNotification(): void {}
    
    toString(): string {
        return `Notification(id=${this.notificationId}, recipient=${this.recipient.toString()}, message=${this.message})`;
    }
}
