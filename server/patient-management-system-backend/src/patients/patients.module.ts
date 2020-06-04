import { Module } from '@nestjs/common';

import { PatientsResolver } from './patients.resolver';

@Module({
  providers: [
    PatientsResolver,
  ],
})
export class PatientsModule {}
