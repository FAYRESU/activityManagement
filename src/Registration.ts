import { Activity } from "./Activity";
import { Participant } from "./Participant";

export enum RegistrationStatus {
    PENDING = "Pending",  //อยู่ระหว่างรอการอนุมัติ
    APPROVED = "Approved", //ได้รับการอนุมัติ แล้ว
    REJECTED = "Rejected"  //ถูกปฏิเสธ
}


export class Registration {
    private registrationId: number;
    private participant: Participant;
    private status: RegistrationStatus;
    private activity: Activity;

    constructor(registrationId: number, participant: Participant, status: RegistrationStatus, activity: Activity) {
        this.registrationId = registrationId;
        this.participant = participant;
        this.status = status;
        this.activity = activity;
    }

    public getRegistrationId(): number {
        return this.registrationId;
    }

    public getParticipant(): Participant {
        return this.participant;
    }

    public getStatus(): RegistrationStatus {
        return this.status;
    }

    public getActivity(): Activity {
        return this.activity;
    }

    public submitRegistration(): void {
        if (this.status === RegistrationStatus.PENDING) {
            console.log(`Registration ID ${this.registrationId} submitted for approval.`);
        } else {
            console.log(`Registration ID ${this.registrationId} cannot be submitted.`);
        }
    }
    // เงื่อนไขถ้า status เป็น panding ข้อความจะขึ้นว่า ถูกส่งแล้ว

    public updateRegistrationStatus(newStatus: RegistrationStatus): void {
        this.status = newStatus;
    }

    public toString(): string {
        return `Registration ID: ${this.registrationId}\nParticipant: ${this.participant.getName()}\nActivity: ${this.activity.getActivityName()}\nStatus: ${this.status}`;
    }
}
