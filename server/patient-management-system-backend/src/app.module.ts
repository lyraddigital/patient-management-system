import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PatientsModule } from './patients/patients.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    PatientsModule,
    RoomsModule
  ]
})
export class AppModule {}
