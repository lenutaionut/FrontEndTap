<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title text-center">{{ wdata.city }}, {{ wdata.country }}</h2>
        <p class="card-text">
          {{ wdata.dayname }}, {{ wdata.time }},
          {{ wdata.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center" id="temp">
          {{ wdata.temperature }}&deg;C
          <img :src="wdata.icon" alt="Sunny image" width="120" />
          <img />
        </li>
        <li class="list-group-item text">
          <font-awesome-icon class="icon fa-lg" icon="temperature-high" color="cornflowerblue" />
          {{ wdata.temp_max }}&deg;C
        </li>
        <li class="list-group-item text">
          <font-awesome-icon class="icon fa-lg" icon="temperature-low" color="cornflowerblue" />
          {{ wdata.temp_min }}&deg;C
        </li>
        <li class="list-group-item text">
          <font-awesome-icon class="icon fa-lg" icon="wind" color="cornflowerblue" />
          {{ wdata.wind }} km/h
        </li>
        <li class="list-group-item text">
          <font-awesome-icon class="icon fa-lg" icon="tint" color="cornflowerblue" />
          {{ wdata.humidity }}%
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Weather from '../models/weather'

const axios = require('axios').default

export default {
  data() {
    return {
      wdata: new Weather(
        'None',
        'None',
        'None',
        'None',
        'None',
        'https://cdn.vuetifyjs.com/images/cards/sun.png',
        'None',
        'None',
        'None',
        'None',
        'None'
      )
    }
  },
  methods: {
    setDayTime(dt_in_seconds) {
      let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      let date = new Date(dt_in_seconds * 1000)
      let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
      let minutes =
        date.getMinutes() < 10
          ? '0' + date.getMinutes().toString()
          : date.getMinutes()
      let pmam = date.getHours() > 12 ? 'PM' : 'AM'
      hours = hours < 10 ? '0' + hours.toString() : hours
      this.wdata.dayname = days[date.getDay()]
      this.wdata.time = hours + ':' + minutes + ' ' + pmam
    },
    setWeatherData(response) {
      let icon = response.data.weather[0].icon
      this.setDayTime(response.data.dt)
      this.wdata.city = response.data.name
      this.wdata.country = response.data.sys.country
      this.wdata.description = response.data.weather[0].description
      this.wdata.icon = this.wdata.icon_url =
        'https://openweathermap.org/img/wn/' + icon + '@2x.png'
      this.wdata.temperature = (response.data.main.temp - 273.15).toFixed(1)
      this.wdata.temp_min = (response.data.main.temp_min - 273.15).toFixed(1)
      this.wdata.temp_max = (response.data.main.temp_max - 273.15).toFixed(1)
      this.wdata.humidity = response.data.main.humidity
      this.wdata.wind = response.data.wind.speed
    },
    async fetchWeatherData(lon, lat) {
      let API_KEY = '91b0ab3c5cc120add5f863222da4ad73'
      let api = 'https://api.openweathermap.org/data/2.5/'
      let param = 'weather?lat=' + lat + '&lon=' + lon + '&&appid=' + API_KEY
      let api_uri = api + param
      let response = await axios.get(api_uri)
      this.setWeatherData(response)
    }
  },
  created() {
    this.$getLocation({
      enableHighAccuracy: true,
      timeout: Infinity
    })
      .then(coordinates => {
        this.fetchWeatherData(coordinates.lng, coordinates.lat)
      })
      .catch(function() {
        alert('Please allow JavaScript to access your browser location.')
      })
  }
}
</script>

<style scoped>
.card {
  color: rgb(28, 87, 84);
  background-color: rgb(203, 213, 235);
}

.icon {
  float: left;
}

.text {
  block-size: 70px;
  font-size: 20px;
  padding: 20px 200px 10px 200px;
}

.container {
  margin-top: 50px;
}

p {
  color: rgb(96, 106, 107);
  text-align: center;
  font-size: 20px;
}

#temp {
  font-size: 60px;
}
</style>
