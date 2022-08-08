import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import explorePage from '../views/explore-page.vue'
import gigPage from '../views/gig-page.vue'
import checkOutPage from '../cmps/check-out-page.vue'
import userProfile from '../views/user-profile.vue'
import signUp from '../cmps/sign-up.cmp.vue'
import signIn from '../cmps/sign-in.cmp.vue'
import backOffice from '../cmps/back-office.cmp.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homePage,
        },
        {
            path: '/explore',
            name: 'explore',
            component: explorePage,
        },
        {
            path: '/gig/:gigid',
            name: 'gig',
            component: gigPage,
        },
        {
            path: '/checkout/:gigid',
            name: 'checkout',
            component: checkOutPage,
        },
        {
            path: '/user-profile',
            name: 'user-profile',
            component: userProfile,
        },
        {
            path: '/signup',
            name: 'signup',
            component: signUp,
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: signIn,
        },
        {
            path: '/backoffice',
            name: 'back-office',
            component: backOffice,
        },
    ],
})

export default router
