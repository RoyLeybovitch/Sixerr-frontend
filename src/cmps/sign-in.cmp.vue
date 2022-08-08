<template>
  <section class="login section">
    <div class="login-container">
      <h4>Sign In to Sixerr</h4>
      <form @submit.prevent="login" class="login-details">
        <input
          type="text"
          ref="username"
          v-model="cred.username"
          placeholder="Email / Username"
        />
        <input v-model="cred.password" type="password" placeholder="Password" />
        <button>Continue</button>
      </form>
      <div class="login-footer flex justify-center align-center">
        <p>Not a member yet? &nbsp</p>
        <a @click="Join">Join now</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "login-page",
  data() {
    return {
      cred: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch({ type: "login", cred: this.cred });
        // socketService.emit('set-user-socket', this.$store.getters.getUser._id)
       this.$emit("closeLogin");
        // this.$router.push("/");
      } catch (error) {}
    },
  },
  mounted() {
    this.$refs.username.focus();
  },
};
</script>

<style></style>
