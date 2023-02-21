import { SugestedCity } from '../sugested_city/SugestedCity'
import './style.css'

export function Loader( props ) {
     return(
        <div  className='loader'>
          <div className="sugested-citys-container">
            <SugestedCity
              city="Montes Claros"
              functionClick={ props.functionRenderData }
            />
            <SugestedCity
              city="Olhos D'água"
              functionClick={ props.functionRenderData }
            />
          </div>
          <div className="sugested-citys-container">
            <SugestedCity
              city="Tokyo"
              functionClick={ props.functionRenderData }
            />
            <SugestedCity
              city="London"
              functionClick={ props.functionRenderData }
            />
          </div>
          <div className="sugested-citys-container">
            <SugestedCity
              city="São Paulo"
              functionClick={ props.functionRenderData }
            />
            <SugestedCity
              city="Cordisburgo"
              functionClick={ props.functionRenderData }
            />
          </div>
      </div>
     )
}