<template>
    <main class="main-content">
        <section v-if="gig" class="check-out-page main-layout">
            <div class="left-side-container">
                <div class="main-content-container">
                    <div class="main">
                        <div class="price">${{ gig.price }}</div>
                        {{ gig.title }}
                    </div>
                    <div class="img-container">
                        <img :src="gig.images[0].image" alt="" />
                    </div>
                </div>
                <div class="details">
                    <h2>Order Details</h2>
                    <p>{{ gig.description }}</p>
                    <div class="details">
                        <div class="v-image">
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path
                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                ></path>
                            </svg>
                            High quality product guarenteed
                        </div>
                        <div class="v-image">
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path
                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                ></path>
                            </svg>
                            Fast delivery time guarenteed
                        </div>
                        <div class="v-image">
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path
                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                ></path>
                            </svg>
                            Customer support provided
                        </div>
                        <div class="v-image">
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path
                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                ></path>
                            </svg>
                            Fast delivery time guarenteed
                        </div>
                        <div class="v-image">
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path
                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                ></path>
                            </svg>
                            High resolution
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-side-container">
                <div class="order-modal sticky">
                    <h3>Price summary</h3>
                    <ul class="clean-list">
                        <!-- <li>
                            Subtotal
                            <span>${{ gig.price }}</span>
                        </li> -->
                        <!-- <li>
                            Service fee
                            <span>$5.00</span>
                        </li> -->
                        <li class="bold">
                            Total
                            <span> ${{ gig.price }} </span>
                        </li>
                        <li>
                            Estimated delivery time
                            <div class="li-inner-container">
                                <span>3 </span>
                                <span>days</span>
                            </div>
                        </li>
                    </ul>

                    <!-- <div class="details">
                        <h2>Order Details</h2>
                        <p>{{ gig.description }}</p>
                        <div class="details">
                            <div class="v-image">
                                <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                    ></path>
                                </svg>
                                High quality product guarenteed
                            </div>
                            <div class="v-image">
                                <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                    ></path>
                                </svg>
                                Fast delivery time guarenteed
                            </div>
                            <div class="v-image">
                                <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                    ></path>
                                </svg>
                                Fast delivery time guarenteed
                            </div>
                            <div class="v-image">
                                <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                    ></path>
                                </svg>
                                Fast delivery time guarenteed
                            </div>
                            <div class="v-image">
                                <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                    ></path>
                                </svg>
                                High resolution
                            </div>
                        </div> -->
                    <button @click="purchase" class="btn">Purchase</button>
                </div>
            </div>
            <!-- <div class="right-side-container">
                <div class="order-modal sticky">
                    <h3>Price summary</h3>
                    <ul class="clean-list">
                        <li>
                            Subtotal
                            <span>${{ gig.price }}</span>
                        </li>
                        <li>
                            Service fee
                            <span>$5.00</span>
                        </li>
                        <li class="bold">
                            Total
                            <span> ${{ gig.price }} </span>
                        </li>
                        <li>
                            Estimated delivery time
                            <div class="li-inner-container">
                                <span>3 </span>
                                <span>days</span>
                            </div>
                        </li>
                    </ul> -->
            <!-- <button v-on:click="loadGig" class="btn">Purchase</button> -->

            <!-- </div> -->
            <!-- </div>
            </div> -->
        </section>
    </main>
</template>

<script>
import { gigService } from '../services/gig-service'
import { orderService } from '../services/order.service'
export default {
    data() {
        return {
            gig: null,
            images: null,
            order: null,
        }
    },

    async created() {
        try {
            var { gigid } = this.$route.params
            const res = await gigService.getById(gigid)
            this.gig = res
            this.images = res.images
            this.order = await orderService.getEmptyOrder()
            console.log(this.gig)
        } catch (error) {}
    },
    computed: {},
    methods: {
        loadGig() {
            this.$router.push('/user-profile/' + this.gig._id)
        },
        user() {
            return this.$store.getters.getUser
        },
        async purchase() {
            this.createOrder()
            try {
                console.log(this.order)
                // this.order = await orderService.getEmptyOrder()

                //TODO send order and get order and send order id.

                this.$store.dispatch({ type: 'addOrder', order: this.order })
                this.$router.push('/backoffice')
            } catch (error) {
                console.log('Error' + error)
            }
        },
        createOrder() {
            this.order.createdAt = Date.now()
            this.order.timeToDeliver = this.gig.daysToMake
            this.order.buyer = this.user()

            this.order.seller = {
                _id: this.gig.owner._id,
                fullname: this.gig.owner.fullname,
                imgUrl: this.gig.owner.imgUrl,
            }

            this.order.gig = {
                _id: this.gig._id,
                images: this.gig.images,
                title: this.gig.title,
                category: this.gig.category,
                price: this.gig.price,
                description: this.gig.description,
            }
        },
    },
}
</script>
