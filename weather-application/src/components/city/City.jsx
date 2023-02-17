import './style.css'

export function City( { cityName, countryImgURL } ) {
    
    return (
        <h2>
            <i className="fa-solid fa-location-dot"></i> 
            
            <span id="city">
                { cityName }
            </span>
            
            <img 
                id='country'
                crossOrigin="anonymous" 
                src={ countryImgURL } 
                alt="Bandeira do país" 
            />
        </h2>
    )
}