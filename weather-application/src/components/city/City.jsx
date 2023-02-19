import './style.css'

export function City( { cityName, countryCode } ) {
    const apiCountryURL = "https://countryflagsapi.com/png/"

    return (
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
    )
}