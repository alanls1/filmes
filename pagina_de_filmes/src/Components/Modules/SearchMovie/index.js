import React, { useEffect, useState } from "react";



const API_KEY = "ad20c727bbbaa5c065dd9a1c3556a50b";
const API_BASE = "https://api.themoviedb.org/3" ;

const basicFetch = async (endpoit) => {
    const req = await fetch(`${API_BASE}${endpoit}`)
    const json = await req.json()
    return json
}


function useSearchList(search){

    const [searchList, setSearchList] = useState([])  
    
    useEffect(() => {
        const loadAll = async () => {
                let list = await basicFetch(`/search/movie?api_key=${API_KEY}&query=${search}&language=pt-BR`)
                    
                setSearchList(list)
                    
            }
            loadAll();
    },[search])

    return searchList
}
  
 
export default {useSearchList }