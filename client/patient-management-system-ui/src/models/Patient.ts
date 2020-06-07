export default interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    gender: Gender;
    room: string;
}

export enum Gender {
    Male,
    Female
}