import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import CategoryPage from "../Components/Categories";
import App from "../App"
import Movie from "../Components/Movie"
import SearchedMovie from "../Components/SearchedMovie";

export default() => {
    return(
        <BrowserRouter> 
            <Routes>
                <Route 
                    path="/" 
                    element={<App />}
                />
                <Route 
                    path="/action" 
                    element={<CategoryPage genre="action"/>} 
                />
                <Route 
                    path="/comedy" 
                    element={<CategoryPage genre="comedy"/>} 
                />
                <Route 
                    path="/documentary" 
                    element={<CategoryPage genre="documentary"/>} 
                />
                <Route 
                    path="/horror" 
                    element={<CategoryPage genre="horror"/>} 
                />
                <Route 
                    path="/romance" 
                    element={<CategoryPage genre="romance"/>} 
                />
                <Route 
                    path="/movie/:id" 
                    element={<Movie/>} 
                />
                <Route 
                    path="/searchedmovie" 
                    element={<SearchedMovie />} 
                />
              
                
            </Routes>
        </BrowserRouter>
    )
}