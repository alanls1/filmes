import React, { useEffect, useState } from "react";



const API_KEY = "ad20c727bbbaa5c065dd9a1c3556a50b";
const API_BASE = "https://api.themoviedb.org/3" ;

const basicFetch = async (endpoit) => {
    const req = await fetch(`${API_BASE}${endpoit}`)
    const json = await req.json()
    return json
}


function useGetDetails(id){

    const [getDetails, setGetDetails] = useState([])  

    useEffect(() => {
        const loadAll = async () => {
                let list = await basicFetch(`/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
                    
                setGetDetails(list)
                    
            }
            loadAll();
    },[id])

    
    return getDetails
}
  
 
export default {useGetDetails }