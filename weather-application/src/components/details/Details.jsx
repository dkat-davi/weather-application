import './style.css'

export function Details() {
    return(
        <div id="details-container">
          
          <p id="umidity">
            <i className="fa-solid fa-droplet"></i>
            <span>48%</span>
          </p>

          <p className="wind">
            <i className="fa-solid fa-wind"></i>
            <span>3km/h</span>
          </p>

        </div>
    )
}