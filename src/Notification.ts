import { Participant } from "./Participant";

export class Notification {
    private notificationId: number;
    private recipant: Participant;
    private message: string;
    private status: string;

    constructor(notificationId:number, recipant: Participant, message:string){
        this.notificationId = notificationId;
        this.recipant = recipant;
        this.message = message;
        this.status = "unread";
    }

    public sendNotification(participants:Participant[]):void { //รับการแจ้งเตือนผู้ใช้แต่ละคน
        participants.forEach(user => { // for Each วนloop แต่ละผู้ใช้
            const newNotification = new Notification(
                Math.floor(Math.random() * 10000), //สุ่มรหัสการแจ้งเตือน
                user,
                this.message //แจ้งเตือนจาก Notification
            );

            user.saveNotification(newNotification);
        });
    }
    public toString():string{
    return `Notification(id=${this.notificationId}, recipant=${this.recipant.toString()}, message=${this.message})`;
    }
}