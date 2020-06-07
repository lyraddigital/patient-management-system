import { useDeletePatientMutation, GetPatientsDocument, GetPatientsQuery } from '../generated/graphql';

export default function useDeletePatient(): (id: string) => Promise<any> {
    const [ deleteTodo ] = useDeletePatientMutation({ 
        update: (client, { data }) => { 
            const previousPatientsEntry = client.readQuery<GetPatientsQuery>({ query: GetPatientsDocument });

            if (previousPatientsEntry?.patients) {
                const index = previousPatientsEntry.patients.findIndex(p => p.id === data?.deletePatient?.id);
                previousPatientsEntry.patients.splice(index, 1);
                const newPatientsEntry = { patients: previousPatientsEntry.patients };

                client.writeQuery({ query: GetPatientsDocument, data: newPatientsEntry });
            }
        }
    });

    return (id: string) => deleteTodo({ variables: { id } });
}