export interface Person {
    name?: string;
    hobbies?: Array<string>;
    localTime?: string;
    timeZone?: string;
}

export interface Session {
    _id: string;
    person: Person;
    createAt: Date;
}
