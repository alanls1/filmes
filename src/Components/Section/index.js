import React, {useEffect,useState} from "react"; 
import MovieRow from "../MovieRow";
import useMovieList from "../Modules/MovieList";

import "./styles.css";

export default () => {
    const movieList = useMovieList.useMovieList()

    return(
        <div className="container--category">
            <section>
                
                {movieList.map((item, key) => (
                     <MovieRow 
                        key={key} 
                        title={item.title} 
                        items={item.items}
                    />

                    
                ))}
                
            </section>  
        </div>
    )
}