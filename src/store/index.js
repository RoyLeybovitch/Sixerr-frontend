import { createStore } from 'vuex'
import gigStore from './modules/gig-store'
import userStore from './modules/user-store'
import reviewStore from './modules/review-store'
import orderStore from './modules/order-store'

export const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        gigStore,
        userStore,
        reviewStore,
        orderStore,
    },
})

// export default store
