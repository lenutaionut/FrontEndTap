<template id="signinTemplate">
  <form ref="form" action class="signin-form">
    <h2>Log in</h2>
    <div class="set-input-margins">
      <div class="form-group">
        <label for="email">Email:</label>
        <input placeholder="email adress" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input placeholder="password" />
      </div>
    </div>
    <button type="submit">Sign in</button>
  </form>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

body {
  padding: 0;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  background: #e0e0e0;
}

button {
  all: unset;
  display: inline-block;
  padding: 1em;
  letter-spacing: 0.05em;
  font-size: 14px;
  border-color: black;
  border: 1px solid;
  border-radius: 10px;
  color: black;

  transition: 250ms;
  margin: 3em 0.2em 0 0;
  opacity: 0.4;
}

button:hover {
  opacity: 1;
}

.signin-form {
  margin: 2em 0;
  padding: 1em;
}

.set-input-margins {
  margin: 0 25em 0 10em;
}

.form-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

label {
  flex: 1;
  text-align: right;
  margin-right: 2em;
}

input {
  font-size: inherit;
  border: none;
  background: whitesmoke;
  font-family: inherit;
  padding: 0.4em;
  flex: 1.5;
}

input.invalid {
  border: 1px solid tomato;
}
</style>