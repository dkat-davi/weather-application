import './style.css'

export function Form( { functionSubmitForm, setCityInputValue} ) {

    return(
        <div className="form-input-container flex">
    
            <input 
                id='city-input'
                type="text"
                placeholder='Digite o nome da cidade'
                
                onChange={(event) => {
                    setCityInputValue(event.target.value)
                }}
                
                onKeyUp={(event) => {    
                    if (event.code === "Enter") {
                        functionSubmitForm()
                    }
                }}
            />

            <button 
                id='search' 
                onClick={functionSubmitForm}>
                <i className='fa-solid fa-magnifying-glass'></i>
            </button>
    
        </div>
    )
}