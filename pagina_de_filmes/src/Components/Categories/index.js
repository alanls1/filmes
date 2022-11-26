import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import NavBar from "../NavBar";
import useMovieList from "../Modules/MovieList";
import MapMovie from "../MapMovie"

import "./styles.css";


export default({genre})  => {
    
    const movieList = useMovieList.useMovieList()
    
    const categoriesFilter = movieList.filter(item => {
        return item.slug.includes(genre)
    })
    
    return(
        <div>
            <NavBar />
            <div>
                {categoriesFilter.map((item, key) => (
                    
                    <MapMovie 
                    title={item.title}
                    item={item.items}
                    className={"category"}
                    />
                    
                ))}
                
            </div>
             
             
            
        </div>
    )
}