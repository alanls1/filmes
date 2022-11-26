import React, { useEffect, useState } from "react";
import Tmdb from "../../../Tmdb";



function useMovieList(){

        const [movieCategory, setMovieCategory] = useState([])

        useEffect(() => {
            const loadAll = async () => {
                let list = await Tmdb.getHomeList()
                setMovieCategory(list)
            }
                loadAll();
        },[])

        return movieCategory
}
  
 
export default {useMovieList }