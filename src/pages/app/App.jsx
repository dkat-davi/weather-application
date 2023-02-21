import React, { useState, useRef } from 'react';

import { Loader } from '../../components/loader/Loader'
import { Form } from '../../components/form/Form'
import { City } from '../../components/city/City'
import { Temperature } from '../../components/temperature/Temperature'
import { WeatherDescription } from '../../components/weather_description/WeatherDescription'
import { WeatherDetails } from '../../components/weather_details/WeatherDetails'

import './style.css'

function App() {
  const [cityName, setCityName] = useState()
  const [countryCode, setCountryCode] = useState()
  const [temperature, setTemperature] = useState()
  const [weatherDescription, setWeatherDescription] = useState()
  const [weatherIcon, setWeatherIcon] = useState("10d")
  const [humidity, setHumidity] = useState()
  const [windSpeed, setWindSpeed] = useState()

  const weatherContainerRef = useRef()
  const loaderContainerRef = useRef()

  const apiKey = "YourAPIKey"

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

    hideAppearDataContainer()
  }

  function hideAppearDataContainer() {
    weatherContainerRef.current.classList.remove('hide'); 
    loaderContainerRef.current.classList.add('hide'); 
  }

  return (
    <div className="container">
      <h3>Confira o clima de uma cidade:</h3>

      <Form 
        functionRenderData={ renderWeatherData } 
      />

      <div ref={ loaderContainerRef } >
        < Loader
          functionRenderData={renderWeatherData}
        />
      </div>

      

      <div ref={ weatherContainerRef } className='hide' id="weather-data">


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
