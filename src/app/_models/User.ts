


export interface User {
    UserId: number; // this comes from localstorage uit de token so dont change
    hospital_id: number;
    password: string;
    Username: string;
    Token: string;
    roles: string[];
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    image: string;
    lastActive: Date;
    PhotoUrl: string;
    city: string;
    mobile: string;
    email: string;
    country: string;
    worked_in: string;
    active: boolean;
    ltk: boolean;
    paidTill: Date;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
}
