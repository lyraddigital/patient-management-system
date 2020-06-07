import gql from 'graphql-tag'

export const DeletePatientMutation = gql`
    mutation DeletePatient($id: String!) {
        deletePatient(id: $id) {
            id
            firstName
            lastName
            gender
            room
        }
    }
`;