<script setup>
import { RouterLink } from 'vue-router';
</script>

<template >
    <div class="navbar">
        <div @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/patients">Пациенты</RouterLink>
        </div>

    </div>
</template>

<style scoped>
    .navbar{
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btns {
     margin-left: auto;
    }

    a {
        align-self: flex-end;
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
        text-decoration: none;
    }
</style>