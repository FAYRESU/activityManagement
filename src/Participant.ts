import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { User } from "./User";

export class Participant extends User {
    private activity: Activity[] = [];
    private certificates: Certificate[] = [];

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string
    ) {
        super(id, name, email, password, role);
    }

    public registerForActivity(activity: Activity): void {
        this.activity.push(activity);
        console.log(`Participant ${this.getName()} registered for activity: ${activity.getActivityName()}`);
    }

    public searchActivity(keyword: string, allActivities: Activity[]): Activity[] {
        return allActivities.filter(activity => activity.getActivityName().includes(keyword));
    }

    public downloadCertificate(activity: Activity): Certificate | null {
        const certificate = this.certificates.find(cert => cert.getActivityId() === activity);
        if (certificate) {
            console.log(`Certificate downloaded for activity: ${activity.getActivityName()}`);
            return certificate;
        }
        console.log("No certificate found for this activity.");
        return null;
    }
    // เช็คว่าเจอใบรับรองรึป่าว

    public toString(): string {
        return `Participant ID: ${this.getId()}\nName: ${this.getName()}\nEmail: ${this.getEmail()}\nRole: ${this.getRole()}\nRegistered Activities: ${this.activity.length}`;
    }
}
