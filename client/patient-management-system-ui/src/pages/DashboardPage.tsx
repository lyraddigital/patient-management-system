import { History } from 'history';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Layout from '../components/shared/Layout';
import Loader from '../components/shared/Loader';
import ConfirmDialog from '../components/shared/ConfirmDialog';
import AddButton from '../components/shared/AddButton';
import Patients from '../components/patients/Patients';
import Patient from '../models/Patient';
import useSelectPatients from '../hooks/useSelectPatients';
import useDeletePatient from '../hooks/useDeletePatient';

interface DashboardProps {
    history: History;
}

const DashboardPage = (props: DashboardProps) => {
    const [ patientToDelete, setPatientToDelete ] = useState<Patient>();
    const { patients, loading, error } = useSelectPatients();
    const deleteTodo = useDeletePatient();

    const onPatientSelect = (patient: Patient) => {
        props.history.push(`/patients/${patient.id}`);
    };

    const onPatientUpdating = (patient: Patient) => {
        props.history.push(`/patients/${patient.id}/edit`);
    };

    const onPatientDeleting = (patient: Patient) => {
        setPatientToDelete(patient);
    };

    const closeDeleteDialog = () => {
        setPatientToDelete(undefined);
    };

    const deletePatient = async () => {
        if (patientToDelete) {
            await deleteTodo(patientToDelete.id.toString());
        }

        setPatientToDelete(undefined);
    };

    const showNewPatientPage = () => {
        props.history.push(`/patients/new`);
    };

    return (
        <Layout pageTitle="Dashboard">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ flex: '1 0 0'}}>Patients</h3>
                <AddButton onClick={() => showNewPatientPage()} />
            </div>
            <Patients 
                patients={patients}
                onPatientSelected={onPatientSelect}
                onPatientUpdating={onPatientUpdating}
                onPatientDeleting={onPatientDeleting}
            />
            <Loader title="Loading your patients" loading={loading} />
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={!!error} autoHideDuration={6000}>
                <Alert variant="filled" severity="error">Error loading patients. Try again later.</Alert>
            </Snackbar>
            <ConfirmDialog 
                title="Delete patient?"
                message={`Are you sure you want to delete patient ${patientToDelete?.fullName}?`}
                open={!!patientToDelete}
                onClose={closeDeleteDialog}
                onConfirmed={deletePatient} />
        </Layout>
    );
}

export default withRouter(DashboardPage);
