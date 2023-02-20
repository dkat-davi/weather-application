import './style.css'

export function SugestedCity( props ) {
    const value = props.value
    return(
        <div 
            className='sugested-city'
            onClick={ () => {
                props.functionSetCityInputValue
                setTimeout(props.functionClick, 1000)
                 
            }
        }>
                { props.value }
        </div>
    )
}