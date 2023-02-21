import './style.css'

export function SugestedCity( { city, functionClick } ) {
    const cityName = city;

    return(
        <div 
            className='sugested-city'
            onClick={ () => {
                functionClick( cityName )
            }
        }>
            { city }
        </div>
    )
}