import React, { useState, useEffect } from 'react';

import { Form } from '../../components/form/Form'
import { City } from '../../components/city/City'
import { Temperature } from '../../components/temperature/Temperature'
import { Description } from '../../components/description/Description'
import { Details } from '../../components/details/Details'

import './style.css'

function App() {
  const [weatherData, setWeatherData] = useState()
  const [cityInputValue, setCityInputValue] = useState()
  
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [weatherDescription, setWeatherDescription] = useState()
  const [temperature, setTemperature] = useState()
  const [countryIcon, setcountryIcon] = useState()
  const [humidity, setHumidity] = useState()
  const [windSpeed, setWindSpeed] = useState()

  const apiKey = "4c5a344d8487aa60331a63c23cb533d6"
  const apiCountryURL = "https://countryflagsapi.com/png/"
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&units=metric&appid=${apiKey}&lang=pt_br`;


  // Functions
  function submitForm(e) {
    e.preventDefault();

    renderWeatherData()
  }

  async function getWeatherData() {
    const response = await fetch(apiWeatherURL);
    const data = await response.json();

    return data;
  }

  async function renderWeatherData() {
    const data = await getWeatherData()

    setWeatherData(data)
    setCity(data.name)
    setCountry(`${apiCountryURL}${data.sys.country}`)
    setTemperature(parseInt(data.main.temp))
    setWeatherDescription(data.weather[0].description)
    setcountryIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWindSpeed(data.wind.speed)

    console.log(weatherData)
  }
  //

  useEffect(() => {
    renderWeatherData()
  }, [city])

  return (
    
    <div className="container">
      <h3>Confira o clima de uma cidade:</h3>

      <Form 
        functionSubmitForm={ submitForm }
        setCityInputValue={ setCityInputValue }
      />  

      <div id="weather-data">
        
        <City cityName={city} countryImgURL={country}/>

        <Temperature temperature={ temperature } />

        <Description description={ weatherDescription } icon_code={ countryIcon }/>
        
        <Details umidity={ humidity } wind={ windSpeed }/>

      </div>
    </div>
  )
}

export default App
