<template id="register-template">
  <form class="register-form">
    <h2>Sign Up</h2>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input
        required
        type="text"
        class="form-control"
        id="firstname"
        placeholder="First Name"
      />
    </div>
    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input
        required
        type="text"
        class="form-control"
        id="lastname"
        placeholder="Last Name"
      />
    </div>
    <div class="form-group">
      <label for="email">E-mail address</label>
      <input
        required
        type="email"
        class="form-control"
        id="email"
        placeholder="E-mail address"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        required
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
      />
    </div>
    <div class="from-group">
      <label for="checkPassword">Confirm password</label>
      <input
        required
        type="password"
        id="checkPassword"
        class="form-control"
        placeholder="Confirm password"
      />
    </div>
    <button type="submit" class="btn btn-primary" id="btn">Register</button>
  </form>
</template>

<style>
h2 {
  text-align: center;
  color: mediumblue;
}

#btn {
  margin-top: 30px;
}
.register-form {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
