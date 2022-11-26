import React from "react";
import {Link, useNavigate} from "react-router-dom";

import  "../MapMovie/styles.css";

export default({title, item, className}) => {
    return(
        <div>  
            <div className={`${className}`}>
                <h2 className={`category--h2 ${className}`}>{title}</h2>
                
               <div className={`container--categories ${className}`}>
                    
                    {item.results?.length > 0 && item.results.map((item, key) => (
                                
                        <div className="category--area" >
                                    
                                <div className="category--movieImg">
                                        
                                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}  alt={item.original_title} /> 
                                        
                                </div>
                                    
                                <Link to={`/movie/${item.id}`} >
                                     
                                    <div className="category--info" >
                                            
                                        <div className="category--backGoundImg">
                                            <img src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} />
                                        </div>

                                        <div className="category--movieInfo">
                                            <h4>sinopse: </h4>
                                            <p>{item.overview}</p>   
                                        </div>   
                                                
                                    </div>

                                </Link>

                        </div>
                                
                    ))}

                </div> 

            </div>

                
        </div>
    )

    
}