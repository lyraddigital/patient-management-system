import { PATIENTS_LOADED_ACTION_NAME, PatientsAction, PatientsLoadedAction } from '../actions/patients';
import { Patient } from '../models/patient';

interface PatientsState {
    patients: Array<Patient>;
    hasLoadedPatients: boolean;
}

const initialState: PatientsState = {
    patients: [],
    hasLoadedPatients: false
};

export const patientsReducer = (state = initialState, action: PatientsAction) => {
    switch (action.type) {
        case PATIENTS_LOADED_ACTION_NAME: {
            const newState = { ...state };
            newState.hasLoadedPatients = true;
            newState.patients = (action as PatientsLoadedAction).patients;

            return newState;
        }
      default:
        return state;
    }
}