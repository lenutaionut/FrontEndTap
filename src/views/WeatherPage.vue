<template>
  <div class="email">
    <a class="btn" href @click.prevent="logOut">
      Log Out
      <span>{{ currentUser.email }}</span>
    </a>

    <Weather />
  </div>
</template>

<script>
import Weather from '@/components/Weather.vue'

export default {
  name: 'WeatherPage',
  components: {
    Weather
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
span {
  color: rgb(28, 87, 84);
  font-weight: normal;
}

.email {
  padding: 10px 10px 0px 0px;
}

a {
  color: rgb(92, 153, 233);
  font-weight: bold;
}

a:hover {
  background-color: rgb(203, 213, 235);
}
</style>
