<template>
  <div>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input
          type="text"
          v-model="registerData.fullname"
          class="form-control"
          id="fullname"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="registerData.email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="registerData.password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerData: {
        fullname: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async register() {
      try {
        const user = await this.$axios.$post("/api/auth/signin", {
          fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password
        });
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
