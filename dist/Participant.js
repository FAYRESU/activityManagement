"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const User_1 = require("./User");
class Participant extends User_1.User {
    constructor(id, name, email, password, role, activities = [], // เก็บเป็น array
    registration = null // null ถ้ายังไม่ได้ลงทะเบียน
    ) {
        super(id, name, email, password, role, activities);
        this.certificates = [];
        this.notification = [];
        this.registration = registration;
        this.certificates = []; // สร้าง array เปล่า
    }
    getRegistration() {
        return this.registration;
    }
    registerForActivity(activity) {
        if (!this.registration) {
            console.log("การลงทะเบียนไม่สำเร็จ, กรุณาลงทะเบียนกิจกรรมก่อน");
            return;
        }
        this.getActivities().push(activity); // เข้าถึง activities
        console.log(`Participant ${this.getName()} ลงทะเบียนกิจกรรม: ${activity.getActivityName()}`);
    }
    searchActivity(keyword, allActivities) {
        return allActivities.filter(activity => activity.getActivityName().includes(keyword));
    }
    downloadCertificate(activity) {
        const certificate = this.certificates.find(cert => cert.getActivity().getActivityId() === activity.getActivityId());
        if (certificate) {
            console.log(`ดาวน์โหลดใบประกาศสำหรับกิจกรรม: ${activity.getActivityName()}`);
            return certificate;
        }
        console.log("ไม่พบใบประกาศสำหรับกิจกรรมนี้");
        return null;
    }
    //ใช้ในการบันทึกการแจ้งเตือนของผู้ใช้
    saveNotification(notification) {
        this.notification.push(notification);
    }
    toString() {
        const activityNames = this.getActivities().map(activity => activity.getActivityName()).join(", ") || "ไม่มี";
        return `Participant ID: ${this.getId()}\nName: ${this.getName()}\nEmail: ${this.getEmail()}\nRole: ${this.getRole()}\nกิจกรรมที่ลงทะเบียน: ${activityNames}`;
    }
}
exports.Participant = Participant;
