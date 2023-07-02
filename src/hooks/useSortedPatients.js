import { ref, computed } from "vue";

export default function useSortedPatients(patients) {
    const selectedSort = ref("");

    const sortedPatients = computed(() => {
        return [...patients.value].sort((patient1, patient2) =>
            patient1[selectedSort.value]?.localeCompare(
                patient2[selectedSort.value]
            )
        );
    });

    return {
        selectedSort,
        sortedPatients,
    };
}
