import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Room {
    @Field() id: string;
    @Field() roomNumber: string;
};