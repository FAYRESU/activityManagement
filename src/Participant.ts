import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { User } from "./User";
import { Registration } from "./Registration";
import { Notification } from "./Notification";

export class Participant extends User {
    private registration: Registration | null;  // ใช้ null ถ้ายังไม่ลงทะเบียน
    private certificates: Certificate[] = [];
    private notification: Notification[] = [];

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string,
        activities: Activity[] = [], // เก็บเป็น array
        registration: Registration | null = null // null ถ้ายังไม่ได้ลงทะเบียน
    ) {
        super(id, name, email, password, role, activities); 
        this.registration = registration;
        this.certificates = [];  // สร้าง array เปล่า
    }

    public getRegistration(): Registration | null {
        return this.registration;
    }

    public registerForActivity(activity: Activity): void {
        if (!this.registration) {
            console.log("การลงทะเบียนไม่สำเร็จ, กรุณาลงทะเบียนกิจกรรมก่อน");
            return;
        }

        this.getActivities().push(activity); // เข้าถึง activities
        console.log(`Participant ${this.getName()} ลงทะเบียนกิจกรรม: ${activity.getActivityName()}`);
    }

    public searchActivity(keyword: string, allActivities: Activity[]): Activity[] {
        return allActivities.filter(activity => activity.getActivityName().includes(keyword));
    }

    public downloadCertificate(activity: Activity): Certificate | null {
        const certificate = this.certificates.find(cert => cert.getActivity().getActivityId() === activity.getActivityId());
        if (certificate) {
            console.log(`ดาวน์โหลดใบประกาศสำหรับกิจกรรม: ${activity.getActivityName()}`);
            return certificate;
        }
        console.log("ไม่พบใบประกาศสำหรับกิจกรรมนี้");
        return null;
    }

    //ใช้ในการบันทึกการแจ้งเตือนของผู้ใช้
    public saveNotification(notification:Notification):void{
        this.notification.push(notification);
    }

    public toString(): string {
        const activityNames = this.getActivities().map(activity => activity.getActivityName()).join(", ") || "ไม่มี";
        return `Participant ID: ${this.getId()}\nName: ${this.getName()}\nEmail: ${this.getEmail()}\nRole: ${this.getRole()}\nกิจกรรมที่ลงทะเบียน: ${activityNames}`;
    }
}
