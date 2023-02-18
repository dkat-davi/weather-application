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
  const [city, setCity] = useState("Montes Claros")
  const [country, setCountry] = useState("")

  const apiKey = "YourAPIKey"
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

    setCity(data.name)
    setCountry(`${apiCountryURL}${data.sys.country}`)

  }
  //

  useEffect(() => {
    renderWeatherData()
  }, [city])

  return (
    
    <div className="container">
      <h3>Confira o clima de uma cidade:</h3>

      <Form 
        functionSubmitForm={submitForm}
        setCityInputValue={setCityInputValue}
      />  

      <div id="weather-data">
        
        <City cityName={city} countryImgURL={country}/>

        <Temperature temperature="38"/>

        <Description />
        
        <Details />

      </div>
    </div>
  )
}

export default App
