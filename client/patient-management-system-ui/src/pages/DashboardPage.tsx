import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Layout from '../components/shared/Layout';
import Loader from '../components/shared/Loader';
import ConfirmDialog from '../components/shared/ConfirmDialog';
import AddButton from '../components/shared/AddButton';
import Patients from '../components/patients/Patients';
import Patient from '../models/Patient';
import useSelectPatients from '../hooks/useSelectPatients';
import useDeletePatient from '../hooks/useDeletePatient';

interface DashboardProps {
    history: any;
}

const DashboardPage = (props: DashboardProps) => {
    const [ patientToDelete, setPatientToDelete ] = useState<Patient>();
    const { patients, loading } = useSelectPatients();
    const [ deleteTodo ] = useDeletePatient();

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
            await deleteTodo({ variables: { id: patientToDelete.id.toString() } });
        }

        setPatientToDelete(undefined);
    };

    const showNewPatientPage = () => {
        props.history.push(`/patients/new`);
    };

    return (
        <Layout pageTitle="Dashboard">
            <Patients 
                patients={patients}
                onPatientSelected={onPatientSelect}
                onPatientUpdating={onPatientUpdating}
                onPatientDeleting={onPatientDeleting}
            />
            <Loader title="Loading your patients" loading={loading} />
            <ConfirmDialog 
                title="Delete patient?"
                message={`Are you sure you want to delete patient ${patientToDelete?.fullName}?`}
                open={!!patientToDelete}
                onClose={closeDeleteDialog}
                onConfirmed={deletePatient} />
            <AddButton onClick={() => showNewPatientPage()} />
        </Layout>
    );
}

export default withRouter(DashboardPage);
