import './style.css'

export function WeatherDetails( { humidity, wind } ) {
    return(
        <div id="details-container">
          
          <p id="humidity">
            <i className="fa-solid fa-droplet"></i>
            <span>{ humidity }%</span>
          </p>

          <p className="wind">
            <i className="fa-solid fa-wind"></i>
            <span>{ wind }km/h</span>
          </p>

        </div>
    )
}