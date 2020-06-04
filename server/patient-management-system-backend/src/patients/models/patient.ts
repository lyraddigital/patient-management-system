import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Patient {
    @Field() id: string;
    @Field() firstName: string;
    @Field() lastName: string;
    @Field() imageSrc: string;
    @Field() room: string;
}