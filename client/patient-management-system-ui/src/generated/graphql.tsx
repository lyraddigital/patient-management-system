import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Patient = {
  __typename?: 'Patient';
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: Scalars['Float'];
  room: Scalars['String'];
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['String'];
  roomNumber: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  patients: Array<Patient>;
  rooms: Array<Room>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deletePatient: Patient;
};


export type MutationDeletePatientArgs = {
  id: Scalars['String'];
};

export type DeletePatientMutationVariables = {
  id: Scalars['String'];
};


export type DeletePatientMutation = (
  { __typename?: 'Mutation' }
  & { deletePatient: (
    { __typename?: 'Patient' }
    & Pick<Patient, 'id' | 'firstName' | 'lastName' | 'gender' | 'room'>
  ) }
);

export type GetPatientsQueryVariables = {};


export type GetPatientsQuery = (
  { __typename?: 'Query' }
  & { patients: Array<(
    { __typename?: 'Patient' }
    & Pick<Patient, 'id' | 'firstName' | 'lastName' | 'gender' | 'room'>
  )> }
);

export type GetRoomsQueryVariables = {};


export type GetRoomsQuery = (
  { __typename?: 'Query' }
  & { rooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, 'id' | 'roomNumber'>
  )> }
);


export const DeletePatientDocument = gql`
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

/**
 * __useDeletePatientMutation__
 *
 * To run a mutation, you first call `useDeletePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePatientMutation, { data, loading, error }] = useDeletePatientMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePatientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePatientMutation, DeletePatientMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePatientMutation, DeletePatientMutationVariables>(DeletePatientDocument, baseOptions);
      }
export type DeletePatientMutationHookResult = ReturnType<typeof useDeletePatientMutation>;
export type DeletePatientMutationResult = ApolloReactCommon.MutationResult<DeletePatientMutation>;
export type DeletePatientMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePatientMutation, DeletePatientMutationVariables>;
export const GetPatientsDocument = gql`
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

/**
 * __useGetPatientsQuery__
 *
 * To run a query within a React component, call `useGetPatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPatientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPatientsQuery, GetPatientsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPatientsQuery, GetPatientsQueryVariables>(GetPatientsDocument, baseOptions);
      }
export function useGetPatientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPatientsQuery, GetPatientsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPatientsQuery, GetPatientsQueryVariables>(GetPatientsDocument, baseOptions);
        }
export type GetPatientsQueryHookResult = ReturnType<typeof useGetPatientsQuery>;
export type GetPatientsLazyQueryHookResult = ReturnType<typeof useGetPatientsLazyQuery>;
export type GetPatientsQueryResult = ApolloReactCommon.QueryResult<GetPatientsQuery, GetPatientsQueryVariables>;
export const GetRoomsDocument = gql`
    query GetRooms {
  rooms {
    id
    roomNumber
  }
}
    `;

/**
 * __useGetRoomsQuery__
 *
 * To run a query within a React component, call `useGetRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRoomsQuery, GetRoomsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRoomsQuery, GetRoomsQueryVariables>(GetRoomsDocument, baseOptions);
      }
export function useGetRoomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoomsQuery, GetRoomsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRoomsQuery, GetRoomsQueryVariables>(GetRoomsDocument, baseOptions);
        }
export type GetRoomsQueryHookResult = ReturnType<typeof useGetRoomsQuery>;
export type GetRoomsLazyQueryHookResult = ReturnType<typeof useGetRoomsLazyQuery>;
export type GetRoomsQueryResult = ApolloReactCommon.QueryResult<GetRoomsQuery, GetRoomsQueryVariables>;