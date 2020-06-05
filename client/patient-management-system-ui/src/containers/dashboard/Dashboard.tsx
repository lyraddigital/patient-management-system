import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { patientsRequested } from '../../store/actions/patients';
import PatientList from '../../components/dashboard/PatientList';

const Dashboard = () => {
    const dispatchToStore = useDispatch();
    const patientState = useSelector((state: any) => state.patientsState);
    const patients = patientState ? patientState.patients: [];

    useEffect(() => {
        if (!patientState || !patientState.hasLoadedPatients) {
            dispatchToStore(patientsRequested())
        }
    }, [dispatchToStore, patientState]);

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
            <AppBar position="static">
                <Toolbar></Toolbar>
            </AppBar>
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
