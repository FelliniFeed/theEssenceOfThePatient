<script>
export default {
    emits: ['create'],
    data() {
        return {
            patient: {
                name:'',
                secondName: '',
                patronymic: '',
                dateOfBirth: '',
                snils: '',
                oms: '',
                addres: '',
                registrationAddress: ''
            }
        }
    },
    methods: {
        createPatient() {
            this.patient.id = Date.now();
            this.$emit('create', this.patient)
            this.patient = {
                name:'',
                secondName: '',
                patronymic: '',
                dateOfBirth: '',
                snils: '',
                oms: '',
                addres: '',
                registrationAddress: ''
            }
        }
    },
}
</script>

<template>
    <h1>Добавление пациента</h1>
    <form @submit.prevent>
        <my-input 
            v-model="patient.name" 
            type="text" 
            placeholder="Имя"
        />
        <my-input 
            v-model="patient.secondName" 
            type="text" 
            placeholder="Фамилия"
        />
        <my-input 
            v-model="patient.patronymic" 
            type="text" 
            placeholder="Отчество"
        />
        <my-input 
            v-model="patient.dateOfBirth" 
            type="text" 
            placeholder="Дата рождения"
        />
        <my-input 
            v-model="patient.snils" 
            type="text" 
            placeholder="СНИЛС"
        />
        <my-input 
            v-model="patient.oms" 
            type="text" 
            placeholder="Полис"
        />
        <my-input 
            v-model="patient.addres" 
            type="text" 
            placeholder="Адрес проживания"
        />
        <my-input 
            v-model="patient.registrationAddress" 
            type="text" 
            placeholder="Адрес прописки"
        />
        <my-button 
            class="btn" 
            @click="createPatient"
        >
            создать
        </my-button>
    </form> 
</template>

<style scoped>
form {
   display: flex;
   flex-direction: column;

}
.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>