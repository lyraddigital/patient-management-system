import { call, put, takeEvery } from 'redux-saga/effects';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { PatientsRequestedAction, PATIENTS_REQUESTED_ACTION_NAME, PATIENTS_LOADED_ACTION_NAME } from '../actions/patients';

const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
});
const cache = new InMemoryCache();
const client = new ApolloClient({ link: httpLink, cache });

const patientsSaga = function*(action: PatientsRequestedAction) {
    const queryStatement = gql`
        query {
          patients {
            id
            firstName
            lastName
          	imageSrc
            room
          }
        }
    `;
    
    const result = yield call(() => client.query({ query: queryStatement }));

    if (!result.loading) {
        yield put({ 
            patients: result.data.patients, 
            type: PATIENTS_LOADED_ACTION_NAME 
        });
    }
};

export const watchGetPatientsAsync = function*() {
    yield takeEvery(PATIENTS_REQUESTED_ACTION_NAME, patientsSaga);
}