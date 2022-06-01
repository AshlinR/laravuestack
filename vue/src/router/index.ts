import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard},
        ]
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;