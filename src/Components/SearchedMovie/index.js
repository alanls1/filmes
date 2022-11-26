import React from "react";
import {Link, useSearchParams} from "react-router-dom";
import NavBar from "../NavBar";
import useSearchList from "../Modules/SearchMovie"
import MapMovie from "../MapMovie"


import "../Categories/styles.css";

export default()  => {
    const [searchParams] = useSearchParams()
 
    const query = searchParams.get("q")

    const searchingMovie = useSearchList.useSearchList(query)

   
    
    return(
        <div>
            <NavBar />
            <div>

                <MapMovie
                    title={`${searchingMovie.total_results} resultados encontrado para "${query}" .`} 
                    item={searchingMovie}
                    className={"category"}
                />
               
            </div>
            
            
                    
            
            
        </div>
    )
}