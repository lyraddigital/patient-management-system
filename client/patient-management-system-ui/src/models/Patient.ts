export enum Gender {
    Male,
    Female
}

export default class Patient {
    constructor(
        public id: number, 
        public firstName: string, 
        public lastName: string, 
        public gender: Gender, 
        public room: string
    ) { }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get imageSrc(): string {
        return `assets/${this.gender === Gender.Male ? 'thumbnail.png': 'female.png'}`;
    }

    get roomText(): string {
        return `Room: ${this.room}`;
    }
}