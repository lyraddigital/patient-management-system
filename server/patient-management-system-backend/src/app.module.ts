import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    PatientsModule
  ]
})
export class AppModule {}
