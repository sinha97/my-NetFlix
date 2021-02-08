import React, { useState,useEffect } from 'react';
import './Row.css';
import axios from '../../axios';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies,setMovies] = useState([]);

    const base_Url = "https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [], run once when the row loads and don't run it again
        // if [fetchUrl] => whever fetchUrl changes, the code runs again
    },[fetchUrl]);

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(movie=>(
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img 
                        key={movie.id} 
                        className={`row__poster ${isLargeRow && "row__posterLarge"} `} 
                        src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} 
                    />
                    
                    )
                ))};
            </div>

        </div>
    )
}

export default Row;
