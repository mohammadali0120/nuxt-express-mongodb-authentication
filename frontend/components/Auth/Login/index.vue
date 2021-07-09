<template>
  <div>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="loginData.email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="loginData.password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: "test@test.com",
        password: "12345678"
      }
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData
        });
        this.$router.push("/");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
