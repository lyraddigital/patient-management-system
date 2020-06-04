import React from 'react';

import Patient from './Patient';

const PatientList = (props: any) => {
    return props.patients.map((p:any) => 
        <Patient 
            key={p.id} 
            patient={p}
            patientClicked={(patient: any) => props.onPatientSelected(patient)}
            updateClicked={(patient: any) => props.onPatientUpdating(patient)}
            deleteClicked={(patient: any) => props.onPatientDeleting(patient)} />
    );
}

export default PatientList;
