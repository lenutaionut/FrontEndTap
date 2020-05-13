export default class Weather {
  constructor(
    city,
    country,
    temperature,
    temp_max,
    temp_min,
    icon,
    time,
    description,
    wind,
    humidity
  ) {
    this.city = city
    this.country = country
    this.temperature = temperature
    this.temp_max = temp_max
    this.temp_min = temp_min
    this.icon = icon
    this.time = time
    this.description = description
    this.wind = wind
    this.humidity = humidity
  }
}
