import React, { useState } from 'react';

import { SugestedCity } from '../../components/sugested_city/SugestedCity'
import { Loader } from '../../components/loader/Loader'
import { Form } from '../../components/form/Form'
import { City } from '../../components/city/City'
import { Temperature } from '../../components/temperature/Temperature'
import { WeatherDescription } from '../../components/weather_description/WeatherDescription'
import { WeatherDetails } from '../../components/weather_details/WeatherDetails'

import './style.css'

function App() {
  const [cityInputValue, setCityInputValue] = useState()
  
  const [cityName, setCityName] = useState()
  const [countryCode, setCountryCode] = useState()
  const [temperature, setTemperature] = useState()
  const [weatherDescription, setWeatherDescription] = useState()
  const [weatherIcon, setWeatherIcon] = useState("10d")
  const [humidity, setHumidity] = useState()
  const [windSpeed, setWindSpeed] = useState()

  const weatherContainer = document.querySelector('#weather-data')
  const loader = document.querySelector('.loader')

  const apiKey = "YOURKEY"
  


  // Functions
  async function getWeatherData(city) {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const response = await fetch(apiWeatherURL);
    const data = await response.json();

    return data;
  }

  async function renderWeatherData(city) {
    const data = await getWeatherData(city)

    setCityName(data.name)
    setCountryCode(data.sys.country)
    setTemperature(parseInt(data.main.temp))
    setWeatherDescription(data.weather[0].description)
    setWeatherIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWindSpeed(data.wind.speed)

    loader.classList.add("hide")
    weatherContainer.classList.remove("hide")
  }

  function submitForm(city) {

    renderWeatherData(city)

  }

  return (
    
    <div className="container">
      <h3>Confira o clima de uma cidade:</h3>

      <Form 
        functionSubmitForm={ submitForm(cityInputValue) }
        setCityInputValue={ setCityInputValue }
      />  

      <div className='hide' id="weather-data">


        <City cityName={ cityName } countryCode={ countryCode }/>

        <Temperature temperature={ temperature } />

        <WeatherDescription 
          description={ weatherDescription } 
          weather_icon_code={ weatherIcon }
        />
        
        <WeatherDetails 
          humidity={ humidity } 
          wind={ windSpeed }
        />

      </div>
    </div>
  )
}

export default App
