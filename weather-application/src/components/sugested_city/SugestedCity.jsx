import './style.css'

export function SugestedCity( { value, setCityInputValue, functionSubmitForm } ) {
    
    return(
        <div 
            className='sugested-city'
            onClick={() => {
                setCityInputValue( { value } )
                functionSubmitForm()
            }
        }>
                { value }
        </div>
    )
}