const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1228af3f0amsh991bfc68f72b1ecp138ff3jsnb73ca5342a83',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) =>{
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    getWeatherofBangalore("Bangalore")
    getWeatherofMumbai("Mumbai")
    getWeatherofHyderabad("Hyderabad")
    getWeatherofPune("Pune")
})

getWeather("Delhi")

// Hyderabad
const getWeatherofHyderabad = (city) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        Hyderabad_cloud_pct.innerHTML = response.cloud_pct
        Hyderabad_feels_like.innerHTML = response.feels_like
        Hyderabad_humidity.innerHTML = response.humidity
        Hyderabad_max_temp.innerHTML = response.max_temp
        Hyderabad_min_temp.innerHTML = response.min_temp
        Hyderabad_sunrise.innerHTML = response.sunrise
        Hyderabad_sunset.innerHTML = response.sunset
        Hyderabad_temp.innerHTML = response.temp
        Hyderabad_wind_degrees.innerHTML = response.wind_degrees
        Hyderabad_wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
getWeatherofHyderabad("Hyderabad")

//Pune
const getWeatherofPune = (city) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        Pune_cloud_pct.innerHTML = response.cloud_pct
        Pune_feels_like.innerHTML = response.feels_like
        Pune_humidity.innerHTML = response.humidity
        Pune_max_temp.innerHTML = response.max_temp
        Pune_min_temp.innerHTML = response.min_temp
        Pune_sunrise.innerHTML = response.sunrise
        Pune_sunset.innerHTML = response.sunset
        Pune_temp.innerHTML = response.temp
        Pune_wind_degrees.innerHTML = response.wind_degrees
        Pune_wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
    
}
getWeatherofPune("Pune")

// Mumbai
const getWeatherofMumbai = (city) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        Mumbai_cloud_pct.innerHTML = response.cloud_pct
        Mumbai_feels_like.innerHTML = response.feels_like
        Mumbai_humidity.innerHTML = response.humidity
        Mumbai_max_temp.innerHTML = response.max_temp
        Mumbai_min_temp.innerHTML = response.min_temp
        Mumbai_sunrise.innerHTML = response.sunrise
        Mumbai_sunset.innerHTML = response.sunset
        Mumbai_temp.innerHTML = response.temp
        Mumbai_wind_degrees.innerHTML = response.wind_degrees
        Mumbai_wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
getWeatherofMumbai("Mumbai")

// Bangalore
const getWeatherofBangalore = (city) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        
        Bangalore_cloud_pct.innerHTML = response.cloud_pct
        Bangalore_feels_like.innerHTML = response.feels_like
        Bangalore_humidity.innerHTML = response.humidity
        Bangalore_max_temp.innerHTML = response.max_temp
        Bangalore_min_temp.innerHTML = response.min_temp
        Bangalore_sunrise.innerHTML = response.sunrise
        Bangalore_sunset.innerHTML = response.sunset
        Bangalore_temp.innerHTML = response.temp
        Bangalore_wind_degrees.innerHTML = response.wind_degrees
        Bangalore_wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
getWeatherofBangalore("Bangalore")
