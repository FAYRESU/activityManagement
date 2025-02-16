import { Instructor } from "./Instructor";
import { Participant } from "./Participant";

export class Activity {
    private participant: Participant
    private instructor: Instructor
    private activityId: string
    private activityname: string
    private organizer: string
    private maxParticipant: number
    private activityPeriod: string
    private registrationPeriod: string
    private status: string
    private approvalRequired: boolean
    private certificateissued: boolean
    private schedule: string | File

    constructor(
        participant: Participant,
        instructor: Instructor,
        activityId: string,
        activityname: string,
        organizer: string,
        maxParticipant: number,
        activityPeriod: string,
        registrationPeriod: string,
        status: string,
        approvalRequired: boolean,
        certificateissued: boolean,
        schedule: File
    )
    {
        this.participant= participant
        this.instructor = instructor
        this.activityId = activityId
        this.activityname= activityname
        this.organizer= organizer
        this.maxParticipant= maxParticipant
        this.activityPeriod= activityPeriod
        this.registrationPeriod= registrationPeriod
        this.status= status
        this.approvalRequired= approvalRequired
        this.certificateissued= certificateissued
        this.schedule= schedule
    }

    public getActivityId() :string{
        return this.activityId
    }
    public getActivityName(): string{
        return this.activityname
    }
    public getOrganizer(): string{
        return this.organizer
    }
    public getMaxParticipant(): number{
        return this.maxParticipant
    }
    public getActivityPeriod(): string{
    return this.activityPeriod
    }
    public getstatus(): string{
        return this.status
    }
    public getApprovalRequired(): boolean{
        return this.approvalRequired
    }
    public getCertificateissued(): boolean{
        return this.certificateissued
    }
    public getSchedule(): string | File{
        return this.schedule
    }
    public setActivityId(activityId: string) :void{
        this.activityId = activityId
    }
    public setActivityName(activityname: string): void{
         this.activityname = activityname
    }
    public setOrganizer(organizer: string): void{
        this.organizer= organizer
    }
    public setMaxParticipant(maxParticipant: number): void{
        this.maxParticipant = maxParticipant
    }
    public setActivityPeriod(activityPeriod: string): void{
    this.activityPeriod = activityPeriod
    }
    public setstatus(status: string): void{
        this.status =status 
    }
    public setApprovalRequired(approvalRequired: boolean): void {
        this.approvalRequired = approvalRequired;
    }
    
    public setCertificateissued(certificateissued: boolean): void{
    this.certificateissued = certificateissued
    }
    public setSchedule(schedule: string | File): void{
        this.schedule= schedule
    }

    public createActivity(): void {
        // ฟังก์ชันนี้สามารถใช้ในการสร้างกิจกรรมใหม่
        console.log("Activity created:", this.activityname);
        // เพิ่มการบันทึกกิจกรรมลงในระบบ เช่น เพิ่มข้อมูลในฐานข้อมูล หรืออัพเดทสถานะ
    }
    
    public updateActivity(): void {
        // ฟังก์ชันนี้จะใช้ในการอัปเดตข้อมูลกิจกรรม
        console.log("Activity updated:", this.activityname);
        // ตัวอย่างเช่น สามารถอัปเดตชื่อกิจกรรม, ผู้จัด, หรือจำนวนผู้เข้าร่วมได้
    }
    
    public publishActivity(): void {
        // ฟังก์ชันนี้จะใช้ในการเผยแพร่กิจกรรม
        this.status = "Published";
        console.log("Activity published:", this.activityname);
        // อาจจะทำการเปลี่ยนสถานะกิจกรรมเป็น "เผยแพร่"
    }
    
    public deleteActivity(): void {
        // ฟังก์ชันนี้จะใช้ในการลบกิจกรรม
        console.log("Activity deleted:", this.activityname);
        // อาจจะทำการลบกิจกรรมจากระบบหรือฐานข้อมูล
    }
    
    public approveParticipant(participants: Participant[]): void {
        // ฟังก์ชันนี้จะใช้ในการอนุมัติผู้เข้าร่วมกิจกรรม
        participants.forEach((participant) => {
            console.log(`Participant ${participant.getName()} approved.`);
            // อาจจะมีการตั้งสถานะของผู้เข้าร่วมกิจกรรมเป็น "approved" หรือบันทึกการอนุมัติ
        });
    }
    
    public generateCertificate(): void {
        // ฟังก์ชันนี้จะใช้ในการสร้างใบรับรอง
        if (this.certificateissued) {
            console.log("Certificate generated for activity:", this.activityname);
            // สามารถสร้างใบรับรอง เช่น การพิมพ์ใบรับรอง PDF หรือส่งออกข้อมูลใบรับรอง
        } else {
            console.log("No certificate issued for this activity.");
        }
    }
    
    public toString(): string {
        return `Activity [ID: ${this.activityId}, Name: ${this.activityname}, Organizer: ${this.organizer}, 
                Max Participants: ${this.maxParticipant}, Period: ${this.activityPeriod}, 
                Registration Period: ${this.registrationPeriod}, Status: ${this.status}, 
                Approval Required: ${this.approvalRequired}, Certificate Issued: ${this.certificateissued}]`;
    }
    
}