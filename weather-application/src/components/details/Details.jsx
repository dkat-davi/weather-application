import './style.css'

export function Details( { umidity, wind } ) {
    return(
        <div id="details-container">
          
          <p id="umidity">
            <i className="fa-solid fa-droplet"></i>
            <span>{ umidity }%</span>
          </p>

          <p className="wind">
            <i className="fa-solid fa-wind"></i>
            <span>{ wind }km/h</span>
          </p>

        </div>
    )
}