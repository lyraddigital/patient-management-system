import React from 'react';
import { useParams } from "react-router-dom";

import Layout from '../components/shared/Layout';

const ViewPatientPage = () => {
    const { id } = useParams();

    return (
        <Layout pageTitle="View Patient">
            <p>Hello {id}</p>
        </Layout>
    );
}

export default ViewPatientPage;
