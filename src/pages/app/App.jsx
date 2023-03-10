import React, { useState, useRef } from 'react';

import { Loader } from '../../components/loader/Loader'
import { Form } from '../../components/form/Form'
import { WeatherDescription } from '../../components/weather_description/WeatherDescription'
import { WeatherDetails } from '../../components/weather_details/WeatherDetails'
import { Error } from '../../components/error/Error'
import { Spinner } from '../../components/spinner/Spinner'

import './style.css'

function App() {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const [cityName, setCityName] = useState()
  const [countryCode, setCountryCode] = useState()
  const [temperature, setTemperature] = useState()
  const [weatherDescription, setWeatherDescription] = useState()
  const [weatherIcon, setWeatherIcon] = useState("10d")
  const [humidity, setHumidity] = useState()
  const [windSpeed, setWindSpeed] = useState()
  const [loading, setLoading] = useState(false)

  const weatherContainerRef = useRef()
  const loaderContainerRef = useRef()
  const error = useRef()

  async function getWeatherData(city) {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    
    setLoading(true)

    const response = await fetch(apiWeatherURL);
    const data = await response.json();

    setLoading(false)

    return data;
  }

  async function renderWeatherData(city) {
    const data = await getWeatherData(city)
    
    if (data.cod == 404 || data.cod == 400) {
      showError()
    }
    else {
      setCityName(data.name)
      setCountryCode(data.sys.country)
      setTemperature(parseInt(data.main.temp))
      setWeatherDescription(data.weather[0].description)
      setWeatherIcon(data.weather[0].icon)
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed)

      hideAppearDataContainer() 
    }
  }

  function showError() {
    error.current.classList.remove('hide'); 
    weatherContainerRef.current.classList.add('hide'); 
    loaderContainerRef.current.classList.add('hide'); 
  }

  function hideAppearDataContainer() {
    weatherContainerRef.current.classList.remove('hide'); 
    loaderContainerRef.current.classList.add('hide'); 
    error.current.classList.add('hide'); 
  }

  return (
    <div className="container">


      <Form 
        functionRenderData={ renderWeatherData } 
      />

      { loading && <Spinner />}

      <div ref={error} className="hide">
        {!loading && <Error />}
      </div>

      <div ref={ loaderContainerRef } >
        {!loading && 
          < Loader
          functionRenderData={renderWeatherData}
        />}
      </div>

      <div ref={ weatherContainerRef } className='hide' id="weather-data">

        <WeatherDescription 
          cityName={ cityName } 
          countryCode={ countryCode }
          temperature={ temperature }
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
