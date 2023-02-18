import './style.css'

export function Description( { description, icon_code } ) {

    return(
        <div className="description-container">

            <p id="description">{ description }</p>

            <img 
                id='weather-icon'
                crossOrigin='anonymous'
                src={`http://openweathermap.org/img/wn/${icon_code}.png`}      alt="Condições do tempo"
            />

        </div>
    )
}