import './style.css'

export function Description() {

    return(
        <div className="description-container">

            <p id="description">Nublado</p>

            <img 
                id='weather-icon'
                src="http://openweathermap.org/img/wn/01d.png"      alt="Condições do tempo"
            />

        </div>
    )
}