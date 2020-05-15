<template id="register-template">
  <div class="container">
    <form class="register-form" @submit.prevent="register">
      <div v-if="!successful">
        <h2>Sign Up</h2>
        <div style="margin-top:45px" class="form-group">
          <input
            v-model="user.name"
            v-validate="'required|min:3|max:20'"
            type="text"
            class="form-control"
            placeholder="First Name"
            name="name"
          />
          <div
            v-if="submitted && errors.has('name')"
            class="alert alert-danger"
            id="alert"
          >{{ errors.first('name') }}</div>
        </div>
        <div class="form-group">
          <input
            v-model="user.surname"
            v-validate="'required|min:3|max:20'"
            type="text"
            class="form-control"
            placeholder="Last Name"
            name="surname"
          />
          <div
            v-if="submitted && errors.has('surname')"
            class="alert alert-danger"
            id="alert"
          >{{ errors.first('surname') }}</div>
        </div>
        <div class="form-group">
          <input
            v-model="user.email"
            v-validate="'required|email|max:50'"
            type="email"
            class="form-control"
            placeholder="E-mail address"
            name="email"
          />
          <div
            v-if="submitted && errors.has('email')"
            class="alert alert-danger"
            id="alert"
          >{{ errors.first('email') }}</div>
        </div>
        <div class="form-group">
          <input
            v-model="user.password"
            v-validate="'required|min:6|max:40'"
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
          />
          <div
            v-if="submitted && errors.has('password')"
            class="alert alert-danger"
            id="alert"
          >{{ errors.first('password') }}</div>
        </div>
        <p>
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
        <button type="submit" class="btn btn-primary" id="btn">Register</button>
      </div>
    </form>
    <div
      v-if="message"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
      id="alert"
    >{{ message }}</div>
  </div>
</template>

<script>
import User from '../models/user'

export default {
  data() {
    return {
      user: new User('', '', '', ''),
      submitted: false,
      successful: false,
      message: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },

  mounted() {
    if (this.loggedIn) {
      this.$router.push('/weather')
    }
  },

  methods: {
    register() {
      this.message = ''
      this.submitted = true
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('register', this.user).then(
            data => {
              this.message = data.message
              this.successful = true
              this.$router.push('/login')
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
              this.successful = false
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
  color: rgb(21, 66, 64);
}

p {
  color: black;
  text-align: left;
}

#btn {
  width: 30%;
  margin-bottom: 10px;
}

#alert {
  font-size: 14px;
  text-align: center;
}

.register-form {
  margin: 70px auto auto auto;
  width: 40%;
  padding: 10px;
}
</style>
