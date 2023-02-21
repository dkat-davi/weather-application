import { useState } from 'react'
import './style.css'

export function Form( { functionRenderData } ) {
    const [inputValue, setInputValue] = useState()

    return(
        <div className="form-input-container flex">
    
            <input 
                id='city-input'
                type="text"
                placeholder='Digite o nome da cidade'
                
                onChange={(event) => {
                    setInputValue(event.target.value)
                }}

                onKeyUp={(event) => {
                    if(event.code === "Enter") 
                    {
                        functionRenderData(inputValue)
                    }
                }}

            />

            <button 
                id='search' 
                onClick={() => {
                    functionRenderData(inputValue)
                }}>
                <i className='fa-solid fa-magnifying-glass'></i>
            </button>
    
        </div>
    )
}