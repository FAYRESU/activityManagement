import { User } from "./User";

export class Instructor extends User {
    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string
    ) {
        super(id, name, email, password, role);
    }

    createActivity(): void {
        return
    }

    approveParticipant(): void {
        return
    }

    issueCertificate(): void {
        return
    }

    toString(): string {
        return `Instructor ID: ${this.getId()}\nName: ${this.getName()}\nEmail: ${this.getEmail()}\nRole: ${this.getRole()}`;
    }
}
