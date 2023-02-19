import { SugestedCity } from '../sugested_city/SugestedCity'
import './style.css'

export function Loader() {
     return(
        <div className='loader'>
            <div className="sugested-citys-container">
                <SugestedCity value="Montes Claros"/>
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