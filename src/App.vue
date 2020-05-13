<template>
  <div id="app">
    <div id="nav">
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>
    </div>

    <a class="nav-link" href @click.prevent="logOut">LogOut</a>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: rgb(208, 250, 214);
}

#nav {
  padding: 20px;
  background-color: black;
}

#nav a {
  color: rgb(208, 250, 214);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
