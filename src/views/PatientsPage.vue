<script setup>
import { ref, computed, reactive } from 'vue';

import useSortedPatients from "../hooks/useSortedPatients.js";

import PatientList from '../components/PatientList.vue'
import PatientForm from '../components/PatientForm.vue'
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

    const patients = ref([
        {
            id: 1,
            name: "Елена",
            secondName: "Абоимова",
            patronymic: "Валентиновна",
            dateOfBirth: "15.06.2017",
            snils: "29200035931",
            address: "Россия, г. Москва, Социалистическая ул., д. 5 кв.181",
            registrationAddress:
                "Россия, г. Дзержинск, Весенняя ул., д. 11 кв.127",
            oms: "1133320394417960",
        },
        {
            id: 2,
            name: "Ника",
            secondName: "Мацовкина",
            patronymic: "Семеновна",
            dateOfBirth: "12.03.1987",
            snils: "30314318812",
            addres: "Россия, г. Улан-Удэ, 3 Марта ул., д. 16 кв.140",
            registrationAddress:
                "Россия, г. Серпухов, Луговой пер., д. 22 кв.207",
            oms: "1620231541715318",
        },
        {
            id: 3,
            name: "Екатерина",
            secondName: "Ворожцова",
            patronymic: "Александровна",
            dateOfBirth: "12.09.1993",
            snils: "24287045876",
            addres: "Россия, г. Ярославль, Октябрьская ул., д. 11 кв.16",
            registrationAddress:
                "Россия, г. Сыктывкар, Мичурина ул., д. 8 кв.165",
            oms: "4783621629602411",
        },
        {
            id: 4,
            name: "Андрей",
            secondName: "Ядренников",
            patronymic: "Серафимович",
            dateOfBirth: "17.05.1976",
            snils: "73881979675",
            addres: "Россия, г. Томск, Сосновая ул., д. 24 кв.216",
            registrationAddress:
                "Россия, г. Томск, Сосновая ул., д. 24 кв.216",
            oms: "1851693603413867",
        },
        {
            id: 5,
            name: "Евгений",
            secondName: "Аглеев",
            patronymic: "Григорьевич",
            dateOfBirth: "15.01.1997",
            snils: "29200035931",
            addres: "Россия, г. Москва, Социалистическая ул., д. 5 кв.181",
            registrationAddress:
                "Россия, г. Дзержинск, Весенняя ул., д. 11 кв.127",
            oms: "1133320394417960",
        },
    ])
    
    let dialogVisible = ref(false);
    let selectedSort = ref('');
    const sortOptions = ref([
        {value: 'secondName', name: 'По фамилии'},
        {value: 'dateOfBirth', name: 'По дате рождения'},
    ]);
    let searchQuery = ref('');

    const createPatient = (patient) => {
        patients.value.push(patient);
        dialogVisible.value = false;
    }

    const removePatient = (patient) => {
        patients.value = patients.value.filter(p => p.id !== patient.id)
    }

    const showDialog = () => {
        dialogVisible.value = true;
    }

    
    const sortedPatients = computed(() => {
        return [...patients.value].sort((patient1, patient2) => patient1[selectedSort.value]?.localeCompare(patient2[selectedSort.value]));
    });
    const sortedAndSearchedPosts = computed(() => {
        return sortedPatients.value.filter((patient) => patient.secondName.toLowerCase().includes(searchQuery.value.toLowerCase));
    });
    console.log(sortedPatients.value);
    console.log(sortedAndSearchedPosts);
    console.log(searchQuery)


    
  // computed: {
  //   ...mapState({
  //     patients: state=> state.patient.patients,
  //     isPatientsLoading: state => state.patient.isPatientsLoading,
  //     selectedSort: state => state.patient.selectedSort,
  //     searchQuery: state => state.patient.searchQuery,
  //     page: state => state.patient.page,
  //     limit: state => state.patient.limit,
  //     totalPage: state => state.patient.totalPage,
  //     sortOptions: state => state.patient.sortOptions,
  //   }),
  //   ...mapGetters({
  //     sorted: 'patient/sortedPatients',
  //     sortedAndSearchedPatients: 'post/sortedAndSearchedPatients'
  //   })
  // }

</script>

<template>
  <main>
    <h1>Страница пациентов</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <div class="patientsPage__btns">
        <my-button
            @click="showDialog"
        >
            Добавить пользователя
        </my-button>
        <my-select
            v-model="selectedSort"
            :options="sortOptions"
        />
    </div>
    <my-dialog v-model:show="dialogVisible">
        <patient-form
            @create="createPatient"
        />
    </my-dialog>

    <patient-list
        :patients="sortedPatients"
        @remove="removePatient"

    />

    <!-- <div v-else>Загрузка...</div> -->
  </main>
</template>

<style>
    .patientsPage__btns {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }
</style>