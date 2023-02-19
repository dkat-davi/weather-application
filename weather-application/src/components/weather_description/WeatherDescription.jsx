import './style.css'

export function WeatherDescription( { description, weather_icon_code } ) {

    const weatherIconURL = "http://openweathermap.org/img/wn/"

    return(
        <div className="description-container">

            <p id="description">{ description }</p>

            <img 
                id='weather-icon'
                crossOrigin='anonymous'
                src={`${ weatherIconURL }${ weather_icon_code }.png`}
                alt="Ícone representando condições do tempo"
            />

        </div>
    )
}