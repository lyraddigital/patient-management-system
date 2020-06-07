import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';

import { Patient, Gender } from 'src/patients/models/patient';

const details: Array<Patient> = [
  { 
    id: '229292', 
    firstName: 'Daryl', 
    lastName: 'Duckmanton',
    gender: Gender.Male,
    room: 'A101'  
  },
  { 
    id: '22922444', 
    firstName: 'Sandy', 
    lastName: 'Hoskins',
    gender: Gender.Female,
    room: 'A102' 
  },
  { 
    id: '22929211133', 
    firstName: 'Daryl', 
    lastName: 'Duckmanton',
    gender: Gender.Male,
    room: 'A101'  
  },
  { 
    id: '229224222', 
    firstName: 'Sandy', 
    lastName: 'Hoskins',
    gender: Gender.Female,
    room: 'A102' 
  }
];

@Resolver()
export class PatientsResolver {
  @Query(_ => [Patient!]!)
  patients(): Array<Patient> {
    return details;
  }

  @Mutation(_ => Patient) 
  deletePatient(@Args('id') id: string) {
    const patientIndex = details.findIndex(p => p.id === id);
    
    if (patientIndex >= 0) {
      return details.splice(patientIndex, 1)[0]
    }

    return undefined;
  }
}
