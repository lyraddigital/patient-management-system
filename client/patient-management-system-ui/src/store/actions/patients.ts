import { Action } from 'redux';
import { Patient } from '../models/patient';

export const PATIENTS_REQUESTED_ACTION_NAME = 'PATIENTS_REQUESTED';
export const PATIENTS_LOADED_ACTION_NAME = 'PATIENTS_LOADED';

export class PatientsRequestedAction implements Action {
    type = PATIENTS_REQUESTED_ACTION_NAME;
};

export class PatientsLoadedAction implements Action {
    type = PATIENTS_LOADED_ACTION_NAME;
    constructor(public readonly patients: Array<Patient>) { }
};

export const patientsRequested = (): PatientsRequestedAction => ({ type: PATIENTS_REQUESTED_ACTION_NAME });
export const patientsLoaded = (patients: Array<Patient>) => ({ type: PATIENTS_LOADED_ACTION_NAME });

export type PatientsAction = PatientsRequestedAction | PatientsLoadedAction;