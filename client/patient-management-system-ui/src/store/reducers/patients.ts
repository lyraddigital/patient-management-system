import { Action } from 'redux';

const patientRequestedActionName = 'PATIENTS_REQUESTED';
const patientLoadedActionName = 'PATIENTS_LOADED';

interface Patient {
    id: string, 
    firstName: string, 
    lastName: string, 
    imageSrc: string,
    room: string
}

interface PatientsState {
    patients: Array<Patient>;
}

class PatientsRequestedAction implements Action {
    type = patientRequestedActionName;
};

class PatientsLoadedAction implements Action {
    type = patientLoadedActionName;
    constructor(public readonly patients: Array<Patient>) { }
};

export const patientsRequested = (): PatientsRequestedAction => (new PatientsRequestedAction());
export const patientsLoaded = (patients: Array<Patient>) => (new PatientsLoadedAction(patients));

type PatientsAction = PatientsRequestedAction | PatientsLoadedAction;

const initialState: PatientsState = {
    patients: [
        {
            id: '133939484', 
            firstName: 'Daryl', 
            lastName: 'Duckmanton', 
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            room: 'A101'
        },
        {
            id: '334324324', 
            firstName: 'Sandy', 
            lastName: 'Hoskin', 
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            room: 'A102'
        }
    ]
};

export const patientsReducer = (state = initialState, action: PatientsAction) => {
    switch (action.type) {
        case patientRequestedActionName: {
            return state;
        }
        case patientLoadedActionName: {
            return state;
        }
      default:
        return state;
    }
}