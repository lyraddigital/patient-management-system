import gql from 'graphql-tag'

export const GetPatientsQuery = gql`
    query GetRooms {
        rooms {
            id
            roomNumber
        }
    }
`;