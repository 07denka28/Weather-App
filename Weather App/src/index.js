function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }



  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }



  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturn"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

 




function search(event) {
  event.preventDefault();
  
  let cityInput = document.querySelector("#city-input");
  let citySearh = (cityInput.value);
  let apiKey = "05b285fc066c4cedc03280e8d6bfbd00";
  let apiUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${citySearh}`);

  function searchData(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = (`${temperature}`);
  
  
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = (`Humidity: ${humidity}%`);
  

  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = (`Wind: ${wind}m/s`);


  let city = (response.data.name);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = (`${city}`);


  let clouds = (response.data.weather[0].main);
  let cloudsElement = document.querySelector("#clouds");
  cloudsElement.innerHTML = (`${clouds}`);
}
axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(searchData);
}




let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);




function currentPosition(position) {
  let apiKey = "05b285fc066c4cedc03280e8d6bfbd00";
  
let positionLat = position.coords.latitude;
let positionLon = position.coords.longitude;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${positionLat}&lon=${positionLon}&units=metric`

function showData(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = (`${temperature}`);
  
  
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = (`Humidity: ${humidity}%`);
  

  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = (`Wind: ${wind}m/s`);


  let city = (response.data.name);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = (`${city}`);


  let clouds = (response.data.weather[0].main);
  let cloudsElement = document.querySelector("#clouds");
  cloudsElement.innerHTML = (`${clouds}`);
  
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showData);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let button = document.querySelector("#current");
button.addEventListener("click", getCurrentPosition);