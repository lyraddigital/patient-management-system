import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Patient {
    @Field() id: string;
    @Field() firstName: string;
    @Field() lastName: string;
    @Field() gender: Gender;
    @Field() room: string;
};

export enum Gender {
    Male,
    Female
};