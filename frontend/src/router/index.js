import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'
import Registered from '@/components/Registered'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/registered',
            name: 'Registered',
            component: Registered,
        },
    ],
})
