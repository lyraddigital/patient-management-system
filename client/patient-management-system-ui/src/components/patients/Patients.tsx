import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Patient from '../../models/Patient';
import PatientList from './list/PatientList';
import PatientGrid from './grid/PatientGrid';

interface PatientsProps {
    patients: Patient[];
    onPatientSelected: (patient: Patient) => void;
    onPatientUpdating: (patient: Patient) => void;
    onPatientDeleting: (patient: Patient) => void;
}

const Patients = (props: PatientsProps) => {
    const theme = useTheme();
    const matchesSmallDevices = useMediaQuery(theme.breakpoints.down('sm'));

    return matchesSmallDevices ? 
        <PatientList 
            patients={props.patients}
            onPatientSelected={props.onPatientSelected} /> : 
        <PatientGrid 
            patients={props.patients}
            onPatientSelected={props.onPatientSelected}
            onPatientUpdating={props.onPatientUpdating}
            onPatientDeleting={props.onPatientDeleting} />;
}

export default Patients;
