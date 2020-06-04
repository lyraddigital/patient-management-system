import { all } from 'redux-saga/effects';

import { watchGetPatientsAsync } from './patients';

export default function* rootSaga() {
    yield all([
        watchGetPatientsAsync()
    ]);
}