import { createRouter, createWebHistory } from "vue-router";

import PatientsPage from "../views/PatientsPage.vue";
import Main from "../views/Main.vue";
import PatientPage from "../views/PatientPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Main,
        },

        {
            path: "/patients/:id",
            component: PatientPage,
        },

        {
            path: "/patients",
            component: PatientsPage,
        },
    ],
});

export default router;
