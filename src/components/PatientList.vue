<script >
import PatientItem from './PatientItem.vue';
export default {
    components: {
        PatientItem,
    },
    props: {
        patients: {
            type: Array,
            required: true
        }
    },
    emits: ['remove']
}
</script>

<template>
     <div v-if="patients.length > 0">
        <TransitionGroup name="patients-list">
            <patient-item
            v-for="patient in patients"
            :patient="patient"
            :key="patient.id"
            @remove="$emit('remove', patient)"
        />
        </TransitionGroup>
    </div>
    <h2 v-show="patients.length === 0"
        style="color: red"  
    >
        Cписок пациентов пуст
    </h2>
</template>

<style scoped>
    .patients-list-enter-active,
    .patients-list-leave-active {
        transition: all 0.4s ease;
    }
    .patients-list-enter-from,
    .patients-list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .patients-list-move {
        transition: transform 0.4s ease;
    }
</style>