import React from 'react';
import { List } from '@material-ui/core';

import Patient from '../../../models/Patient';
import PatientListItem from './PatientListItem';

interface PatientListProps {
    patients: Patient[];
    onPatientSelected: (patient: Patient) => void;
}

const PatientList = (props: PatientListProps) => {
    const patients = props.patients.map((p: Patient) =>
        <PatientListItem 
            key={p.id}
            patient={p}
            patientClicked={() => props.onPatientSelected(p)} />
    );

    return (
        <List>
            {patients}
        </List>
    );
}

export default PatientList;
