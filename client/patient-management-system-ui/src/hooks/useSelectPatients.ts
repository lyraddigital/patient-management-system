import { useGetPatientsQuery } from '../generated/graphql';
import Patient, { Gender } from "../models/Patient";

interface SelectPatientsResult {
    loading: boolean;
    patients: Patient[];
}

export default function useSelectPatients(): SelectPatientsResult {
    const { data, loading } = useGetPatientsQuery();
    const patients: Array<Patient> = [];

    if (!loading && data && data.patients) {
        data.patients.forEach(p => {
            patients.push(new Patient(
                parseInt(p.id),
                p.firstName,
                p.lastName,
                p.gender === 0 ? Gender.Male : Gender.Female,
                p.room
            ));
        });
    }

    return { loading, patients };
}