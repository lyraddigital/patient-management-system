import { Query, Resolver } from '@nestjs/graphql';

import { Room } from 'src/rooms/models/room';

const details: Array<Room> = [
  { 
    id: '123',
    roomNumber: 'A383'
  },
  { 
    id: '124',
    roomNumber: 'A384'
  },
  { 
    id: '125',
    roomNumber: 'A385'
  },
  { 
    id: '126',
    roomNumber: 'B386'
  }
];

@Resolver()
export class RoomsResolver {
  @Query(_ => [Room!]!)
  rooms(): Array<Room> {
    return details;
  }
}
