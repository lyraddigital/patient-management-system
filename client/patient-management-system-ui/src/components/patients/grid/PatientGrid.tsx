import React from 'react';
import { Grid } from '@material-ui/core';

import Patient from '../../../models/Patient';
import PatientGridItem from './PatientGridItem';

interface PatientGridProps {
    patients: Patient[];
    onPatientSelected: (patient: Patient) => void;
    onPatientUpdating: (patient: Patient) => void;
    onPatientDeleting: (patient: Patient) => void;
}

const PatientGrid = (props: PatientGridProps) => {
    const patients = props.patients.map((p:Patient) => 
        <PatientGridItem
            key={p.id}
            patient={p}
            patientClicked={() => props.onPatientSelected(p)}
            updateClicked={() => props.onPatientUpdating(p)}
            deleteClicked={() => props.onPatientDeleting(p)} />
    );

    return (
        <Grid container spacing={3}>
            {patients}
        </Grid>
    );
}

export default PatientGrid;
