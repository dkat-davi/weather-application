import './style.css'

export function WeatherDescription( { cityName, countryCode,  temperature, description, weather_icon_code } ) {

    const weatherIconURL = "http://openweathermap.org/img/wn/"
    const apiCountryURL = "https://countryflagsapi.com/png/"

    return(
        <div className="description-container">

            <div className="city">
                <h2>
                    <i className="fa-solid fa-location-dot"></i>
                
                    <span id="city">
                        { cityName }
                    </span>
                
                    <img
                        id='country'
                        crossOrigin="anonymous"
                        src={ apiCountryURL + countryCode }
                        alt="Bandeira do país referente a cidade"
                    />
                </h2>
            </div>

            <div className="weather-description">
                <p id="temperature">
                    <span>{ temperature }&deg;</span>
                </p>
                <img
                    id='weather-icon'
                    crossOrigin='anonymous'
                    src={`${ weatherIconURL }${ weather_icon_code }@2x.png`}
                    alt="Ícone representando condições do tempo"
                />
                <p id="description">{ description }</p>
            </div>

        </div>
    )
}