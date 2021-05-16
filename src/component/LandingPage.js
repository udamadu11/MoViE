import React from 'react';

//component
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';

function LandingPage(props) {
    function getKeyword(event){
        console.log(event.target.value)
    }
    return (
        <div className="container">
            <SearchForm keyword={getKeyword}/>
            <MovieContainer />
        </div>
    );
}

export default LandingPage;