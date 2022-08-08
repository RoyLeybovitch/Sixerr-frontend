<template>
    <div class="sign-up-container">
        <h3>Join Sixerr</h3>

        <form @submit.prevent="signup" class="signup-details">
            <input ref="fullname" v-model="cred.fullname" type="text" placeholder="Fullname" />
            <input v-model="cred.username" type="text" placeholder="Username" />
            <input v-model="cred.password" type="text" placeholder="Password" />

            <button>Continue</button>
            <h4>By joining I agree to receive emails from Sixerr.</h4>
            <div class="sign-up-footer flex justify-center align-center">
                <p>Already a member? &nbsp</p>
                <a @click="Join">Sign in</a>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'signup-page',
    data() {
        return {
            cred: {
                fullname: '',
                username: '',
                password: '',
            },
        }
    },
    methods: {
        async signup() {
            await this.$store.dispatch({ type: 'signup', cred: this.cred })
            this.$router.push('/')
        },
    },
    mounted() {
        // this.$refs.fullname.focus()
        console.log('checking')
    },
}
</script>

<style></style>
