import React from 'react';
import { useForm } from "react-hook-form";

import Layout from '../components/shared/Layout';

const NewPatientPage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <Layout pageTitle="New Patient">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="firstName" defaultValue="test" ref={register({ required: true })} />
                {errors.firstName && <span>First name is required</span>}
            
                <input name="lastName" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.lastName && <span>Last name is required</span>}
            
                <input type="submit" />
            </form>
        </Layout>
    );
}

export default NewPatientPage;
