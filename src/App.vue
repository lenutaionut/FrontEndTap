<template>
  <div :style="myStyle" id="app">
    <div id="nav">
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      myStyle: {
        backgroundColor: '#f0f1f0'
      }
    }
  }
}
</script>

<style>
#app {
  text-align: right;
  color: rgb(208, 250, 214);
  min-height: 100vh;
  padding-bottom: 100px;
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
