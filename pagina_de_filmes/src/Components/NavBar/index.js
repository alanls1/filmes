import React, { useState} from "react";
import {Link, useNavigate} from "react-router-dom";
//import useSearchList from "../Modules/SearchMovie";
import Genres from "../Genres"

import  "./styles.css";
import SearchIcon from '@mui/icons-material/Search';


export default () => {
  const [searchMovie,setSearchMovie] = useState("")
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!searchMovie) return

    navigate(`/searchedmovie?q=${searchMovie}`)
    setSearchMovie("")
  }

  return (
    <div>
        <nav className="navbar">
            <form typeof="submit" className="navbar--components" onSubmit={handleSubmit}>
              <Link to="/" className="logo">MO</Link>

              <div className="navbar--divSearch">
                <input 
                  type="search" 
                  placeholder="Pesquisa" 
                  onChange={e => setSearchMovie(e.target.value)}
                  value={searchMovie}
                />

                <button> 
                    <SearchIcon />
                </button>

              </div> 
            
            </form>
            <Genres />
           
        </nav>
       
    </div>
  )
}
