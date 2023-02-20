import { SugestedCity } from '../sugested_city/SugestedCity'
import './style.css'

export function Loader( { setCityInputValue, functionClick } ) {
     return(
        <div className='loader'>
            <div className="sugested-citys-container">
                <SugestedCity 
                    value="Montes Claros" 
                    setCityInputValue={ () => {
                        setCityInputValue } 
                    }
                    functionClick={ functionClick }
                />

                <SugestedCity value="Olhos D'água"/>
            </div>

            <div className="sugested-citys-container">
                <SugestedCity value="Tokyo"/>
                <SugestedCity value="Montes Claros"/>
            </div>

            <div className="sugested-citys-container">
                <SugestedCity value="Montes Claros"/>
                <SugestedCity value="Montes Claros"/>
            </div>
        </div>
     )
}