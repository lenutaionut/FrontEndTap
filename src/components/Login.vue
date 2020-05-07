<template id="login-template">
  <form class="login-form">
    <h2>Login</h2>
    <div style="margin-top:45px" class="form-group">
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
    <p>Create account! <router-link to="/register">Sign Up</router-link></p>
    <button type="submit" class="btn btn-primary" id="btn">Login</button>
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

.login-form {
  margin: 70px auto auto auto;
  width: 30%;
  padding: 10px;
}
</style>
