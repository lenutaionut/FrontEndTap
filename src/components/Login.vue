<template id="login-template">
  <form class="login-form" @submit.prevent="handleLogin">
    <h2>Login</h2>
    <div style="margin-top:45px" class="form-group">
      <input
        v-model="user.email"
        v-validate="'required'"
        type="email"
        class="form-control"
        id="email"
        name="email"
        placeholder="E-mail address"
      />
      <div v-if="errors.has('email')" class="alert alert-danger" role="alert">Email is required!</div>
    </div>
    <div class="form-group">
      <input
        v-model="user.password"
        v-validate="'required'"
        type="password"
        class="form-control"
        id="password"
        name="password"
        placeholder="Password"
      />
      <div
        v-if="errors.has('password')"
        class="alert alert-danger"
        role="alert"
      >Password is required!</div>
    </div>
    <p>
      Create account!
      <router-link to="/register">Sign Up</router-link>
    </p>
    <button type="submit" class="btn btn-primary" id="btn">Login</button>
    <div class="form-group">
      <div v-if="message" class="alert alert-danger" role="alert">{{ message }}</div>
    </div>
  </form>
</template>

<script>
import User from '../models/user'

export default {
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false
          return
        }

        if (this.user.email && this.user.password) {
          this.$store.dispatch('login', this.user).then(
            () => {
              this.$router.push('/profile')
            },
            error => {
              this.loading = false
              this.message =
                'Incorrect email or password!' ||
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            }
          )
        }
      })
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
  color: mediumblue;
}

p {
  color: black;
  text-align: left;
}

#btn {
  width: 30%;
}

.login-form {
  margin: 70px auto auto auto;
  width: 30%;
  padding: 10px;
}
</style>
