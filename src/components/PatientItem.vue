<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: {
    MyButton
  },
  props: {
    patient: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="patient">
    <div>
      <div><strong>ФИО: </strong>{{ patient.secondName }} {{ patient.name }} {{ patient.patronymic }}</div>
      <div><strong>Дата рождения: </strong>{{ patient.dateOfBirth }}</div>
    </div>

    <div class="patient__btns">
      <my-button @click="$router.push(`/patient/${patient.id}`)">Открыть</my-button>
      <my-button @click="$emit('remove', patient)">Удалить</my-button>
    </div>
  </div>
</template>

<style scoped>
  .patient {
      padding: 15px;
      border:  2px solid teal;
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .patient__btns{
      display: flex;
  }
</style>
