import React,{ useState,useEffect }  from 'react';

//component
import MovieCard from './MovieCard';
import {APIKey} from '../APIKEY';
function MovieContainer(props) {
    const [data,setData] = useState([]);
    
    useEffect(async ()=>{
        let result = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&s=movies`)
        result = await result.json();
        setData(result);        
    },[]);
    return (
        <div>
            <MovieCard data={data}/>
        </div>
    );
}

export default MovieContainer;