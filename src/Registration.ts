import { Activity } from './Activity';
import { Participant } from "./Participant";

export class Registration {
    private registrationId: string;
    private participants: Participant[] = [];
    private activity: Activity;
    private status: string;

    // constructor(regisId:string, participant: Participant, activity:Activity) {
    constructor(registrationId:string, activity:Activity) {
        this.registrationId = registrationId;
        // this.participant = participant;
        this.activity = activity;
        this.status = "wait";
    }

    public getActivity():Activity {
        return this.activity;
    }

    public addParticipant(participant:Participant):void {
        if(this.participants.length > this.activity.getMaxParticipant()){
            console.log("Limit!");
            return;
        }
        this.participants.push(participant);
    }

    public setActivity(activity:Activity):void{
        this.activity = activity;
    }

    public setStatus(status:string):void {
        this.status = status;
    }

    public submitRegistration():void{

    }

    public updateRegistrationStatus(): void{

    }
     
    public toString():string {
        return `{
        registrationId: ${this.registrationId},
        participant: {${this.participants}},
        activity: ${this.activity},
        status: ${this.status}\n}`
    }

}