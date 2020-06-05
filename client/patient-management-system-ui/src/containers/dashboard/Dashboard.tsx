import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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
            <Box paddingTop={2}>
                <Container>
                    <h2>Dashboard</h2>
                    <hr />
                    <PatientList 
                        patients={patients}
                        onPatientSelected={onPatientSelect}
                        onPatientUpdating={onPatientUpdating}
                        onPatientDeleting={onPatientDeleting}
                    />
                </Container>
            </Box>
        </div>
    );
}

export default Dashboard;
