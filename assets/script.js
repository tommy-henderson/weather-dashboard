var inputElement = document.querySelector('cityname')
var searchButton = document.querySelector('search-button')
var cityElement = document.querySelector('city')
var date = document.querySelector('current-date')
var weatherIcon = document.querySelector('weather-icon')
var temperature = document.querySelector('temperature')
var humidity = document.querySelector('humidity')
var wind = document.querySelector('wind')
var APIKey = "d8aa6a37fdec617dd7c486ab30f41f27"
var cityName = "chicago"

console.log(fetch("api.openweathermap.org/data/2.5/forecast?q=" + cityName + "appid=" + APIKey))