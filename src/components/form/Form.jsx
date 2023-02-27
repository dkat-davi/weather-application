import { useState } from 'react'
import './style.css'

export function Form( { functionRenderData } ) {
    const [inputValue, setInputValue] = useState()

    return(
        <div className="form-container">
            <h3>Confira o clima de uma cidade:</h3>
            
            <div className="input-container">
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
                    id='search-button'
                    onClick={() => {
                        functionRenderData(inputValue)
                    }}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </button>
            </div>
        </div>
    )
}