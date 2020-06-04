import { Query, Resolver } from '@nestjs/graphql';

import { Patient } from 'src/patients/models/patient';

@Resolver()
export class PatientsResolver {
  @Query(_ => [Patient!]!)
  patients(): Array<Patient> {
    return [
      { 
        id: '229292', 
        firstName: 'Daryl', 
        lastName: 'Duckmanton', 
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        room: 'A101'  
      },
      { 
        id: '22922444', 
        firstName: 'Sandy', 
        lastName: 'Hoskin', 
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        room: 'A102' 
      }];
  }
}
