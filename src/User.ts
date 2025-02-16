import { Activity } from "./Activity";

export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private role: string;
    private activities: Activity[]; // ใช้ activities แทน activity เพื่อให้เหมาะสมกับ array

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string,
        activities: Activity[] = []
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.activities = activities; 
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getRole(): string {
        return this.role;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public setRole(role: string): void {
        this.role = role;
    }

    public register(email: string, password: string): boolean {
        if (email && password) {
            console.log("Registration successful");
            return true;
        } else {
            console.log("Registration failed: Email and password required");
            return false;
        }
    }

    public login(email: string, password: string): boolean {
        if (email === this.email && password === this.password) {
            console.log("Login successful");
            return true;
        } else {
            console.log("Login failed: Incorrect email or password");
            return false;
        }
    }

    public logout(): boolean {
        if (this.email) {
            console.log("Logout successful");
            return true;
        } else {
            console.log("Logout failed: No user logged in");
            return false;
        }
    }

    public getActivities(): Activity[] {
        return this.activities;
    }

    toString(): string {
        return `User(id=${this.id}, name=${this.name}, email=${this.email}, role=${this.role}, activities=${this.activities.length})`;
    }
}
