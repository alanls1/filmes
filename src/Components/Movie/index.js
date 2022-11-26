import React from "react";
import NavBar from "../NavBar";
import { useParams } from "react-router-dom";
import getDetails from "../Modules/GetDetails";



import "./styles.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import DescriptionIcon from '@mui/icons-material/Description';


export default() => { 
    const {id} = useParams()

    const movie = getDetails.useGetDetails(id)
    
    const formatCurrency = (number) => {

        const numberFormat = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
          })

        return numberFormat.format(number) 

      }
    
    console.log(movie)
    return(
        <div>
            <NavBar />
            {movie && (

                 <div className="details">  
                        
                    <div>
                    
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}  alt={movie.original_title} /> 

                        <h2>{movie.title} </h2>
                                            
                    </div>

                    <div className="information"> 
                        <h3><AccountBalanceWalletIcon/> Orçamento:</h3>
                        <p> {formatCurrency(movie.budget)}</p> 

                        <h3><TrendingUpIcon/> Receita:</h3>
                        <p> {formatCurrency(movie.revenue)}</p>

                        <h3><HourglassTopIcon/> Duração:</h3>
                        <p> {movie.runtime} minutos</p>

                        <div>
                            <h3>Gêneros:</h3>
                            {movie.genres?.map((genre, key) => <p >{genre.name}</p>)}
                        </div>
                        <h3><DescriptionIcon/> Descrição:</h3>
                        <p> {movie.overview}</p>
                            
                    </div>

                </div> 
            )}
                                    
                       

        </div>
    )
}