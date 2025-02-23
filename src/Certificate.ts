import { Participant } from "./Participant";
import { Activity } from "./Activity";
import { Instructor } from "./Instructor";


export class Certificate {
  private certificateId: string;
  private recipient: Participant;
  private activity: Activity;
  private issuer: Instructor;
  private signature: string;
  private template: string;

  constructor(
    certificateId: string,
    recipient: Participant,
    activity: Activity,
    issuer: Instructor,
    signature: string,
    template: string
  ) {
    this.certificateId = certificateId;
    this.recipient = recipient;
    this.activity = activity;
    this.issuer = issuer;
    this.signature = signature;
    this.template = template;
  }

  public getCertificateId(): string {
    return this.certificateId;
  }

  public getRecipient(): Participant {
    return this.recipient;
  }

  public getActivity(): Activity {
    return this.activity;
  }

  public getIssuer(): Instructor {
    return this.issuer;
  }

  public getSignature(): string {
    return this.signature;
  }

  public getTemplate(): string {
    return this.template;
  }

  public setSignature(signature: string): void {
    this.signature = signature;
  }

  public setTemplate(template: string): void {
    this.template = template;
  }

  public static generateCertificate(
    certificateId: string,
    issuer: Instructor,
    participant: Participant,
    activity: Activity,
    signature: string,
    template: string
  ): Certificate {
    return new Certificate( certificateId,participant, activity, issuer, signature, template);
  }

  public sendNotification(): void {
    console.log(
      `Notification: Certificate for ${this.recipient.getName()} in activity ${this.activity.getActivityName()} is ready for download.`
    );
  }
  public toString(): string {
    return `Certificate ID: ${this.certificateId}, Recipient: ${this.recipient.getName()}, Activity: ${this.activity.getActivityName()}, Issuer: ${this.issuer.getName()}, Signature: ${this.signature}, Template: ${this.template}`;
  }
  
}
