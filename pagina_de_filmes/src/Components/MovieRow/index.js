import React, {useState} from "react";
import MapMovie from "../MapMovie"

import "./styles.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export default ({title, items}) => {

    const [scrollX, setScrollX] = useState (0)

    const handleLeftArrow = () => {
        let x = scrollX + (window.innerWidth/2)
        if( x > 0){
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - (window.innerWidth/2)
        let listWidth = items.results.length * 154;
        if((window.innerWidth - listWidth) > x){
            x = ((window.innerWidth/2) - listWidth) + 90 
        }

        setScrollX(x)
    }


    return(
        <div className='container--movieRow'>

            <h2>{title}</h2>

            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}}/>
            </div>

            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}}/>
            </div>

            <div className="movieRow">
                
                <div className="movieRow--listarea" 
                    style={{
                        width: items.results.length * 160,
                        marginLeft: scrollX
                    }}>

                    

                    <MapMovie 
                        item={items}
                        className={"movieRow--category"}
                    />

                </div> 
              
            </div>
        
        </div>
    )
}