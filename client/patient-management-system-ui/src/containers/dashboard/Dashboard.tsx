import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PatientList from '../../components/dashboard/PatientList';

const Dashboard = () => {
    const patients = useSelector((state: any) => state.patientsReducer.patients);
    // const [patients, setPatients] = useState([
    //     { 
    //         id: '133939484', 
    //         firstName: 'Daryl', 
    //         lastName: 'Duckmanton', 
    //         imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    //         room: 'A101'
    //      }
    // ]);

    const onPatientSelect = (patient: any) => {
        console.log(`Patient ${patient.id} selected`);
    };

    const onPatientUpdating = (patient: any) => {
        console.log(`Patient ${patient.id} updating`);
    };

    const onPatientDeleting = (patient: any) => {
        console.log(`Patient ${patient.id} deleting`);
    };

    return (
        <div>
            <PatientList 
                patients={patients}
                onPatientSelected={onPatientSelect}
                onPatientUpdating={onPatientUpdating}
                onPatientDeleting={onPatientDeleting}
            />
        </div>
    );
}

export default Dashboard;
