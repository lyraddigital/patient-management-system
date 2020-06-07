import gql from 'graphql-tag'

export const GetPatientsQuery = gql`
    query GetPatients {
        patients {
            id
            firstName
            lastName
            gender
            room
        }
    }
`;