import { useDeletePatientMutation, GetPatientsDocument, GetPatientsQuery } from '../generated/graphql';

// interface SelectPatientsResult {
//     loading: boolean;
//     patients: Patient[];
// }

export default function useDeletePatient() {
    const [ deleteTodo ] = useDeletePatientMutation({ 
        update: (client, { data }) => { 
            const oldCache = client.readQuery<GetPatientsQuery>({ query: GetPatientsDocument });

            if (oldCache?.patients) {
                const index = oldCache.patients.findIndex(p => p.id === data?.deletePatient?.id);
                oldCache.patients.splice(index, 1);

                client.writeQuery({ query: GetPatientsDocument, data: { patients: oldCache.patients } });
            }
        }
    });

    return [ deleteTodo ];
}