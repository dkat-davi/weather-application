import React, { useState } from 'react';

import { Form } from '../../components/form/Form'
import { City } from '../../components/city/City'
import { Temperature } from '../../components/temperature/Temperature'
import { Description } from '../../components/description/Description'
import { Details } from '../../components/details/Details'

import './style.css'

function App() {
  const [cityInputValue, setCityInputValue] = useState()
  const [city, setCity] = useState("Montes Claros")
  const [country, setCountry] = useState("https://countryflagsapi.com/svg/bra")

  function submitForm(e) {
    e.preventDefault();
    
    showWeatherData(cityInputValue)

  }

  const showWeatherData = (city) => {
    console.log(city);
  }

  const apiCountryURL = "https://countryflagsapi.com/png/"

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
