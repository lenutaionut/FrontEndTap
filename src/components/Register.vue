<template id="register-template">
  <form class="register-form">
    <h2>Sign Up</h2>
    <div style="margin-top:45px" class="form-group">
      <input
        required
        type="text"
        class="form-control"
        id="firstname"
        placeholder="First Name"
      />
    </div>
    <div class="form-group">
      <input
        required
        type="text"
        class="form-control"
        id="lastname"
        placeholder="Last Name"
      />
    </div>
    <div class="form-group">
      <input
        required
        type="email"
        class="form-control"
        id="email"
        placeholder="E-mail address"
      />
    </div>
    <div class="form-group">
      <input
        required
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
      />
    </div>
    <div class="from-group">
      <input
        required
        type="password"
        id="checkPassword"
        class="form-control"
        placeholder="Confirm password"
      />
    </div>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
    <button type="submit" class="btn btn-primary" id="btn">Register</button>
  </form>
</template>

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

.register-form {
  margin: 70px auto auto auto;
  width: 30%;
  padding: 10px;
}
</style>
