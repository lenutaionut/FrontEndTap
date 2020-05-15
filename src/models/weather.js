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
    humidity,
    dayname,
    feels_like
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
    this.dayname = dayname
    this.feels_like = feels_like
  }
}
