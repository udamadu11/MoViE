import React from 'react';

//component
import MovieCard from './MovieCard';

function MovieContainer({data}) {
   
    return (
        <div>
            <MovieCard data={data}/>
        </div>
    );
}

export default MovieContainer;